import { Meta, StoryObj } from "@storybook/react";
import { AiOutlineCloseSquare, AiOutlineLock, AiOutlineMail, AiOutlineNumber, AiOutlineUser } from 'react-icons/ai';
import Input from "./Input";

const meta: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
    argTypes: {
        size: {
            control: { type: "select" },
            options: ['small', 'medium', 'large'],
            description: 'Size of the input field. Options include small, medium, or large.'
        },
        type: {
            control: { type: "select" },
            options: ['text', 'number', 'email', 'file', 'password'],
            description: 'Type of the input field. Determines the kind of data the input accepts.'
        },
        variant: {
            control: { type: "select" },
            options: ['default', 'outlined', 'filled', 'error'],
            description: 'Variant style of the input field. Determines the appearance of the input.'
        },
        icon: {
            control: { type: 'select' },
            options: [null, 'AiOutlineUser', 'AiOutlineLock', 'AiOutlineMail', 'AiOutlineNumber', 'AiOutlineCloseSquare'],
            mapping: {
                'AiOutlineUser': AiOutlineUser,
                'AiOutlineLock': AiOutlineLock,
                'AiOutlineMail': AiOutlineMail,
                'AiOutlineNumber': AiOutlineNumber,
                'AiOutlineCloseSquare': AiOutlineCloseSquare
            },
            description: 'Icon to display in the input field. Use for adding visual cues to the input.'
        },
        disabled: {
            control: { type: 'boolean' },
            description: 'Whether the input field is disabled. When true, the input cannot be interacted with.'
        },
        onClick: { action: 'clicked' },
        onChange: { action: 'changed' }
    },
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `The \`Input\` component is a versatile input field that supports various types, sizes, and styles. It can include icons, handle file uploads, and manage password visibility. The component is designed to be highly customizable to fit different use cases in your application.

**Usage:**

To use the \`Input\` component, import it and include it in your form or UI. Customize it using the available props to match your design needs.

\`\`\`jsx
import Input from './Input';

const MyForm = () => (
    <form>
        <Input
            size="medium"
            type="text"
            variant="default"
            placeholder="Enter text..."
        />
    </form>
);
\`\`\`

**Additional Notes:**

- The \`icon\` prop can be used to add an icon inside the input field for visual cues.
- Ensure that \`type\` and \`variant\` are set according to the intended use and design requirements.`,
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        size: 'small',
        type: 'text',
        variant: 'default',
        input_placeholder: 'Enter text...',
    },
    parameters: {
        docs: {
            description: {
                story: 'The default input field with small size and no icon. Ideal for general use cases where no additional styling is needed.'
            }
        }
    }
}

export const Username: Story = {
    args: {
        size: 'small',
        type: 'text',
        variant: "default",
        input_placeholder: "Enter Username...",
        icon: AiOutlineUser
    },
    parameters: {
        docs: {
            description: {
                story: 'An input field designed for entering a username. It includes a user icon to visually represent the input type.'
            }
        }
    }
}

export const Password: Story = {
    args: {
        size: 'small',
        type: 'password',
        variant: "default",
        input_placeholder: "Enter Password...",
        icon: AiOutlineLock
    },
    parameters: {
        docs: {
            description: {
                story: 'A password input field that includes a lock icon. This field supports functionality to toggle password visibility.'
            }
        }
    }
}

export const Email: Story = {
    args: {
        size: 'small',
        type: "email",
        variant: 'default',
        input_placeholder: "Enter Email...",
        icon: AiOutlineMail
    },
    parameters: {
        docs: {
            description: {
                story: 'An input field for entering an email address with an email icon for better user guidance.'
            }
        }
    }
}

export const File: Story = {
    args: {
        size: 'small',
        type: 'file',
        variant: 'default',
        input_placeholder: "Upload File..."
    },
    parameters: {
        docs: {
            description: {
                story: 'A file input field that allows users to upload files. It features a placeholder text for better guidance.'
            }
        }
    }
}

export const Number: Story = {
    args: {
        size: 'small',
        type: 'number',
        variant: 'default',
        input_placeholder: 'Enter Number...',
        icon: AiOutlineNumber
    },
    parameters: {
        docs: {
            description: {
                story: 'A number input field with increment and decrement buttons, accompanied by a number icon to indicate its purpose.'
            }
        }
    }
}

export const Error: Story = {
    args: {
        size: "small",
        type: "text",
        input_placeholder: "Enter Name...",
        icon: AiOutlineUser,
        variant: 'error'
    },
    parameters: {
        docs: {
            description: {
                story: 'An error variant input field with a placeholder text and a user icon. Designed to highlight errors or validation issues.'
            }
        }
    }
}

export const Disabled: Story = {
    args: {
        size: 'small',
        type: "email",
        variant: 'default',
        disabled: true,
        icon: AiOutlineCloseSquare,
        input_placeholder: "Disabled Field..."
    },
    parameters: {
        docs: {
            description: {
                story: 'A disabled input field that cannot be interacted with. Includes an error icon and placeholder text to indicate its disabled state.'
            }
        }
    }
}
