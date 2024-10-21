import { useState } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUpload } from 'react-icons/ai'

type Size = 'small' | 'medium' | 'large';
type Variant = 'default' | 'outlined' | 'filled' | 'error';
type type = 'text' | 'number' | 'email' | 'file' | 'password';

export interface InputProps {
    value?: string,
    icon?: IconType,
    disabled?: boolean,
    input_placeholder?: string,
    size?: Size,
    variant?: Variant,
    onClick?: React.MouseEventHandler<HTMLInputElement>,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    type?: type,
}

const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-3 text-base',
    large: 'py-3 px-4 text-lg',
};

const variantClasses = {
    default: 'border border-gray-300',
    outlined: 'border-2 border-gray-700',
    filled: 'bg-gray-100 border-transparent',
    error: 'border-2 border-red-500',
};

const Input: React.FC<InputProps> = ({ size = 'medium', type = 'text', variant = 'default', icon: Icon, input_placeholder, value, onChange, onClick, disabled }) => {

    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [fileName, setFileName] = useState<string>('')

    const togglePasswordVisibility = () => { setPasswordVisible(prevState => !prevState); };
    const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) { setFileName(file.name); }
        else { setFileName(''); }
        if (onChange) { onChange(event); }
    };

    return (
        <div className={`flex items-center ${sizeClasses[size]} ${variantClasses[variant]} rounded-md border`}>
            {Icon && type !== 'file' && <Icon className="text-gray-500 mx-2" />}
            {type === 'file' && (
                <div className="flex items-center">
                    <AiOutlineUpload className="text-gray-500 mx-2" />
                    <input
                        type="file"
                        disabled={disabled}
                        onChange={handleFileChange}
                        className={`flex-1 opacity-0 absolute w-full h-full ${disabled ? 'opacity-50 cursor-not-allowed' : ''} cursor-pointer`}
                    />
                    <span className="text-gray-500 mx-2">{fileName || input_placeholder}</span>
                </div>
            )}
            {type !== 'file' && (
                <>
                    <input
                        type={inputType}
                        placeholder={input_placeholder}
                        value={value}
                        disabled={disabled}
                        onChange={onChange}
                        onClick={onClick}
                        className={`flex-1 px-2 py-1 rounded-md border-none ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} focus:outline-none`}
                    />
                    {type === 'password' && (
                        <div
                            className="text-gray-500 mx-2 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >
                            {isPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default Input