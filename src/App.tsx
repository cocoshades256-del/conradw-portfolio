import { useState } from 'react';
import Sidebar from './lib/Sidebar';
import HeroSection from './lib/HeroSection';
import AboutSection from './lib/AboutSection';
import SkillsSection from './lib/SkillsSection';
import ProjectsSection from './lib/ProjectsSection';
import ContactSection from './lib/ContactSection';
import { Menu, X } from 'lucide-react';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-vh-100 bg-dark text-white d-lg-flex">
      {/* Mobile Menu Button */}
      <button
        className="btn btn-dark d-lg-none position-fixed top-0 start-0 m-3 z-3 border border-secondary"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{ zIndex: 1100 }}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar - Fix position and use d-flex for layout */}
      <div
        className={`sidebar d-flex flex-column p-3 text-white border-end border-secondary ${sidebarOpen ? 'show' : ''}`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-lg-none"
          style={{ zIndex: 999 }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="content-wrapper">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
