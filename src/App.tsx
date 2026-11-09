import React from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  const { profile, about, skills, projects, education } = portfolioData;

  return (
    <div className="relative min-h-screen bg-[#F7F5F8] text-[#282433] selection:bg-[#C9B9D9]/50 selection:text-[#282433]">
      {/* Soft lavender ambient background lighting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Top-right soft lavender glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-[#C9B9D9]/25 blur-[130px]" />
        {/* Mid-left subtle lilac glow */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-[#8C79A8]/12 blur-[150px]" />
        {/* Bottom-right warm glow */}
        <div className="absolute bottom-10 -right-20 w-80 h-80 sm:w-[450px] sm:h-[450px] rounded-full bg-[#EAE5EF]/40 blur-[130px]" />
      </div>

      {/* Top Navigation */}
      <Navbar name={profile.name} resumeUrl={profile.resumeUrl} />

      {/* Semantic Main Content */}
      <main id="main-content">
        <Hero profile={profile} />
        <About about={about} profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Education education={education} />
        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer
        name={profile.name}
        roleTitle={profile.roleTitle}
        socials={profile.socials}
      />
    </div>
  );
};

export default App;
