export type ProjectCategory = 
  | 'All'
  | 'Full-Stack' 
  | 'AI & Machine Learning' 
  | 'Cloud & Systems' 
  | 'Mobile & Cross-Platform';

export interface ProjectImage {
  url: string;
  caption: string;
  altText?: string;
}

export interface ImplementationPhase {
  phase: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: Exclude<ProjectCategory, 'All'>;
  featured: boolean;
  thumbnail: string;
  videoUrl?: string;
  images: ProjectImage[];
  
  // Case Study Sections
  overview: string;
  problemAndObjectives: string;
  roleAndContributions: string[];
  technologies: string[];
  implementationProcess: ImplementationPhase[];
  resultsAndImpact: string[];
  
  // External Links
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface SkillItem {
  name: string;
  level?: 'Proficient' | 'Advanced' | 'Intermediate' | 'Familiar';
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description?: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  honors?: string[];
  coursework: string[];
}

export interface CertificateItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship' | 'Full-time' | 'Research' | 'Teaching' | 'Freelance' | 'Academic Project';
  responsibilities: string[];
  technologies: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: 'github' | 'linkedin' | 'mail' | 'twitter' | 'external';
}

export interface PortfolioData {
  profile: {
    name: string;
    roleTitle: string;
    headline: string;
    bioSummary: string;
    location: string;
    availableForHire: boolean;
    availabilityStatus: string;
    resumeUrl: string;
    email: string;
    githubUrl?: string;
    linkedinUrl?: string;
    socials: SocialLink[];
  };
  about: {
    paragraphs: string[];
    quickStats: { label: string; value: string; helper?: string }[];
    coreInterests: string[];
  };
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificateItem[];
}
