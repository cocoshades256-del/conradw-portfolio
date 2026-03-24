import {
  Code2,
  Database,
  Cloud,
  Shield,
  Smartphone,
  Terminal,
  ArrowDownToLine,
  X,
  User
} from 'lucide-react';
import FadeIn from './FadeIn';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Phillip Longole',
    title: 'CTO at ReadyMedia Africa',
    text: 'Conrad took our backend infrastructure from a bottleneck to our biggest asset. His ability to distill complex architectural requirements into highly efficient, secure code is unmatched. He thinks like a founder but executes like a true senior engineer.',
  },
  {
    name: 'Dr. Musinguzi Patrick',
    title: 'VP of Enviroewatch',
    text: 'In environmental conservation, decay is not a nice-to-have. Conrad built our zero-trust architecture from the ground up, ensuring absolute data integrity while keeping the API blazingly fast. He elevated the entire team\'s standards.',
  },
  {
    name: 'Jude Patrick Mugisha',
    title: 'Head of IFRAD, Uganda',
    text: 'A rare "full-stack" developer who actually understands both ends deeply. He consistently shipped production-ready features faster than anyone else on the team, bringing a much-needed focus on CI/CD pipelines and code quality.',
  }
];

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
  const [activeTestimonial, setActiveTestimonial] = useState<number | null>(null);

  return (
    <section id="skills" className="py-5 position-relative section-3">
      <div className="container px-4 px-lg-5">
        <FadeIn direction="up">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-white mb-4">
              Technical Expertise
            </h2>
            <div
              className="mx-auto bg-primary"
              style={{ width: '10rem', height: '0.25rem' }}
            >
              <a
                href={'/Cv.pdf'}
                download="cv.pdf"
                className="btn btn-outline-light"
              >
                <ArrowDownToLine size={20} className="me-2" /> Download CV
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {skillCategories.map((category, idx) => (
            <div className="col" key={category.category}>
              <FadeIn direction="up" delay={idx * 0.1}>
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
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-5 pt-5 border-top border-secondary border-opacity-25">
            <h3 className="h3 fw-bold text-center text-white mb-4">What Tech Leaders Say</h3>
            <div className="row g-4">
              {testimonials.map((t, i) => (
                <div className="col-md-4" key={i}>
                  <div
                    className="card card-dark h-100 border-0 p-4 hover-shadow transition-all cursor-pointer"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setActiveTestimonial(i)}
                  >
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 50, height: 50 }}>
                        <User size={24} className="text-primary" />
                      </div>
                      <div>
                        <h5 className="mb-0 text-white fw-bold h6">{t.name}</h5>
                        <span className="text-white-50 small">{t.title}</span>
                      </div>
                    </div>
                    <p className="text-secondary small mb-0 fst-italic">"{t.text.substring(0, 90)}..."</p>
                    <div className="text-info small fw-bold mt-3">Read Full &rarr;</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Modal */}
        {activeTestimonial !== null && (
          <div className="position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-75 z-3 d-flex align-items-center justify-content-center p-4" style={{ zIndex: 1050 }} onClick={() => setActiveTestimonial(null)}>
            <FadeIn direction="up" className="w-100">
              <div className="card card-dark border-info mx-auto shadow-lg" style={{ maxWidth: 500 }} onClick={e => e.stopPropagation()}>
                <div className="card-body p-5 position-relative">
                  <button className="btn btn-sm text-secondary hover-text-white position-absolute top-0 end-0 m-3 p-1" onClick={() => setActiveTestimonial(null)}>
                    <X size={20} />
                  </button>
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center me-4" style={{ width: 70, height: 70 }}>
                      <User size={32} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-white fw-bold">{testimonials[activeTestimonial].name}</h4>
                      <h6 className="text-info">{testimonials[activeTestimonial].title}</h6>
                    </div>
                  </div>
                  <p className="text-white-50 lead fs-6 fst-italic">"{testimonials[activeTestimonial].text}"</p>
                </div>
              </div>
            </FadeIn>
          </div>
        )}
      </div>
    </section>
  );
}
