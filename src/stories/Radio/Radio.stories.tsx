import { Meta, StoryObj } from '@storybook/react';
import Radio from './RadioButton';

const meta: Meta<typeof Radio> = {
    title: 'Components/Radio',
    component: Radio,
    argTypes: {
        onChange: { action: 'changed' },
        label: { control: 'text', description: 'The text label displayed next to the radio button.' },
        disabled: { control: 'boolean', description: 'If true, the radio button is disabled and cannot be interacted with.' },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
            description: 'The size of the radio button. Options are small, medium, or large.'
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'secondary', 'error'],
            description: 'The visual style of the radio button. Options include default, primary, secondary, or error.'
        },
    },
    parameters: {
        docs: {
            description: {
                component: `The \`RadioButton\` component is a customizable radio button that allows users to select one option from a set. It supports various states and styles to fit different use cases in your application.

**Usage:**

To use the \`RadioButton\` component, import it into your project and include it in your form or user interface as needed. Customize it using the available props to match your design requirements.

\`\`\`jsx
import RadioButton from './RadioButton';

const MyForm = () => (
    <form>
        <RadioButton
            id="option1"
            name="options"
            label="Option 1"
            checked={true}
        />
        <RadioButton
            id="option2"
            name="options"
            label="Option 2"
        />
    </form>
);
\`\`\`

**Additional Notes:**

- Ensure that all radio buttons in a group share the same \`name\` to allow proper selection behavior.
- The \`variant\` and \`size\` props can be combined to achieve the desired appearance and size of the radio button.`,
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
    args: {
        id: 'default-radio',
        name: 'group1',
        label: 'Default Radio',
        checked: false,
    },
    parameters: {
        docs: {
            description: {
                story: `A basic radio button with default styling and no selected state.`,
            },
        },
    },
};

export const Primary: Story = {
    args: {
        id: 'primary-radio',
        name: 'group1',
        label: 'Primary Radio',
        checked: true,
        variant: 'primary',
    },
    parameters: {
        docs: {
            description: {
                story: `A primary-styled radio button that is pre-selected.`,
            },
        },
    },
};

export const Secondary: Story = {
    args: {
        id: 'secondary-radio',
        name: 'group2',
        label: 'Secondary Radio',
        checked: true,
        variant: 'secondary',
    },
    parameters: {
        docs: {
            description: {
                story: `A secondary-styled radio button that is pre-selected.`,
            },
        },
    },
};

export const Error: Story = {
    args: {
        id: 'error-radio',
        name: 'group1',
        label: 'Error Radio',
        variant: 'error',
    },
    parameters: {
        docs: {
            description: {
                story: `An error-styled radio button. This can be used to indicate an issue or a required field.`,
            },
        },
    },
};

export const Disabled: Story = {
    args: {
        id: 'disabled-radio',
        name: 'group1',
        label: 'Disabled Radio',
        checked: false,
        disabled: true,
    },
    parameters: {
        docs: {
            description: {
                story: `A disabled radio button that cannot be selected or interacted with.`,
            },
        },
    },
};
