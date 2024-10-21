import React, { useMemo, useRef, useState } from 'react';
import { AiFillPushpin, AiOutlineDown, AiOutlineLeft, AiOutlineRight, AiOutlineUp } from 'react-icons/ai';

export interface IColumns<T> {
    header: string;
    accessor: keyof T;
    sortable?: boolean;
    pinned?: boolean;
}

export interface IRows<T> {
    [key: string]: T[keyof T];
}

export interface DynamicTableProps<T> {
    columns: IColumns<T>[];
    data: IRows<T>[];
    withColumnFilter?: boolean;
    withPagination?: boolean;
    withSearch?: boolean;
    onEdit?: (row: number) => void;
    onDelete?: (row: number) => void;
}

export interface ISortConfig<T> {
    key: keyof T;
    direction: 'asc' | 'desc';
}

const CustomDynamicTable = <T,>({ columns, data, onEdit, onDelete, withPagination, withColumnFilter, withSearch }: DynamicTableProps<T>) => {
    const [settings, setSettings] = useState<{
        currentPage: number;
        sortConfig: ISortConfig<T> | null;
        visibleColumns: (keyof T)[];
        rowsPerPage: number;
        searchTerm: string;
        showDropdown: boolean;
    }>({
        currentPage: 1,
        sortConfig: null,
        visibleColumns: columns.map(col => col.accessor as keyof T),
        rowsPerPage: 5,
        searchTerm: '',
        showDropdown: false,
    });

    const MIN_WIDTH = 50;
    const pinnedColumns = columns.filter(col => col.pinned);
    const nonPinnedColumns = columns.filter(col => !col.pinned);

    const initialWidths = (cols: IColumns<T>[]) => cols.map(() => '150px');
    const [pinnedColumnWidths, setPinnedColumnWidths] = useState<string[]>(initialWidths(pinnedColumns));
    const [nonPinnedColumnWidths, setNonPinnedColumnWidths] = useState<string[]>(initialWidths(nonPinnedColumns));

    const isResizing = useRef(false);
    const currentColumnIndex = useRef<number | null>(null);

    const { currentPage, rowsPerPage, sortConfig, visibleColumns, searchTerm, showDropdown } = settings;

    const sortedData = useMemo(() => {
        const sortableItems = [...data];
        if (sortConfig) {
            sortableItems.sort((a, b) => {
                const key = sortConfig.key as keyof T;
                const compare = a[key as keyof IRows<T>] < b[key as keyof IRows<T>] ? -1 : 1;
                return sortConfig.direction === 'asc' ? compare : -compare;
            });
        }
        return sortableItems;
    }, [data, sortConfig]);

    const filteredData = useMemo(() => {
        const searchTermLower = searchTerm.toLowerCase();
        return sortedData.filter(row =>
            columns.some(column =>
                String(row[column.accessor as keyof IRows<T>]).toLowerCase().includes(searchTermLower)
            )
        );
    }, [sortedData, searchTerm, columns]);


    const currentData = withPagination
        ? filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
        : filteredData;

    const requestSort = (key: keyof T) => {
        const direction = (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') ? 'desc' : 'asc';
        setSettings(prev => ({ ...prev, sortConfig: { key, direction } }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value as keyof T;
        setSettings(prev => ({
            ...prev,
            visibleColumns: prev.visibleColumns.includes(value)
                ? prev.visibleColumns.filter(col => col !== value)
                : [...prev.visibleColumns, value],
        }));
    };

    const toggleDropdown = () => { setSettings(prev => ({ ...prev, showDropdown: !prev.showDropdown })); };

    const handleMouseDown = (e: React.MouseEvent, index: number, isPinned: boolean) => {
        e.preventDefault();
        isResizing.current = true;
        currentColumnIndex.current = index;

        const startX = e.clientX;
        const startWidth = isPinned ? parseInt(pinnedColumnWidths[index]) : parseInt(nonPinnedColumnWidths[index]);

        const handleMouseMove = (moveEvent: MouseEvent) => {
            if (!isResizing.current || currentColumnIndex.current === null) return;
            const newWidth = startWidth + (moveEvent.clientX - startX);
            if (isPinned) {
                setPinnedColumnWidths(prevWidths => {
                    const newWidths = [...prevWidths];
                    newWidths[currentColumnIndex.current!] = `${Math.max(newWidth, MIN_WIDTH)}px`;
                    return newWidths;
                });
            } else {
                setNonPinnedColumnWidths(prevWidths => {
                    const newWidths = [...prevWidths];
                    newWidths[currentColumnIndex.current!] = `${Math.max(newWidth, MIN_WIDTH)}px`;
                    return newWidths;
                });
            }
        };

        const handleMouseUp = () => {
            isResizing.current = false;
            currentColumnIndex.current = null;
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const renderColumns = (cols: IColumns<T>[], isPinned: boolean) => (
        cols.map((column, index) => {
            if (!visibleColumns.includes(column.accessor as keyof T)) return null;
            return (
                <th
                    key={column.accessor as string}
                    onClick={() => column.sortable && requestSort(column.accessor as keyof T)} // Ensure correct type
                    className={`px-6 py-3 relative font-medium text-gray-500 uppercase tracking-wider ${column.sortable ? 'cursor-pointer' : ''}`}
                    style={{ width: isPinned ? pinnedColumnWidths[index] : nonPinnedColumnWidths[index] }}
                >
                    <div className='flex justify-center items-center gap-3'>
                        {column.pinned && <AiFillPushpin />}
                        {column.header}
                        {sortConfig?.key === column.accessor && (sortConfig.direction === 'asc' ? <AiOutlineUp /> : <AiOutlineDown />)}
                        <div
                            onMouseDown={(e) => handleMouseDown(e, index, column.pinned!)}
                            className="absolute right-0 w-1 h-full bg-slate-300 cursor-col-resize"
                        />
                    </div>
                </th>
            );
        })
    );

    return (
        <div>
            <div id='table-controls' className='flex justify-end m-4 gap-3'>
                {withSearch && (
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSettings(prev => ({ ...prev, searchTerm: e.target.value }))}
                        className="rounded px-2 py-1 bg-slate-300"
                    />
                )}
                {withPagination && (
                    <>
                        <div id='row-controller'>
                            <label htmlFor="rows-per-page" className="mr-2">Rows per page:</label>
                            <select
                                id="rows-per-page"
                                value={rowsPerPage}
                                onChange={(e) => setSettings(prev => ({ ...prev, rowsPerPage: Number(e.target.value) }))}
                                className="rounded h-full px-2 bg-slate-300 hover:bg-slate-500 hover:text-white transition-all"
                            >
                                {[2, 5, 10, 15].map(num => <option key={num} value={num}>{num}</option>)}
                            </select>
                        </div>
                        <div id='pagination-controller'>
                            <button
                                onClick={() => setSettings(prev => ({ ...prev, currentPage: Math.max(prev.currentPage - 1, 1) }))}
                                className="h-full px-2 rounded-l-md bg-slate-300 disabled:opacity-50 hover:bg-slate-500 disabled:hover:bg-opacity-50 transition-all"
                                disabled={currentPage === 1}
                            >
                                <AiOutlineLeft />
                            </button>
                            <button
                                onClick={() => setSettings(prev => ({ ...prev, currentPage: Math.min(prev.currentPage + 1, Math.ceil(filteredData.length / rowsPerPage)) }))}
                                className="h-full px-2 rounded-r-md bg-slate-300 disabled:opacity-50 hover:bg-slate-500 disabled:hover:bg-opacity-50 transition-all"
                                disabled={currentPage === Math.ceil(filteredData.length / rowsPerPage)}
                            >
                                <AiOutlineRight />
                            </button>
                        </div>
                    </>
                )}
                {withColumnFilter && (
                    <div id='filter-controller'>
                        <button onClick={toggleDropdown} className="px-3 py-1 uppercase dropdown-button bg-slate-300 hover:bg-slate-500 hover:text-white tracking-wide transition rounded">
                            Select Columns
                        </button>
                        {showDropdown && (
                            <div className="dropdown-content absolute z-10 bg-white border border-gray-300 mt-2 rounded shadow-lg px-10 py-2">
                                {columns.map(column => (
                                    <label key={column.accessor as string} className="block">
                                        <input
                                            type="checkbox"
                                            value={column.accessor as string}
                                            className='mr-2'
                                            checked={visibleColumns.includes(column.accessor)}
                                            onChange={handleCheckboxChange}
                                        />
                                        {column.header}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className='overflow-scroll'>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className='bg-gray-100'>
                        <tr>
                            {renderColumns(pinnedColumns, true)}
                            {renderColumns(nonPinnedColumns, false)}
                            {(onEdit || onDelete) && <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider">Actions</th>}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 text-center">
                        {currentData.map((row, rowIndex) => (
                            <tr key={rowIndex} className='hover:bg-slate-100 transition'>
                                {pinnedColumns.map((column, colIndex) => (
                                    visibleColumns.includes(column.accessor as keyof T) && (
                                        <td key={column.accessor as string} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border"
                                            style={{ width: pinnedColumnWidths[colIndex] }}
                                        >
                                            {row[column.accessor as keyof T]}
                                        </td>
                                    )
                                ))}
                                {nonPinnedColumns.map((column, colIndex) => (
                                    visibleColumns.includes(column.accessor as keyof T) && (
                                        <td key={column.accessor as string} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border"
                                            style={{ width: nonPinnedColumnWidths[colIndex] }}
                                        >
                                            {row[column.accessor as keyof T]}
                                        </td>
                                    )
                                ))}
                                {(onEdit || onDelete) && (
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            onClick={() => onEdit && onEdit(rowIndex)}
                                            className="text-indigo-600 hover:text-indigo-900 mr-4 uppercase text-sm">
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => onDelete && onDelete(rowIndex)}
                                            className="text-red-600 hover:text-red-900 uppercase text-sm">
                                            Delete
                                        </button>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CustomDynamicTable