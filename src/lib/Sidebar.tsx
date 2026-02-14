import React, { useEffect, useState } from 'react';
import {
  Home,
  User,
  Briefcase,
  Code2,
  Mail,
  Github,
  Linkedin,
} from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

interface Section {
  id: string;
  title: string;
  icon: string;
}

const iconMap: { [key: string]: React.ElementType } = {
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
};

export default function Sidebar({ onClose }: SidebarProps) {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    fetch('/api/sections')
      .then((res) => res.json())
      .then((data) => {
        // Map backend response format to frontend format if needed
        // Backend returns: { id, title, icon }
        // Frontend expects: { name, href, icon }
        // We'll adapt the rendering instead
        setSections(data);
      })
      .catch((err) => console.error('Failed to fetch sections:', err));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }, // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="d-flex flex-column h-100 text-white">
      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <div className="fs-4 fw-bold">Practical thinker</div>
      </div>
      <p className="text-secondary small">Ideal Engineer</p>

      <hr className="text-secondary" />

      <ul className="nav nav-pills flex-column mb-auto">
        {sections.map((section) => {
          const Icon = iconMap[section.icon] || Home;
          return (
            <li className="nav-item" key={section.id}>
              <a
                href={`#${section.id}`}
                className={`nav-link d-flex align-items-center gap-2 ${activeSection === section.id ? 'active bg-info text-white' : 'text-white'}`}
                aria-current={activeSection === section.id ? 'page' : undefined}
                onClick={onClose}
              >
                <Icon size={18} />
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>

      <hr className="text-secondary" />

      <div className="d-flex gap-3">
        <a
          href="https://github.com/elconrad23"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover-text-info transition-all"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/elconrad23"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover-text-info transition-all"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </aside>
  );
}
