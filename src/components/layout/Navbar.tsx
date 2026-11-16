import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Code2 } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { Button } from '../ui/Button';

interface NavItem {
  label: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export interface NavbarProps {
  name: string;
  resumeUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ name, resumeUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F5F8]/90 backdrop-blur-md border-b border-[#E2DCea] shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-[#282433] font-bold text-base sm:text-lg tracking-tight group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C79A8] rounded-lg p-1"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#8C79A8] to-[#C9B9D9] flex items-center justify-center text-white shadow-sm shadow-[#8C79A8]/20 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="group-hover:text-[#8C79A8] transition-colors">
              {name || 'Portfolio'}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C79A8] ${
                    isActive
                      ? 'text-[#8C79A8] bg-[#EAE5EF]'
                      : 'text-[#655E75] hover:text-[#282433] hover:bg-[#EAE5EF]/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#8C79A8] to-[#C9B9D9] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Resume CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              href={resumeUrl}
              target="_blank"
              variant="outline"
              size="sm"
              icon={FileDown}
              iconPosition="left"
              download="Rasha Al-Thibyani Resume.pdf"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={resumeUrl}
              target="_blank"
              download="Rasha Al-Thibyani Resume.pdf"
              aria-label="Download Resume"
              className="p-2 text-[#8C79A8] border border-[#C9B9D9] rounded-lg hover:bg-[#EAE5EF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C79A8]"
            >
              <FileDown className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-[#282433] hover:bg-[#EAE5EF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C79A8] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#F7F5F8]/98 backdrop-blur-xl border-b border-[#E2DCea] shadow-xl p-4 transition-all">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-[#8C79A8] bg-[#EAE5EF] border-l-4 border-[#8C79A8]'
                      : 'text-[#655E75] hover:text-[#282433] hover:bg-[#EAE5EF]/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-2">
              <Button
                href={resumeUrl}
                target="_blank"
                variant="primary"
                size="md"
                className="w-full"
                icon={FileDown}
                download="Rasha Al-Thibyani Resume.pdf"
                onClick={handleNavClick}
              >
                Download Resume
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
