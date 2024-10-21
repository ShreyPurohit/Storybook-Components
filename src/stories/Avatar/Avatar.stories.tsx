import { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: "Components/Avatar",
    component: Avatar,
    argTypes: {
        alt: {
            control: "text",
        },
        variant: {
            control: "select",
            options: ['default', 'square', 'diamond'],
        },
        size: {
            control: "select",
            options: ['small', 'medium', 'large'],
        },
        src: {
            control: "text",
        },
        online: {
            control: "boolean",
        },
    },
    parameters: {
        docs: {
            description: {
                component: `The Avatar component is designed to represent a user visually. It can display images or initials, and supports multiple shapes and sizes. You can also indicate online/offline status using a visual indicator.`
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        size: 'medium',
        variant: 'default',
        src: 'https://github.com/shadcn.png',
        alt: 'Avatar',
        online: true,
    },
    parameters: {
        docs: {
            description: {
                story: `This is the default avatar size and shape, showcasing an online user. 

**Basic Usage:**

\`\`\`jsx
import Avatar from './Avatar';

<Avatar 
    size="medium" 
    variant="default" 
    src="https://github.com/shadcn.png" 
    alt="User Avatar" 
    online={true} 
/>
\`\`\``
            }
        }
    },
};

export const SmallAvatar: Story = {
    args: {
        size: 'small',
        variant: 'default',
        src: 'https://github.com/shadcn.png',
        alt: 'Small Avatar',
        online: true
    },
    parameters: {
        docs: {
            description: {
                story: `This avatar is small in size, suitable for compact UI elements. 

**Basic Usage:**

\`\`\`jsx
import Avatar from './Avatar';

<Avatar 
    size="small" 
    variant="default" 
    src="https://github.com/shadcn.png" 
    alt="Small User Avatar" 
    online={true} 
/>
\`\`\``
            }
        }
    },
};

export const LargeAvatar: Story = {
    args: {
        size: 'large',
        variant: 'default',
        src: 'https://github.com/shadcn.png',
        alt: 'Large Avatar',
        online: true
    },
    parameters: {
        docs: {
            description: {
                story: `This avatar is large, ideal for profile displays or prominent placements. 

**Basic Usage:**

\`\`\`jsx
import Avatar from './Avatar';

<Avatar 
    size="large" 
    variant="default" 
    src="https://github.com/shadcn.png" 
    alt="Large User Avatar" 
    online={true} 
/>
\`\`\``
            }
        }
    },
};

export const SquareAvatar: Story = {
    args: {
        size: 'medium',
        variant: 'square',
        src: 'https://github.com/shadcn.png',
        alt: 'Square Avatar',
        online: true
    },
    parameters: {
        docs: {
            description: {
                story: `This avatar is styled in a square shape, providing a modern look. 

**Basic Usage:**

\`\`\`jsx
import Avatar from './Avatar';

<Avatar 
    size="medium" 
    variant="square" 
    src="https://github.com/shadcn.png" 
    alt="Square User Avatar" 
    online={true} 
/>
\`\`\``
            }
        }
    },
};

export const DiamondAvatar: Story = {
    args: {
        size: 'medium',
        variant: 'diamond',
        src: 'https://github.com/shadcn.png',
        alt: 'Diamond Avatar',
        online: true
    },
    parameters: {
        docs: {
            description: {
                story: `This avatar features a diamond shape, offering a unique and stylish presentation. 

**Basic Usage:**

\`\`\`jsx
import Avatar from './Avatar';

<Avatar 
    size="medium" 
    variant="diamond" 
    src="https://github.com/shadcn.png" 
    alt="Diamond User Avatar" 
    online={true} 
/>
\`\`\``
            }
        }
    },
};

export const OfflineAvatar: Story = {
    args: {
        size: 'medium',
        variant: 'default',
        src: 'https://github.com/shadcn.png',
        alt: 'Offline Avatar',
        online: false,
    },
    parameters: {
        docs: {
            description: {
                story: `This avatar shows an offline user, visually indicating their status. 

**Basic Usage:**

\`\`\`jsx
import Avatar from './Avatar';

<Avatar 
    size="medium" 
    variant="default" 
    src="https://github.com/shadcn.png" 
    alt="Offline User Avatar" 
    online={false} 
/>
\`\`\``
            }
        }
    },
};
