import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  download?: boolean | string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon: Icon,
  iconPosition = 'right',
  download,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C79A8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F5F8] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#8C79A8] text-white shadow-sm shadow-[#8C79A8]/20 hover:bg-[#7A6796] hover:shadow-md hover:shadow-[#8C79A8]/30 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-white text-[#282433] border border-[#E2DCea] hover:bg-[#FAF8FC] hover:border-[#8C79A8]/50 hover:text-[#8C79A8] hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'bg-transparent text-[#8C79A8] border border-[#8C79A8]/50 hover:bg-[#EAE5EF]/60 hover:border-[#8C79A8] active:bg-[#EAE5EF]',
    ghost:
      'bg-transparent text-[#655E75] hover:text-[#282433] hover:bg-[#EAE5EF]/50',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        download={download}
        className={combinedStyles}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {content}
    </button>
  );
};
