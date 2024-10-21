type Size = 'small' | 'medium' | 'large';
type Variant = 'default' | 'primary' | 'secondary' | 'error';

interface CheckboxProps {
    id?: string;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    label?: string;
    disabled?: boolean;
    size?: Size;
    variant?: Variant;
}

const sizeClasses = {
    small: 'h-3 w-3',
    medium: 'h-4 w-4',
    large: 'h-5 w-5',
};

const variantClasses = {
    default: 'text-gray-600 border-gray-300',
    primary: 'text-blue-600 border-blue-300',
    secondary: 'text-green-600 border-green-300',
    error: 'text-red-600 border-red-300',
};

const CheckBox: React.FC<CheckboxProps> = ({ id, label, checked, disabled, onChange, size = 'medium', variant = 'default' }) => {

    return (
        <label htmlFor={id} className={`flex items-center cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className={`form-checkbox ${sizeClasses[size]} `}
                disabled={disabled}
            />
            {label && <span className={`ml-2 text-gray-700 ${variantClasses[variant]} ${disabled ? 'text-gray-400' : ''}`}>{label}</span>}
        </label>
    )
}

export default CheckBox