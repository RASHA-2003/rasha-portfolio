
import { PortfolioData } from '../types/portfolio';

/**
 * ==============================================================================
 * PORTFOLIO CONTENT & CONFIGURATION (SINGLE SOURCE OF TRUTH)
 * ==============================================================================
 * Central data source for Rasha's personal portfolio.
 * Balanced across Web Development, Front-End, Data Analysis, and Database Management.
 */

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Rasha',
    roleTitle: 'Computer Science Graduate',
    headline:
      'Interested in web development, front-end development, database management, and data analysis. Building user-friendly web experiences and practical software solutions.',
    bioSummary:
      'Computer Science graduate from Taibah University with practical project experience in web development, front-end design, database management, and data analysis.',
    location: 'Madinah, Saudi Arabia',
    availableForHire: true,
    availabilityStatus: 'Open to Technology & Software Opportunities',
    resumeUrl: '/Rasha%20Al-Thibyani%20Resume.pdf',
    email: 'rashajj2003@gmail.com',
    githubUrl: 'https://github.com/RASHA-2003',
    linkedinUrl: 'https://www.linkedin.com/in/rasha-althubyani-214759326',
    socials: [
      {
        platform: 'GitHub',
        username: 'RASHA-2003',
        url: 'https://github.com/RASHA-2003',
        icon: 'github',
      },
      {
        platform: 'LinkedIn',
        username: 'rasha-althubyani-214759326',
        url: 'https://www.linkedin.com/in/rasha-althubyani-214759326',
        icon: 'linkedin',
      },
      {
        platform: 'Email',
        username: 'rashajj2003@gmail.com',
        url: 'mailto:rashajj2003@gmail.com',
        icon: 'mail',
      },
    ],
  },

  about: {
    paragraphs: [
      'I am a Computer Science graduate interested in web development, data analysis, and database management. I enjoy building user-friendly web experiences, working with data, and exploring practical technology solutions through projects.',
      'Throughout my academic studies and project work, I have focused on developing clean user interfaces, organizing relational databases with SQL and Supabase, and integrating backend logic using Python and modern web technologies.',
      'I am motivated by solving real-world problems through software, learning new tools, and collaborating on technology initiatives across development and data.',
    ],
    quickStats: [
      { label: 'Degree', value: 'B.S. in CS', helper: 'Graduated June 2026' },
      { label: 'University', value: 'Taibah', helper: 'Taibah University' },
      { label: 'GPA', value: '4.53 / 5.00', helper: 'Second Class Honors' },
      { label: 'Honors', value: 'Second Class', helper: 'Academic Distinction' },
    ],
    coreInterests: [
      'Web Development & Responsive UI',
      'Front-End Engineering (HTML5, CSS3, JavaScript)',
      'Database Management & SQL (Supabase / Relational)',
      'Data Collection & Analysis',
      'Python & Flask Backend Integration',
      'User-Friendly & Accessible Interfaces',
    ],
  },

  skills: [
    {
      id: 'web-dev',
      title: 'Web Development',
      description:
        'Technologies for designing and developing responsive, accessible interfaces',
      skills: [
        { name: 'HTML5', level: 'Intermediate' },
        { name: 'CSS3', level: 'Intermediate' },
        { name: 'JavaScript (ES6+)', level: 'Intermediate' },
        { name: 'Responsive Web Design', level: 'Intermediate' },
        { name: 'Front-End UI Implementation', level: 'Intermediate' },
        { name: 'Web Accessibility', level: 'Intermediate' },
      ],
    },
    {
      id: 'programming',
      title: 'Programming Languages',
      description:
        'Programming languages used in academic coursework and project implementations',
      skills: [
        { name: 'Python', level: 'Intermediate' },
        { name: 'Java', level: 'Intermediate' },
        { name: 'C++', level: 'Intermediate' },
      ],
    },
    {
      id: 'database',
      title: 'Database Management',
      description:
        'Relational database design, SQL querying, and data organization',
      skills: [
        { name: 'SQL', level: 'Intermediate' },
        { name: 'SQL for Data Analysis', level: 'Intermediate' },
        { name: 'PostgreSQL Basics', level: 'Intermediate' },
        { name: 'Supabase', level: 'Intermediate' },
        { name: 'Relational Database Design', level: 'Intermediate' },
        { name: 'Data Organization & Modeling', level: 'Intermediate' },
      ],
    },
    {
      id: 'data-analysis',
      title: 'Data Analysis',
      description:
        'Data collection, cleaning, organization, and exploratory analysis',
      skills: [
        { name: 'Data Collection & Organization', level: 'Intermediate' },
        { name: 'Data Cleaning & Preprocessing', level: 'Intermediate' },
        { name: 'Python for Data Analysis', level: 'Intermediate' },
        { name: 'Data Visualization', level: 'Intermediate' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      description:
        'Development environments, version control, and development frameworks',
      skills: [
        { name: 'Git & GitHub', level: 'Intermediate' },
        { name: 'Flask (Python)', level: 'Intermediate' },
        { name: 'VS Code', level: 'Intermediate' },
        { name: 'HTML5 Canvas API', level: 'Intermediate' },
      ],
    },
    {
      id: 'learning',
      title: 'Currently Learning',
      description:
        'Tools and technologies I am currently developing skills in',
      skills: [
        { name: 'Power BI', level: 'Currently-Learning' },
      ],
    },
  ],

  projects: [
    {
      id: 'project-flory-skincare',
      title: 'Flory – AI-Powered Skincare Analysis Platform',
      tagline:
        'An Arabic AI-powered skincare platform designed to analyze skin conditions and provide personalized recommendations.',
      category: 'AI & Machine Learning',
      featured: true,
      thumbnail: '/images/flory/cover.jpg',
      videoUrl: '/images/flory/demo.mp4',
      images: [
        {
          url: '/images/flory/cover.jpg',
          caption:
            'Flory Platform – AI-powered skincare analysis interface and personalized product recommendations.',
        },
      ],
      overview:
        'Flory is an Arabic AI-powered skincare platform developed as a graduation project at Taibah University. It is designed to analyze facial skin conditions and provide personalized skincare product recommendations based on structured ingredient and dermatological data.',
      problemAndObjectives:
        'Navigating skincare products in Arabic-speaking regions can be challenging due to diverse skin types, language barriers in ingredient analysis, and lack of localized digital dermatological guidance. Flory was created to provide an accessible, AI-guided platform that analyzes user skin conditions and recommends safe, tailored skincare products.',
      roleAndContributions: [
        'Front-End Development (Individual Work): Independently designed and developed the project’s user interfaces and implemented the platform’s visual components to ensure an accessible and engaging user experience.',
        'Database Management (Collaborative): Collaborated with a teammate on database design, organization, and management using SQL and Supabase, structuring product catalogs and skin condition records.',
        'Data Collection (Collaborative): Worked with the same teammate to collect and organize project data, including skincare products and ingredient information.',
        'Back-End Development: Contributed to back-end implementation using Python and Flask to connect frontend forms with database services.',
        'AI Support: Participated in data preparation and model training as a supporting contribution to the facial analysis CNN.',
      ],
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Python',
        'Flask',
        'SQL',
        'Supabase',
        'CNN',
        'AI Assistant',
      ],
      implementationProcess: [
        {
          phase: 'Phase 1: Front-End UI Design & Development (Independent)',
          description:
            'Independently designed and built the complete user interface using HTML, CSS, and JavaScript with Arabic language support.',
        },
        {
          phase: 'Phase 2: Database Design & Data Collection (Collaboration)',
          description:
            'Collaborated with a teammate on designing relational tables in Supabase and SQL, and gathering product and ingredient information.',
        },
        {
          phase: 'Phase 3: Back-End API Contribution',
          description:
            'Contributed to Flask server endpoints handling data transmission between user forms and database records.',
        },
        {
          phase: 'Phase 4: AI Data Preparation Support',
          description:
            'Participated in data preparation and supporting model training workflows for the convolutional neural network (CNN).',
        },
      ],
      resultsAndImpact: [
        'Successfully completed and presented as a graduation project at Taibah University.',
        'Structured an extensive relational database of skincare products categorized by skin condition compatibility.',
        'Delivered an intuitive, responsive Arabic interface for AI-assisted skincare analysis.',
      ],
      githubUrl: undefined,
      liveDemoUrl: undefined,
    },

    {
      id: 'project-physicode-learning',
      title: 'PhysiCode – Interactive Physics Learning Website',
      tagline:
        'An interactive bilingual educational web platform designed to present physics concepts through engaging visual animations and simulations.',
      category: 'Web_Development',
      featured: true,
      thumbnail: '/images/physicode/home.png',
      images: [
        {
          url: '/images/physicode/home.png',
          caption:
            'PhysiCode Homepage – Interactive solar system navigation hub and topic selection.',
        },
        {
          url: '/images/physicode/planet-1.png',
          caption:
            'Mechanics & Space Flight Simulation – Interactive physics topics and trajectory visualization.',
        },
        {
          url: '/images/physicode/planet-2.png',
          caption:
            'Gravity & Waves Simulation – Dynamic educational experiments with interactive parameter controls.',
        },
        {
          url: '/images/physicode/planet-3.png',
          caption:
            'Electromagnetism & Fluids – Educational simulation modules with bilingual descriptions.',
        },
      ],
      overview:
        'PhysiCode is an interactive educational web project designed to present physics topics and educational content in an attractive, visually engaging, and easy-to-understand way. It features a space-themed solar system navigation hub and dedicated simulation modules across mechanics, gravity, waves, electromagnetism, and fluids.',
      problemAndObjectives:
        'Physics education frequently suffers from abstract formulas that students struggle to visualize. PhysiCode addresses this by visually presenting physics concepts, organizing educational content, and creating an engaging, user-friendly interface that makes physics topics easier to explore.',
      roleAndContributions: [
        'Front-End Architecture: Built the complete client-side interface using semantic HTML5, modern CSS3, and Vanilla JavaScript (ES6).',
        'Visual Presentation: Created an engaging space-themed interface featuring an interactive solar system orbit menu with dynamic HTML5 Canvas starfield animations.',
        'Simulation Development: Implemented interactive physics simulation modules across mechanics, gravity, wave dynamics, electromagnetism, fluids, and modern physics.',
        'Bilingual Interface: Integrated Arabic and English language support, allowing users to toggle between languages seamlessly.',
      ],
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript (Vanilla ES6)',
        'HTML5 Canvas API',
        'CSS Keyframe Animations',
      ],
      implementationProcess: [
        {
          phase: 'Phase 1: Solar System Orbit Interface',
          description:
            'Designed a space-themed landing interface using CSS orbits and Canvas particles as the main navigation hub.',
        },
        {
          phase: 'Phase 2: Physics Simulation Scripts',
          description:
            'Authored simulation logic in Vanilla JavaScript modeling projectile motion, wave mechanics, and gravitational fields.',
        },
        {
          phase: 'Phase 3: Topic Pages & Educational Content',
          description:
            'Organized educational content across 6 dedicated topic pages with bilingual Arabic and English terminology.',
        },
        {
          phase: 'Phase 4: Open Source Repository',
          description:
            'Refined responsive layout and published the codebase to GitHub as an open-source educational project.',
        },
      ],
      resultsAndImpact: [
        'Built 6 interactive simulation modules covering core classical and modern physics topics.',
        'Achieved a zero-dependency, ultra-lightweight client-side application running at 60 FPS in any browser.',
        'Implemented full English and Arabic bilingual learning support.',
        'Publicly available on GitHub: https://github.com/RASHA-2003/physicode',
      ],
      githubUrl: 'https://github.com/RASHA-2003/physicode',
      liveDemoUrl: undefined,
    },

    {
      id: 'project-data-analysis-excel',
      title: 'Excel – Data Analysis Project',
      tagline:
        'A practical data analysis project using Microsoft Excel to organize, analyze, and visualize data.',
      category: 'Data Analysis',
      featured: false,
      thumbnail: '/images/data-analysis.png',
      images: [
        {
          url: '/images/data-analysis.png',
          caption:
            'Data Analysis Project – Excel analysis and data visualization.',
        },
      ],
      overview:
        'An Excel-based data analysis project demonstrating practical work with data organization, analysis, and visualization.',
      problemAndObjectives:
        'The project focuses on exploring and presenting data in a clear and structured way using Microsoft Excel.',
      roleAndContributions: [
        'Worked on the data analysis project using Microsoft Excel.',
      ],
      technologies: ['Microsoft Excel'],
      implementationProcess: [],
      resultsAndImpact: [
        'Excel workbook available for review and download.',
      ],
      githubUrl: undefined,
      liveDemoUrl: undefined,
      downloadUrl:
        '/files/Rasha_Althibyani_Data_Analysis_Portfolio.xlsx',
    },
  ],

  experience: [],

  education: [
    {
      id: 'edu-cs-degree',
      degree: 'Bachelor of Science (B.S.) in Computer Science',
      field: 'Computer Science & Software Engineering',
      institution: 'Taibah University',
      location: 'Madinah, Saudi Arabia',
      period: 'Graduated June 2026',
      gpa: '4.53 / 5.00',
      honors: ['Second Class Honors'],
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Java / C++)',
        'Operating Systems & System Programming',
        'Database Management Systems & SQL',
        'Computer Networks & Distributed Systems',
        'Software Engineering Principles',
        'Computer Architecture & Assembly',
        'Web Application Architecture',
        'Artificial Intelligence & Machine Learning',
      ],
    },
  ],

  certifications: [],
};
