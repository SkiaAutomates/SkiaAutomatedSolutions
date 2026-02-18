import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'cta' | 'outline' | 'ghost';
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
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer relative overflow-hidden group clip-corner font-display";

  const variants = {
    primary: "bg-primary text-black hover:bg-primary-hover shadow-[0_0_15px_rgba(173,255,0,0.3)] hover:shadow-[0_0_25px_rgba(173,255,0,0.6)] hover:-translate-y-0.5",
    secondary: "bg-surface text-primary border border-primary/20 hover:bg-surface/80 hover:border-primary/50 shadow-sm hover:shadow-primary/20",
    cta: "bg-cta text-black hover:bg-cta-hover shadow-[0_0_20px_rgba(173,255,0,0.4)] hover:shadow-[0_0_30px_rgba(173,255,0,0.7)] hover:-translate-y-0.5",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(173,255,0,0.3)]",
    ghost: "bg-transparent text-text-dim hover:text-primary hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {/* Tech decoration lines */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};