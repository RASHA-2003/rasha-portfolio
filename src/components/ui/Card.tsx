import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
  id?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  id,
}) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={`rounded-2xl border border-[#E2DCea] bg-white shadow-sm transition-all duration-300 ${
        hoverEffect
          ? 'hover:border-[#8C79A8]/45 hover:shadow-lg hover:shadow-[#8C79A8]/10 hover:-translate-y-1'
          : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
