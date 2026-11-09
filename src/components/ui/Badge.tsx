import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'navy' | 'outline' | 'active' | 'success';
  size?: 'sm' | 'md';
  className?: string;
  onClick?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'navy',
  size = 'md',
  className = '',
  onClick,
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-colors';

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs sm:text-sm',
  };

  const variantStyles = {
    navy: 'bg-[#EAE5EF]/70 text-[#282433] border border-[#E2DCea]',
    blue: 'bg-[#EAE5EF] text-[#8C79A8] border border-[#C9B9D9]/70',
    outline: 'bg-transparent text-[#655E75] border border-[#E2DCea] hover:border-[#8C79A8]/40 hover:text-[#282433]',
    active: 'bg-[#8C79A8] text-white font-semibold border border-[#8C79A8] shadow-sm shadow-[#8C79A8]/25',
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  };

  const clickableStyles = onClick ? 'cursor-pointer select-none active:scale-95' : '';

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};
