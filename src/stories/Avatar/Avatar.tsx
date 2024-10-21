type Size = 'small' | 'medium' | 'large';
type Variant = 'default' | 'square' | 'diamond';

export interface AvatarProps {
    size: Size;
    variant: Variant;
    src: string;
    alt: string;
    online: boolean;
}

const sizeClasses = {
    small: 'h-10 w-10',
    medium: 'h-12 w-12',
    large: 'h-16 w-16',
};

const variantClasses = {
    default: 'rounded-full',
    square: 'rounded-sm',
    diamond: 'rounded-md',
};

const onlineIndicatorClasses = {
    small: 'bottom-0 left-6',
    medium: 'bottom-0 left-8',
    large: 'bottom-0 left-10',
};

const Avatar: React.FC<AvatarProps> = ({ alt, size, src, variant, online }) => {
    return (
        <div className={`relative ${sizeClasses[size]}`}>
            <img className={`${variantClasses[variant]} object-cover`} src={src} alt={alt} />
            <span className={`absolute ${onlineIndicatorClasses[size]} w-3.5 h-3.5 ${online ? "bg-green-400" : "bg-red-400"} border-2 border-white rounded-full`} />
        </div>
    );
};

export default Avatar;
