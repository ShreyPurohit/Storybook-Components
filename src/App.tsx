import { useState, useRef } from "react";

function App() {
   const [columnWidths, setColumnWidths] = useState<string[]>(["150px", "150px", "150px"]); // Initial widths
    const isResizing = useRef(false);
    const currentColumnIndex = useRef<number | null>(null);
    const MIN_WIDTH = 50; // Minimum width for columns

    const handleMouseDown = (e: React.MouseEvent, index: number) => {
        e.preventDefault();
        isResizing.current = true;
        currentColumnIndex.current = index;

        const startX = e.clientX;
        const startWidth = parseInt(columnWidths[index]);

        const handleMouseMove = (moveEvent: MouseEvent) => {
            if (!isResizing.current || currentColumnIndex.current === null) return;

            const newWidth = startWidth + (moveEvent.clientX - startX);
            setColumnWidths((prevWidths) => {
                const newWidths = [...prevWidths];
                newWidths[currentColumnIndex.current!] = `${Math.max(newWidth, MIN_WIDTH)}px`; // Update only the current column width
                return newWidths;
            });
        };

        const handleMouseUp = () => {
            isResizing.current = false;
            currentColumnIndex.current = null;
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <div className="overflow-auto">
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        {["Column 1", "Column 2", "Column 3"].map((header, index) => (
                            <th key={index} className="relative border border-gray-300 bg-gray-200 px-4 py-2">
                                {header}
                                <div
                                    className="absolute right-0 top-0 h-full w-1 cursor-col-resize bg-gray-400"
                                    onMouseDown={(e) => handleMouseDown(e, index)}
                                />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[...Array(5)].map((_, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-gray-100">
                            {["Data 1", "Data 2", "Data 3"].map((data, index) => (
                                <td key={index} className="border border-gray-300 px-4 py-2" style={{ width: columnWidths[index] }}>
                                    {data}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App
