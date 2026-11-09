import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { PortfolioData } from '../../types/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { getFadeInUp, getStaggerContainer } from '../../utils/motion';
import { Button } from '../ui/Button';

export interface HeroProps {
  profile: PortfolioData['profile'];
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const reducedMotion = useReducedMotion();

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
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      {/* Soft lavender ambient background glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] sm:w-[700px] sm:h-[450px] bg-gradient-to-tr from-[#C9B9D9]/30 via-[#EAE5EF]/40 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={getStaggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Availability Status Pill */}
          <motion.div variants={getFadeInUp(reducedMotion)} className="inline-block">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/90 border border-[#E2DCea] text-[#282433] shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8C79A8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8C79A8]" />
              </span>
              <span>{profile.availabilityStatus}</span>
            </div>
          </motion.div>

          {/* Headline Name & Title */}
          <motion.div variants={getFadeInUp(reducedMotion)} className="space-y-3">
            <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-[#8C79A8] font-mono">
              Hi there, I am
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#282433] leading-none">
              <span className="block">{profile.name}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#655E75] max-w-2xl mx-auto pt-2">
              <span className="text-[#8C79A8] font-semibold">{profile.roleTitle}</span>
            </h2>
          </motion.div>

          {/* Elevator Pitch */}
          <motion.p
            variants={getFadeInUp(reducedMotion)}
            className="text-base sm:text-lg md:text-xl text-[#655E75] max-w-2xl mx-auto leading-relaxed"
          >
            {profile.headline}
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            variants={getFadeInUp(reducedMotion)}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2"
          >
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
            >
              View Projects
            </Button>

            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              icon={Sparkles}
              iconPosition="left"
            >
              Get in Touch
            </Button>
            <Button
              href="/Rasha%20Al-Thibyani%20Resume.pdf"
              variant="outline"
              size="lg"
              icon={FileDown}
              iconPosition="left"
              download="Rasha Al-Thibyani Resume.pdf"
            >
              Download CV
            </Button>
          </motion.div>

          {/* Social Icons Bar */}
          <motion.div
            variants={getFadeInUp(reducedMotion)}
            className="flex items-center justify-center gap-3 pt-4"
          >
            {profile.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${social.platform} profile`}
                className="p-3 rounded-xl border border-[#E2DCea] bg-white text-[#282433] hover:text-[#8C79A8] hover:border-[#8C79A8]/50 hover:bg-[#FAF8FC] shadow-sm transition-all hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C79A8]"
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
