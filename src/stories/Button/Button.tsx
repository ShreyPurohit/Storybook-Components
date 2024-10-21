import { IconType } from 'react-icons'
type Size = 'small' | 'medium' | 'large';
type Variant = 'default' | 'primary' | 'success' | 'danger';

export interface ButtonProps {
    btn_label: string;
    onClick: () => void;
    icon?: IconType;
    btn_disabled?: boolean
    size?: Size,
    variant?: Variant
}

const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
};

const variantClasses = {
    default: "bg-transparent border border-black transition",
    primary: 'bg-blue-500 text-white hover:bg-blue-600 transition',
    success: "bg-green-500 text-white hover:bg-green-600 transition",
    danger: 'bg-red-500 text-white hover:bg-red-600 transition'
};

const Button: React.FC<ButtonProps> = ({ btn_label, onClick, icon: Icon, btn_disabled = false, size = 'medium', variant = 'default' }) => {
    const sizeClass = sizeClasses[size];
    const variantClass = variantClasses[variant];

    return (
        <div id="btn_wrapper">
            <button
                onClick={onClick}
                className={`flex items-center justify-center rounded-md ${btn_disabled ? 'opacity-50 cursor-not-allowed' : ''} ${sizeClass} ${variantClass}`}
                disabled={btn_disabled}
            >
                {Icon && <Icon title={`${Icon.name}`} className='mr-2' />}
                {btn_label}
            </button>
        </div>
    )
};

export default Button;
