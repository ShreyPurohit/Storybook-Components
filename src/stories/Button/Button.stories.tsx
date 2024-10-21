import { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        onClick: {
            action: 'clicked',
            description: "Callback function triggered when the button is clicked."
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
            description: 'Size of the button. Can be small, medium, or large.'
        },
        variant: {
            control: { type: 'select' },
            options: ['default', 'primary', 'secondary', 'danger'],
            description: 'Styling variant of the button. Includes default, primary, secondary, and danger.'
        },
        icon: {
            control: { type: 'select' },
            options: [null, 'AiOutlineCheckCircle', 'AiOutlineClose', 'AiOutlineCloseCircle'],
            mapping: {
                'AiOutlineCheckCircle': AiOutlineCheckCircle,
                'AiOutlineClose': AiOutlineClose,
                'AiOutlineCloseCircle': AiOutlineCloseCircle
            },
            description: 'Icon to display in the button. Choose from a set of predefined icons or leave null for no icon.'
        },
        btn_label: {
            control: 'text',
            description: 'Label text displayed inside the button.'
        },
        btn_disabled: {
            control: 'boolean',
            description: 'Disables the button if true.'
        }
    },
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `The Button component is a versatile UI element used for triggering actions. It supports various sizes and styling variants, and can optionally display an icon. The button can also be disabled based on user interaction or application state.`
            }
        }
    }
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        btn_label: "Click Me",
        size: 'small',
        variant: 'default',
        onClick: () => { console.log('Default button Clicked') },
    },
    parameters: {
        docs: {
            description: {
                story: 'The default button with a small size and default styling. Suitable for general use cases.'
            }
        }
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const button = canvas.getByText('Click Me')
        await userEvent.click(button)
    }
}

export const Primary: Story = {
    args: {
        btn_label: "Primary",
        size: "medium",
        variant: "primary",
        onClick: () => { console.log('Primary button Clicked') },
    },
    parameters: {
        docs: {
            description: {
                story: 'A primary button with medium size. Ideal for primary actions that require emphasis.'
            }
        }
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const button = canvas.getByText('Primary')
        await userEvent.click(button)
    }
}

export const Success: Story = {
    args: {
        btn_label: "Submit",
        icon: AiOutlineCheckCircle,
        variant: "success",
        size: "medium"
    },
    parameters: {
        docs: {
            description: {
                story: 'A success button with an icon indicating successful actions. Useful for submit actions or positive confirmations.'
            }
        }
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const button = canvas.getByText('Submit')
        expect(button).toBeInTheDocument()
        const svg = canvas.getByTitle('AiOutlineCheckCircle')
        expect(svg).toBeInTheDocument()
    }
}

export const Danger: Story = {
    args: {
        btn_label: "Danger!",
        variant: 'danger',
        icon: AiOutlineCloseCircle,
    },
    parameters: {
        docs: {
            description: {
                story: 'A danger button with an icon for critical actions that might require user attention, such as delete or cancel actions.'
            }
        }
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const button = canvas.getByText(/Danger/i)
        expect(button).toBeInTheDocument()
    }
}

export const Disabled: Story = {
    args: {
        btn_label: "Disabled",
        variant: 'default',
        icon: AiOutlineClose,
        btn_disabled: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'A disabled button which is not interactive. It visually represents an inactive state and does not respond to user interactions.'
            }
        }
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const button = canvas.getByText('Disabled')
        expect(button).toBeDisabled()
    }
}