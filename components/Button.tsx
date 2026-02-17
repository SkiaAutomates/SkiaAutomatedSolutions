import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-skia focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-skia-primary disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-skia-primary text-white hover:bg-opacity-90 shadow-lg shadow-skia-primary/20",
    secondary: "bg-white text-skia-bg hover:bg-gray-200",
    outline: "border-2 border-skia-primary text-skia-text hover:bg-skia-primary hover:text-white",
    ghost: "text-skia-text hover:bg-skia-link/30",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};