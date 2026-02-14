import {
  Code2,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Terminal,
} from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    category: 'Languages',
    skills: ['JavaScript/TypeScript', 'Java', 'Go', 'C#', 'Python', 'Dart'],
    color: 'text-primary',
  },
  {
    icon: Terminal,
    category: 'Frontend',
    skills: [
      'React/Next.js',
      'Vue.js',
      'Bootstrap',
      'Redux/Zustand',
      'WebSockets',
      'PWA',
    ],
    color: 'text-info',
  },
  {
    icon: Database,
    category: 'Backend & Database',
    skills: [
      'Node.js',
      'Go (Gin/Echo)',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'RESTful APIs',
    ],
    color: 'text-success',
  },
  {
    icon: Smartphone,
    category: 'Mobile & Cross-Platform',
    skills: ['Flutter', 'React Native', 'iOS/Android', 'Responsive Design'],
    color: 'text-warning',
  },
  {
    icon: Shield,
    category: 'Security & DevOps',
    skills: [
      'JWT/OAuth',
      'Encryption (AES)',
      'OWASP',
      'Pentesting',
      'RBAC',
      'Rate Limiting',
    ],
    color: 'text-danger',
  },
  {
    icon: Cloud,
    category: 'Cloud & Tools',
    skills: ['Docker', 'Jenkins', 'AWS/GCP', 'CI/CD', 'Git', 'Microservices'],
    color: 'text-purple', // Boostrap doesn't have text-purple, assume a utility or use text-dark
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-5 position-relative">
      <div className="container px-4 px-lg-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-white mb-4">
            Technical Expertise
          </h2>
          <div
            className="mx-auto bg-primary"
            style={{ width: '6rem', height: '0.25rem' }}
          ></div>
          <p
            className="lead text-white-50 mt-4 mx-auto"
            style={{ maxWidth: '40rem' }}
          >
            A comprehensive skill set built over 5+ years of hands-on
            development across diverse projects.
          </p>
        </div>

        <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {skillCategories.map((category) => (
            <div className="col" key={category.category}>
              <div className="card card-dark h-100 border-0 shadow-sm transition-all hover-transform p-3">
                <div className="card-body">
                  <div className={`mb-3 ${category.color}`}>
                    <category.icon size={32} />
                  </div>
                  <h3 className="h5 fw-bold text-white mb-3">
                    {category.category}
                  </h3>
                  <div className="d-flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="badge bg-secondary bg-opacity-25 text-white border-0 fw-normal p-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
