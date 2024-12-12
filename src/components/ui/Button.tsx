import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'glass';
  size?: 'default' | 'icon';
  children: React.ReactNode;
}

export function Button({
  variant = 'default',
  size = 'default',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    glass: 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white'
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    icon: 'h-10 w-10'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}