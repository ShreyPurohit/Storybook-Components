import { Meta, StoryObj } from "@storybook/react";
import Table, { DynamicTableProps, IColumns, IRows } from "./Table";

const meta: Meta<typeof Table> = {
    title: 'Components/Table',
    component: Table,
    argTypes: {
        withColumnFilter: {
            control: { type: "boolean" }
        },
        withPagination: {
            control: { type: "boolean" }
        },
        withSearch: {
            control: { type: "boolean" }
        }
    },
    parameters: {
        docs: {
            description: {
                component: `
### Table Component

The Table component is a versatile and dynamic table for displaying data in a structured format. 

#### Features:
- **Sorting**: Columns can be sortable for easy data navigation.
- **Pagination**: Manage large datasets effectively with pagination controls.
- **Filtering**: Filter columns to show or hide data as needed.
- **Search**: Search functionality for quick data retrieval.
- **Action Buttons**: Provide edit and delete functionalities for each row.

#### Usage

To use the Table component, pass the following props:

- **columns**: An array of column definitions. Each column can have properties like \`header\`, \`accessor\`, \`sortable\`, and \`pinned\`.
- **data**: An array of row data that matches the column accessors.
- **withColumnFilter**: A boolean indicating if the column filter should be displayed.
- **withPagination**: A boolean to enable pagination.
- **withSearch**: A boolean to show a search input for filtering rows.
- **onEdit**: Optional callback function triggered when the edit action is clicked.
- **onDelete**: Optional callback function triggered when the delete action is clicked.
\`\`\`
`
            },
        },
    },
};

export default meta;

type Story = StoryObj<DynamicTableProps<IColumnProp>>;

interface IColumnProp {
    id: number;
    name: string;
    email: string;
    age: number;
}

const columns: IColumns<IColumnProp>[] = [
    { header: 'ID', accessor: 'id', sortable: true },
    { header: 'Name', accessor: 'name', sortable: true },
    { header: 'Email', accessor: 'email', sortable: true },
    { header: 'Age', accessor: 'age' },
];

const data: IRows<IColumnProp>[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 45 },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 23 },
    { id: 5, name: 'Charlie Black', email: 'charlie@example.com', age: 30 },
    { id: 6, name: 'Dave White', email: 'dave@example.com', age: 40 },
];

const onEdit = (row: number) => { console.log(`Edited Row ${row} Successfully`); };
const onDelete = (row: number) => { console.log(`Deleted Row ${row} Successfully`); };

export const Default: Story = {
    args: {
        columns,
        data,
        withColumnFilter: false,
        withPagination: false,
        withSearch: false,
        onEdit,
        onDelete,
    }
};

export const WithPagination: Story = {
    args: {
        columns,
        data,
        withPagination: true
    }
};

export const WithColumnPinning: Story = {
    args: {
        columns: columns.map(column => column.accessor === 'email' ? { ...column, pinned: true } : column),
        data
    }
};

export const WithColumnFilter: Story = {
    args: {
        columns,
        data,
        withColumnFilter: true
    }
};

export const WithActionButtons: Story = {
    args: {
        columns,
        data,
        onEdit,
        onDelete
    }
};

export const WithSearch: Story = {
    args: {
        columns,
        data,
        withSearch: true
    }
};

export const CompleteTable: Story = {
    args: {
        columns: columns.map(column => column.accessor === 'email' ? { ...column, pinned: true } : column),
        data,
        withSearch: true,
        withColumnFilter: true,
        withPagination: true,
        onEdit,
        onDelete
    }
};
