import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { PortfolioData } from '../../types/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { getFadeInUp, getStaggerContainer } from '../../utils/motion';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export interface EducationProps {
  education: PortfolioData['education'];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  const reducedMotion = useReducedMotion();

  return (
    <Section
      id="education"
      badge="Academic Credentials"
      title="Education"
      subtitle="Academic coursework and foundational computer science degree from Taibah University."
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={getStaggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-8"
        >
          {education.map((item) => (
            <motion.div key={item.id} variants={getFadeInUp(reducedMotion)}>
              <Card className="p-6 sm:p-8 space-y-6">
                {/* Degree Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#E2DCea] pb-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-[#EAE5EF] border-2 border-[#C9B9D9] text-[#8C79A8] shrink-0">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#282433]">
                        {item.degree}
                      </h3>
                      <p className="text-base font-semibold text-[#8C79A8] mt-0.5">
                        {item.institution}
                      </p>
                      <p className="text-xs sm:text-sm text-[#655E75] mt-1">
                        {item.field}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-[#655E75]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#8C79A8]" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8C79A8]" />
                      {item.location}
                    </span>
                    {item.gpa && (
                      <span className="mt-1 px-2.5 py-1 rounded bg-[#EAE5EF] border border-[#C9B9D9] text-[#8C79A8] font-semibold">
                        GPA: {item.gpa}
                      </span>
                    )}
                  </div>
                </div>

                {/* Academic Honors */}
                {item.honors && item.honors.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#282433]">
                      <Award className="w-4 h-4 text-[#8C79A8]" />
                      <h4>Academic Honors & Distinctions</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.honors.map((honor, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F7F5F8] border border-[#E2DCea] text-xs sm:text-sm text-[#282433]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8C79A8]" />
                          <span>{honor}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Relevant Coursework */}
                {item.coursework && item.coursework.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#282433]">
                      <BookOpen className="w-4 h-4 text-[#8C79A8]" />
                      <h4>Key Relevant Coursework</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course, idx) => (
                        <Badge key={idx} variant="navy" size="sm">
                          {course}
                        </Badge>
                      ))}
                    </div>
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
