import React from 'react';
import { ExternalLink, Github, ArrowRight, Layers, Play } from 'lucide-react';
import { Project } from '../../../types/portfolio';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';

export interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden group w-full">
      {/* Thumbnail with uncropped aspect preservation & soft ambient background */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#FAF8FC] flex items-center justify-center">
        {/* Ambient subtle blur to smoothly fill card frame */}
        <img
          src={project.thumbnail}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-xl opacity-20 pointer-events-none scale-110"
        />

        {/* Sharp screenshot preserving exact proportions without cutting off interface elements */}
        <img
          src={project.thumbnail}
          alt={project.title}
          className="relative z-10 max-h-full max-w-full object-contain p-2 group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-20">
          <Badge variant="blue" size="sm">
            {project.category}
          </Badge>
          {project.featured && (
            <Badge variant="active" size="sm">
              Featured
            </Badge>
          )}
        </div>

        {/* Bottom Badges */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
          {project.videoUrl ? (
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-[#8C79A8] text-white shadow-sm pointer-events-auto">
              <Play className="w-3 h-3 fill-current" />
              <span>Demo Video</span>
            </div>
          ) : (
            <div />
          )}

          {project.images && project.images.length > 1 && (
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-white/95 backdrop-blur-md border border-[#E2DCea] text-[#282433] shadow-sm pointer-events-auto">
              <Layers className="w-3 h-3 text-[#8C79A8]" />
              <span>{project.images.length} screens</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <h3
            onClick={() => onOpenDetails(project)}
            className="text-lg sm:text-xl font-bold text-[#282433] group-hover:text-[#8C79A8] transition-colors cursor-pointer line-clamp-1"
          >
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#655E75] line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#F7F5F8] border border-[#E2DCea] text-[#282433]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#EAE5EF] border border-[#C9B9D9]/60 text-[#8C79A8]">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Actions Bar */}
        <div className="pt-3 border-t border-[#E2DCea] flex items-center justify-between gap-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => onOpenDetails(project)}
            icon={ArrowRight}
            iconPosition="right"
            className="text-xs font-semibold text-[#8C79A8] hover:text-[#7A6796] p-0 hover:bg-transparent"
          >
            Case Study
          </Button>

          <div className="flex items-center gap-1.5">
            {project.videoUrl && (
              <button
                type="button"
                onClick={() => onOpenDetails(project)}
                title="Watch Demo Video"
                aria-label={`Watch demo video for ${project.title}`}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-[#8C79A8] bg-[#EAE5EF] hover:bg-[#8C79A8] hover:text-white transition-colors cursor-pointer"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Demo</span>
              </button>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Source code for ${project.title}`}
                className="p-1.5 rounded-lg text-[#655E75] hover:text-[#8C79A8] hover:bg-[#EAE5EF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C79A8]"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="p-1.5 rounded-lg text-[#655E75] hover:text-[#8C79A8] hover:bg-[#EAE5EF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C79A8]"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
