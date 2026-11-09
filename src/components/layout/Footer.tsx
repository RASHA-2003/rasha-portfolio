import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { SocialLink } from '../../types/portfolio';

export interface FooterProps {
  name: string;
  roleTitle: string;
  socials: SocialLink[];
}

export const Footer: React.FC<FooterProps> = ({ name, roleTitle, socials }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (iconType: string) => {
    switch (iconType) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'mail':
        return <Mail className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <footer className="border-t border-[#E2DCea] bg-[#EAE5EF]/50 py-12 text-[#655E75]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Title */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-lg font-bold text-[#282433] tracking-tight">{name}</h3>
            <p className="text-xs sm:text-sm text-[#655E75]">{roleTitle}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${social.platform} profile`}
                className="p-2.5 rounded-xl border border-[#E2DCea] bg-white text-[#282433] hover:text-[#8C79A8] hover:border-[#8C79A8]/50 hover:bg-[#FAF8FC] shadow-sm transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C79A8]"
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-[#E2DCea] bg-white text-xs font-medium text-[#282433] hover:text-[#8C79A8] hover:border-[#8C79A8]/50 hover:bg-[#FAF8FC] shadow-sm transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C79A8]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-8 border-t border-[#E2DCea] flex flex-col sm:flex-row items-center justify-between text-xs text-[#655E75] gap-3">
          <p>
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <span aria-hidden="true">•</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-[#8C79A8] fill-[#8C79A8]" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
