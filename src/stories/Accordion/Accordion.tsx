import { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

interface AccordionItem {
    title: string;
    content: React.ReactNode;
}

interface AccordionProps {
    items: AccordionItem[];
    variant: 'outline' | 'filled' | 'danger';
}

const getVariantClasses = (variant: string) => {
    switch (variant) {
        case 'filled':
            return 'bg-slate-400 text-white';
        case 'danger':
            return 'bg-red-400 text-white';
        case 'outline':
        default:
            return 'border border-gray-300 text-gray-700';
    }
};

const Accordion: React.FC<AccordionProps> = ({ items, variant }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const className = getVariantClasses(variant);
    return (
        <div className="rounded-md shadow-md">
            {items.map((item, index) => (
                <div key={index}>
                    <div
                        className={`flex justify-between items-center p-4 cursor-pointer transition ${className} border hover:bg-opacity-80`}
                        onClick={() => toggleItem(index)}
                    >
                        <h3 className="font-medium">{item.title}</h3>
                        {openIndex === index ? <AiOutlineUp /> : <AiOutlineDown />}
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                        {openIndex === index && (
                            <div className={`p-4 border-t ${variant === 'outline' ? 'border-gray-200' : 'border-transparent'}`}>
                                {item.content}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
