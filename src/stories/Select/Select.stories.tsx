import { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    argTypes: {
        onChange: { action: 'changed' },
        value: { control: 'text', description: 'The currently selected value of the select input.' },
        disabled: { control: 'boolean', description: 'If true, the select input is disabled and cannot be interacted with.' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
            description: 'The size of the select input. Options include small, medium, or large.'
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'secondary', 'error'],
            description: 'The visual style of the select input. Options include default, primary, secondary, or error.'
        },
    },
    parameters: {
        docs: {
            description: {
                component: `The \`Select\` component is a customizable select dropdown that allows users to choose from a list of options. It supports various states and styles to fit different use cases in your application.

**Usage:**

To use the \`Select\` component, import it into your project and include it in your form or user interface as needed. Customize it using the available props to match your design requirements.

\`\`\`jsx
import Select from './Select';

const MyForm = () => (
    <form>
        <Select
            id="my-select"
            value="option1"
            options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' },
            ]}
        />
    </form>
);
\`\`\`

**Additional Notes:**

- Ensure that \`options\` is an array of objects with \`value\` and \`label\` properties.
- The \`variant\` and \`size\` props can be combined to achieve the desired appearance and size of the select input.`,
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        id: 'default-select',
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: `A basic select input with default styling and a list of options.`,
            },
        },
    },
};

export const Primary: Story = {
    args: {
        id: 'primary-select',
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
        ],
        variant: 'primary',
    },
    parameters: {
        docs: {
            description: {
                story: `A primary-styled select input with a list of options.`,
            },
        },
    },
};

export const Secondary: Story = {
    args: {
        id: 'secondary-select',
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
        ],
        variant: 'secondary',
    },
    parameters: {
        docs: {
            description: {
                story: `A secondary-styled select input with a list of options.`,
            },
        },
    },
};

export const Error: Story = {
    args: {
        id: 'error-select',
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
        ],
        variant: 'error',
    },
    parameters: {
        docs: {
            description: {
                story: `An error-styled select input with a list of options.`,
            },
        },
    },
};

export const Disabled: Story = {
    args: {
        id: 'disabled-select',
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
        ],
        disabled: true,
    },
    parameters: {
        docs: {
            description: {
                story: `A disabled select input that cannot be interacted with.`,
            },
        },
    },
};
