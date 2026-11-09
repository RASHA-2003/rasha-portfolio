import React, { useRef, useEffect } from 'react';
import { ExternalLink, Github, CheckCircle2, Target, Wrench, GitFork, Sparkles, Play, Video } from 'lucide-react';
import { Project } from '../../../types/portfolio';
import { Modal } from '../../ui/Modal';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { ImageGallery } from '../../ui/ImageGallery';

export interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  // Pause video playback when modal is closed to prevent background audio
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!project) return null;

  const handleWatchDemo = () => {
    if (videoSectionRef.current) {
      videoSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback if browser requires direct user gesture on video element
      });
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      maxWidth="4xl"
    >
      <div className="space-y-6">
        {/* Top Badges & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E2DCea]">
          <div className="flex items-center gap-2">
            <Badge variant="blue">{project.category}</Badge>
            {project.featured && <Badge variant="active">Featured Project</Badge>}
          </div>

          <div className="flex items-center gap-2.5">
            {project.videoUrl && (
              <Button
                type="button"
                variant="primary"
                size="sm"
                icon={Play}
                iconPosition="left"
                onClick={handleWatchDemo}
              >
                Watch Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                variant="secondary"
                size="sm"
                icon={Github}
                iconPosition="left"
              >
                Source Code
              </Button>
            )}
            {project.liveDemoUrl && (
              <Button
                href={project.liveDemoUrl}
                target="_blank"
                variant="primary"
                size="sm"
                icon={ExternalLink}
                iconPosition="right"
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>

        {/* Video Demonstration (if available) */}
        {project.videoUrl && (
          <div ref={videoSectionRef} className="space-y-3 pt-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8C79A8] flex items-center gap-2 font-mono">
                <Video className="w-4 h-4" />
                Project Demonstration Video
              </h3>
              <span className="text-xs text-[#8C79A8] font-medium bg-[#EAE5EF] px-2.5 py-0.5 rounded-full border border-[#C9B9D9]/50">
                Video Walkthrough
              </span>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-[#E2DCea] bg-[#1E1A29] shadow-md">
              <video
                ref={videoRef}
                controls
                playsInline
                preload="metadata"
                poster={project.thumbnail}
                className="w-full max-h-[460px] mx-auto block rounded-xl focus:outline-none bg-black"
              >
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support HTML5 video playback.
              </video>
            </div>
            <p className="text-xs sm:text-sm text-[#655E75] text-center italic px-2">
              Demonstration video showcasing interface interaction, analysis flow, and recommendations.
            </p>
          </div>
        )}

        {/* Multi-Screenshot Gallery */}
        {project.images && project.images.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8C79A8] mb-3 flex items-center gap-2 font-mono">
              <Sparkles className="w-4 h-4" />
              Project Visuals
            </h3>
            <ImageGallery images={project.images} projectTitle={project.title} />
          </div>
        )}

        {/* 1. Project Overview */}
        <div className="space-y-2">
          <h3 className="text-base font-bold text-[#282433] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8C79A8]" />
            Overview
          </h3>
          <p className="text-sm sm:text-base text-[#5E586E] leading-relaxed bg-[#F7F5F8] p-4 rounded-xl border border-[#E2DCea]">
            {project.overview}
          </p>
        </div>

        {/* 2. Problem & Objectives */}
        <div className="space-y-2">
          <h3 className="text-base font-bold text-[#282433] flex items-center gap-2">
            <Target className="w-4 h-4 text-[#8C79A8]" />
            Problem & Objectives
          </h3>
          <p className="text-sm sm:text-base text-[#5E586E] leading-relaxed bg-[#F7F5F8] p-4 rounded-xl border border-[#E2DCea]">
            {project.problemAndObjectives}
          </p>
        </div>

        {/* 3. My Role & Key Contributions */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-[#282433] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#8C79A8]" />
            My Role & Key Contributions
          </h3>
          <ul className="space-y-2.5">
            {project.roleAndContributions.map((contribution, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#282433] bg-[#F7F5F8] p-3 rounded-lg border border-[#E2DCea]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#8C79A8] mt-1.5 shrink-0" />
                <span className="leading-relaxed">{contribution}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Technologies Used */}
        <div className="space-y-2.5">
          <h3 className="text-base font-bold text-[#282433] flex items-center gap-2">
            <Wrench className="w-4 h-4 text-[#8C79A8]" />
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="navy" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* 5. Implementation Process */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-[#282433] flex items-center gap-2">
            <GitFork className="w-4 h-4 text-[#8C79A8]" />
            Implementation Process
          </h3>
          <div className="space-y-3">
            {project.implementationProcess.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#FAF8FC] border border-[#E2DCea] space-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#EAE5EF] text-[#8C79A8] text-xs font-bold flex items-center justify-center border border-[#C9B9D9]">
                    {idx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#282433]">
                    {step.phase}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#5E586E] pl-7">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Results & Impact */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-[#282433] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#8C79A8]" />
            Results & Impact
          </h3>
          <ul className="space-y-2">
            {project.resultsAndImpact.map((result, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900 bg-emerald-50/80 p-3 rounded-lg border border-emerald-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};
