'use client';

import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/shared/utils/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-[#FF4B26] text-white hover:bg-[#E63D1A] active:bg-[#CC3517]',
      secondary: 'bg-white text-[#FF4B26] hover:bg-gray-100 active:bg-gray-200',
      outline: 'border-2 border-[#FF4B26] text-[#FF4B26] hover:bg-[#FF4B26] hover:text-white active:bg-[#E63D1A]',
    };
    
    const sizes = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-10 px-6',
      lg: 'h-[87px] px-8 text-lg',
    };

    if (href) {
      return (
        <a 
          href={href}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {props.children}
        </a>
      );
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;