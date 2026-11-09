import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { getFadeInUp } from '../../utils/motion';

export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  badge,
  children,
  className = '',
}) => {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id={id}
      className={`py-16 sm:py-24 md:py-28 relative scroll-mt-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={getFadeInUp(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          {badge && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#EAE5EF] text-[#8C79A8] border border-[#C9B9D9]/60">
              {badge}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#282433]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg text-[#655E75] font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="w-16 h-1 bg-gradient-to-r from-[#8C79A8] to-[#C9B9D9] mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
};
