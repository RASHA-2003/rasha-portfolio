import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, Cpu } from 'lucide-react';
import { PortfolioData } from '../../types/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { getFadeInUp, getStaggerContainer } from '../../utils/motion';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';

export interface AboutProps {
  about: PortfolioData['about'];
  profile: PortfolioData['profile'];
}

export const About: React.FC<AboutProps> = ({ about, profile }) => {
  const reducedMotion = useReducedMotion();

  return (
    <Section
      id="about"
      badge="Background & Foundations"
      title="About Me"
      subtitle="A Computer Science graduate building user-friendly web experiences, managing data, and exploring practical technology solutions."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bio Narrative & Core Areas */}
        <motion.div
          variants={getStaggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="lg:col-span-7 space-y-6"
        >
          <Card className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3 text-[#8C79A8] font-mono text-xs sm:text-sm font-semibold pb-2 border-b border-[#E2DCea]">
              <Terminal className="w-4 h-4" />
              <span>Background & Interests</span>
            </div>

            <div className="space-y-4 text-[#5E586E] text-sm sm:text-base leading-relaxed">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#655E75] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#8C79A8]" />
              <span>Based in {profile.location}</span>
            </div>
          </Card>

          {/* Core Technical Focus Areas */}
          <Card className="p-6 space-y-4">
            <div className="flex items-center gap-2.5 text-[#282433] font-semibold text-base">
              <Cpu className="w-5 h-5 text-[#8C79A8]" />
              <h3>Areas of Interest & Practical Practice</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {about.coreInterests.map((interest, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#282433] bg-[#F7F5F8] p-2.5 rounded-lg border border-[#E2DCea]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#8C79A8] shrink-0 mt-0.5" />
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Right Column: Quick Stats Cards */}
        <motion.div
          variants={getStaggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="lg:col-span-5 grid grid-cols-2 gap-4"
        >
          {about.quickStats.map((stat, idx) => (
            <motion.div key={idx} variants={getFadeInUp(reducedMotion)}>
              <Card className="p-5 sm:p-6 text-center space-y-2 h-full flex flex-col justify-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#8C79A8] tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm sm:text-base font-semibold text-[#282433]">
                  {stat.label}
                </p>
                {stat.helper && (
                  <p className="text-xs text-[#655E75] font-mono">
                    {stat.helper}
                  </p>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
