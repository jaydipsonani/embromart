import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'text';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
}

export default function Button({
    variant = 'primary',
    size = 'medium',
    children,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    );
}
