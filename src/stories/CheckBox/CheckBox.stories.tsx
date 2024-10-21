import { Meta, StoryObj } from '@storybook/react';
import CheckBox from './CheckBox';

const meta: Meta<typeof CheckBox> = {
    title: 'Components/Checkbox',
    component: CheckBox,
    argTypes: {
        id: {
            control: { type: "text" },
            description: 'The unique identifier for the checkbox component.'
        },
        label: {
            control: { type: 'text' },
            description: 'Text label displayed next to the checkbox.'
        },
        checked: {
            control: { type: 'boolean' },
            description: 'Determines whether the checkbox is checked or not.'
        },
        onChange: {
            action: 'changed',
            description: 'Callback function triggered when the checkbox state changes.'
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Disables the checkbox if set to true, making it unselectable.'
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
            description: 'Size of the checkbox. Options include small, medium, or large.'
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'secondary', 'error'],
            description: 'Styling variant of the checkbox. Includes default, primary, secondary, and error.'
        }
    },
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `The \`CheckBox\` component is a versatile UI element used for triggering actions or capturing boolean input. It supports different sizes and styling variants to fit various design requirements. The checkbox can be enabled or disabled based on the application state, making it adaptable for different scenarios.`
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
    args: {
        id: 'default-checkbox',
        label: 'Default Checkbox',
        checked: false,
        size: 'small'
    },
    parameters: {
        docs: {
            description: {
                story: 'A default checkbox with a small size and standard styling. Suitable for general use cases where no special emphasis is required.'
            }
        }
    }
};

export const Primary: Story = {
    args: {
        id: 'primary-checkbox',
        label: 'Primary Checkbox',
        checked: true,
        variant: 'primary',
        size: 'medium'
    },
    parameters: {
        docs: {
            description: {
                story: 'A primary checkbox with medium size and emphasis on its importance. Ideal for actions that require user attention.'
            }
        }
    }
};

export const Secondary: Story = {
    args: {
        id: 'secondary-checkbox',
        label: 'Secondary Checkbox',
        variant: 'secondary',
        size: 'small'
    },
    parameters: {
        docs: {
            description: {
                story: 'A secondary checkbox with small size. Suitable for less prominent actions or secondary options.'
            }
        }
    }
};

export const Checked: Story = {
    args: {
        id: 'checked-checkbox',
        label: 'Checked Checkbox',
        checked: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'A checkbox with its checked state enabled. Demonstrates how the component appears when selected.'
            }
        }
    }
};

export const Error: Story = {
    args: {
        id: 'error-checkbox',
        label: 'Error Checkbox',
        variant: 'error'
    },
    parameters: {
        docs: {
            description: {
                story: 'An error variant checkbox used to highlight critical actions or issues that need user attention, such as delete or cancel actions.'
            }
        }
    }
};

export const Disabled: Story = {
    args: {
        id: 'disabled-checkbox',
        label: 'Disabled Checkbox',
        checked: false,
        disabled: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'A disabled checkbox that is not interactive. It visually indicates an inactive state and does not respond to user interactions.'
            }
        }
    }
};
