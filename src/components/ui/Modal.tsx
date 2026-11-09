import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { modalBackdropVariants, modalContentVariants } from '../../utils/motion';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '5xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = '4xl',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useLockBodyScroll(isOpen);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
        >
          {/* Backdrop overlay */}
          <motion.div
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-[#282433]/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            variants={modalContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`relative w-full ${maxWidthClasses[maxWidth]} my-auto z-10 rounded-2xl border border-[#E2DCea] bg-white shadow-2xl shadow-[#8C79A8]/15 overflow-hidden text-[#282433] max-h-[92vh] flex flex-col`}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E2DCea] bg-[#FAF8FC]">
              {title ? (
                <h2 id="modal-title" className="text-lg sm:text-xl font-bold text-[#282433] tracking-tight">
                  {title}
                </h2>
              ) : (
                <div />
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="p-1.5 rounded-lg text-[#655E75] hover:text-[#282433] hover:bg-[#EAE5EF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C79A8] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
