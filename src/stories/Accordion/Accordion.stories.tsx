import { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
    title: "Components/Accordion",
    component: Accordion,
    argTypes: {
        variant: { control: "select", options: ['outline', 'filled', 'danger'] }
    },
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: `The Accordion component is designed to present collapsible content. It allows users to expand and collapse sections to manage space and provide an organized way to display information. This component supports different variants to match your design needs.`
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    args: {
        variant: 'outline',
        items: [
            {
                title: 'What is Accordion?',
                content: (
                    <>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nobis recusandae! Sint dolorem laboriosam quis officia odit, hic voluptates impedit dicta error debitis, facilis iste ut nobis cum quas repellat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repudiandae enim modi, minus beatae eaque saepe dolores dolor ab numquam, dicta reiciendis veritatis recusandae doloribus porro, corporis impedit nostrum alias.</p>
                    </>
                ),
            },
            {
                title: 'Is there a Figma file available?',
                content: (
                    <>
                        <p>Flowbite is first conceptualized and designed using the Figma software.</p>
                        <p>Check out the</p>
                    </>
                ),
            },
            {
                title: 'What are the differences between Flowbite and Tailwind UI?',
                content: (
                    <>
                        <p>The main difference is that Flowbite components are open-source, while Tailwind UI is a paid product.</p>
                        <p>Learn more about these technologies:</p>
                        <ul>
                            <li>Flowbite Pro</li>
                            <li>Tailwind UI</li>
                        </ul>
                    </>
                ),
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: `This story showcases the Accordion in its default outline variant, providing a minimalistic design suitable for general use. 

**Basic Usage:**

\`\`\`jsx
import Accordion from './Accordion';

const items = [
    {
        title: 'Item 1',
        content: <p>Content for item 1</p>,
    },
    {
        title: 'Item 2',
        content: <p>Content for item 2</p>,
    },
];

<Accordion variant="outline" items={items} />;
\`\`\``
            }
        }
    },
};

export const Filled: Story = {
    args: {
        variant: 'filled',
        items: [
            {
                title: 'What is Accordion?',
                content: (
                    <>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nobis recusandae! Sint dolorem laboriosam quis officia odit, hic voluptates impedit dicta error debitis, facilis iste ut nobis cum quas repellat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repudiandae enim modi, minus beatae eaque saepe dolores dolor ab numquam, dicta reiciendis veritatis recusandae doloribus porro, corporis impedit nostrum alias.</p>
                    </>
                ),
            },
            {
                title: 'Is there a Figma file available?',
                content: (
                    <>
                        <p>Flowbite is first conceptualized and designed using the Figma software.</p>
                        <p>Check out the</p>
                    </>
                ),
            },
            {
                title: 'What are the differences between Flowbite and Tailwind UI?',
                content: (
                    <>
                        <p>The main difference is that Flowbite components are open-source, while Tailwind UI is a paid product.</p>
                        <p>Learn more about these technologies:</p>
                        <ul>
                            <li>Flowbite Pro</li>
                            <li>Tailwind UI</li>
                        </ul>
                    </>
                ),
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: `This story showcases the Accordion in its filled variant, highlighting important sections with a filled background. 

**Basic Usage:**

\`\`\`jsx
import Accordion from './Accordion';

const items = [
    {
        title: 'Important Notice',
        content: <p>This is important information.</p>,
    },
    {
        title: 'Updates',
        content: <p>Stay tuned for updates.</p>,
    },
];

<Accordion variant="filled" items={items} />;
\`\`\``
            }
        }
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        items: [
            {
                title: 'What is Accordion?',
                content: (
                    <>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nobis recusandae! Sint dolorem laboriosam quis officia odit, hic voluptates impedit dicta error debitis, facilis iste ut nobis cum quas repellat.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repudiandae enim modi, minus beatae eaque saepe dolores dolor ab numquam, dicta reiciendis veritatis recusandae doloribus porro, corporis impedit nostrum alias.</p>
                    </>
                ),
            },
            {
                title: 'Is there a Figma file available?',
                content: (
                    <>
                        <p>Flowbite is first conceptualized and designed using the Figma software.</p>
                        <p>Check out the</p>
                    </>
                ),
            },
            {
                title: 'What are the differences between Flowbite and Tailwind UI?',
                content: (
                    <>
                        <p>The main difference is that Flowbite components are open-source, while Tailwind UI is a paid product.</p>
                        <p>Learn more about these technologies:</p>
                        <ul>
                            <li>Flowbite Pro</li>
                            <li>Tailwind UI</li>
                        </ul>
                    </>
                ),
            },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: `This story demonstrates the Accordion in its danger variant, ideal for displaying critical content that needs user attention.

**Basic Usage:**

\`\`\`jsx
import Accordion from './Accordion';

const items = [
    {
        title: 'Warning',
        content: <p>This action cannot be undone.</p>,
    },
    {
        title: 'Critical Update',
        content: <p>Please read this update carefully.</p>,
    },
];

<Accordion variant="danger" items={items} />;
\`\`\``
            }
        }
    },
};
