import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Database, BarChart3, Wrench } from 'lucide-react';
import { PortfolioData } from '../../types/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { getFadeInUp, getStaggerContainer } from '../../utils/motion';
import { Section } from '../layout/Section';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

export interface SkillsProps {
  skills: PortfolioData['skills'];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const reducedMotion = useReducedMotion();

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'web-dev':
        return <Globe className="w-5 h-5 text-[#8C79A8]" />;
      case 'programming':
        return <Code className="w-5 h-5 text-[#8C79A8]" />;
      case 'database':
        return <Database className="w-5 h-5 text-[#8C79A8]" />;
      case 'data-analysis':
        return <BarChart3 className="w-5 h-5 text-[#8C79A8]" />;
      case 'tools':
        return <Wrench className="w-5 h-5 text-[#8C79A8]" />;
      default:
        return <Code className="w-5 h-5 text-[#8C79A8]" />;
    }
  };

  return (
    <Section
      id="skills"
      badge="Technical Foundations"
      title="Skills & Technologies"
      subtitle="Balanced practical capabilities across web development, programming, database management, and data analysis."
    >
      <motion.div
        variants={getStaggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((category) => (
          <motion.div key={category.id} variants={getFadeInUp(reducedMotion)} className="flex">
            <Card className="p-6 w-full flex flex-col justify-between">
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 mb-4 border-b border-[#E2DCea]">
                  <div className="p-2 rounded-lg bg-[#EAE5EF] border border-[#C9B9D9]/60">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#282433]">
                      {category.title}
                    </h3>
                    {category.description && (
                      <p className="text-xs text-[#655E75] mt-0.5">
                        {category.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F7F5F8] border border-[#E2DCea] hover:border-[#8C79A8]/50 hover:bg-[#FAF8FC] transition-all"
                    >
                      <span className="text-xs sm:text-sm font-medium text-[#282433] group-hover:text-[#8C79A8]">
                        {skill.name}
                      </span>
                      {skill.level && (
                        <Badge
                          variant={skill.level === 'Intermediate' ? 'blue' : 'navy'}
                          size="sm"
                          className="text-[10px] py-0 px-1.5"
                        >
                          {skill.level}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
