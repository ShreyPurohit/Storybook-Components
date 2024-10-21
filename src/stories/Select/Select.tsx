type Size = 'small' | 'medium' | 'large';
type Variant = 'default' | 'primary' | 'secondary' | 'error';

interface SelectProps {
    id?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    options: { value: string; label: string }[];
    disabled?: boolean;
    size?: Size;
    variant?: Variant;
}

const sizeClasses = {
    small: 'py-1 px-2 text-xs',
    medium: 'py-2 px-3 text-sm',
    large: 'py-3 px-4 text-base',
};

const variantClasses = {
    default: 'border-gray-300 bg-white text-gray-700',
    primary: 'border-blue-300 bg-blue-50 text-blue-700',
    secondary: 'border-green-300 bg-green-50 text-green-700',
    error: 'border-red-300 bg-red-50 text-red-700',
};

const Select: React.FC<SelectProps> = ({ id, value, options, disabled, onChange, size = 'medium', variant = 'default' }) => {

    return (
        <select
            id={id}
            value={value}
            onChange={onChange}
            className={`form-select ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={disabled}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}

export default Select