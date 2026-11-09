import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, ProjectCategory } from '../../../types/portfolio';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { Section } from '../../layout/Section';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';

export interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => set.add(p.category));
    return ['All', ...Array.from(set)] as ProjectCategory[];
  }, [projects]);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Section
      id="projects"
      badge="Project Highlights"
      title="Featured Projects"
      subtitle="Detailed case studies demonstrating practical web development, database management, and UI implementation."
    >
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
        {categories.map((cat) => {
          const count =
            cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C79A8] ${
                isActive
                  ? 'bg-[#8C79A8] text-white font-semibold shadow-sm shadow-[#8C79A8]/20'
                  : 'bg-white text-[#655E75] hover:text-[#282433] hover:bg-[#FAF8FC] border border-[#E2DCea]'
              }`}
            >
              <span>{cat}</span>
              <span
                className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[11px] font-mono ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#EAE5EF] text-[#8C79A8]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid with Animated Layout Reflow */}
      <motion.div
        layout={!reducedMotion}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout={!reducedMotion}
              key={project.id}
              initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.96 }}
              transition={{ duration: reducedMotion ? 0.1 : 0.3 }}
              className="flex"
            >
              <ProjectCard project={project} onOpenDetails={handleOpenDetails} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Deep-Dive Project Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Section>
  );
};
