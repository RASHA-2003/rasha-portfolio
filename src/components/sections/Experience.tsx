import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { PortfolioData } from '../../types/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { getFadeInUp, getStaggerContainer } from '../../utils/motion';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export interface ExperienceProps {
  experience: PortfolioData['experience'];
}

export const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const reducedMotion = useReducedMotion();

  if (!experience || experience.length === 0) {
    return null;
  }

  return (
    <Section
      id="experience"
      badge="Career & Academic Journey"
      title="Experience"
      subtitle="Practical software engineering roles, internships, and academic contributions."
    >
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical timeline spine */}
        <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-400 via-blue-600 to-transparent opacity-40" />

        <motion.div
          variants={getStaggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-8"
        >
          {experience.map((item) => (
            <motion.div
              key={item.id}
              variants={getFadeInUp(reducedMotion)}
              className="relative flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Timeline Node Icon (Desktop) */}
              <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-[#03142F] border-2 border-sky-400/40 items-center justify-center text-sky-400 shadow-lg shadow-sky-500/10 z-10">
                <Briefcase className="w-6 h-6" />
              </div>

              {/* Experience Card */}
              <Card className="flex-1 p-6 sm:p-7 space-y-4 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#103774]/50 pb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {item.role}
                      </h3>
                      <Badge variant="blue" size="sm">
                        {item.type}
                      </Badge>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-sky-300 mt-0.5">
                      {item.organization}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-2.5 pt-1">
                  {item.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                {item.technologies.length > 0 && (
                  <div className="pt-3 border-t border-[#103774]/30 flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#03142F] border border-[#103774]/60 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

