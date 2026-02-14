import { Github, ExternalLink, Code2, TreePalm, Tv } from 'lucide-react';

const featuredProject = {
  title: 'Obeeoma',
  description: 'Mental Health Wellness app and website.',
  highlights: [
    'Reduced fraud by 45% using AI-driven anomaly detection',
    'Onboarded African companies to support professionals with mental health resources',
    'Implemented zero-trust security model from ground up',
  ],
  technologies: ['Typescript', 'React Native', 'Django', 'AES-256'],
  github: 'https://github.com/elconrad23/Know-itUg.git',
  demo: 'https://www.obeeoma.com/',
};
const additionalProjects = [
  {
    title: 'Tetragric',
    description:
      'A Secure Agro Fintech platform built to be a cloud-native environmental conservation solution.',
    impact: 'Daily transactions empowering farmers with access to financial services and sustainable farming resources.',
    technologies: ['C#', '.Net Core', 'Azure', 'Redis', 'Angular', 'Opa'],
    // technologies: ['Go', 'gRPC', 'PostgreSQL', 'Kubernetes', 'React', 'Opa'],
    icon: TreePalm,
    color: 'bg-primary',
  },
  {
    title: 'Afromobile',
    description:
      'Mobile TV streaming app with offline viewing for emerging markets.',
    impact:
      'Streamed 20 National TV stations to 100k users worldwide',
    technologies: ['Node.js', 'Express', 'Linux', 'RabbitMQ'],
    icon: Tv,
    color: 'bg-success',
  },
  {
    title: 'Know-itUg',
    description: 'A health based game developed during the IFRAD Hackathon.',
    impact: 'Availed sexual health information to youths across the country in a gamified way',
    technologies: ['Flutter', 'Firebase', 'Dart', 'OAuth 2.0'],
    icon: Code2,
    color: 'bg-warning',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-5 position-relative">
      <div className="container px-4 px-lg-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-white mb-4">Featured Work</h2>
          <div
            className="mx-auto bg-primary"
            style={{ width: '6rem', height: '0.25rem' }}
          ></div>
          <p
            className="lead text-white-50 mt-4 mx-auto"
            style={{ maxWidth: '40rem' }}
          >
            Selected projects demonstrating expertise in security, scalability,
            and user experience.
          </p>
        </div>

        {/* Featured Project */}
        <div className="card border-0 shadow-lg overflow-hidden mb-5">
          <div className="row g-0">
            <div className="col-lg-6 bg-dark text-white p-5 d-flex flex-column justify-content-center">
              <div className="mb-3 text-info fw-bold text-uppercase small">
                Featured Project
              </div>
              <h3 className="display-6 fw-bold mb-3">
                {featuredProject.title}
              </h3>
              <p className="text-white-50 mb-4">
                {featuredProject.description}
              </p>
              <div className="mb-4">
                {featuredProject.highlights.map((h, i) => (
                  <div key={i} className="d-flex mb-2">
                    <span className="text-success me-2">✓</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {featuredProject.technologies.map((t) => (
                  <span key={t} className="badge bg-secondary">
                    {t}
                  </span>
                ))}
              </div>
              <div className="d-flex gap-3">
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  <Github size={20} className="me-2" /> View Code
                </a>
                <a
                  href={featuredProject.demo}
                  className="btn btn-info text-white"
                >
                  <ExternalLink size={20} className="me-2" /> Live Demo
                </a>
              </div>
            </div>
            <div className="col-lg-6 bg-secondary bg-opacity-10 d-flex align-items-center justify-content-center p-5">
              {/* Placeholder for project image */}
              <div className="text-center text-secondary">
                <img
                  src="/tetrasample.png"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '300px',
                    objectFit: 'cover',
                  }}
                  alt="Project Screenshot"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Projects */}
        <div className="row g-4">
          {additionalProjects.map((project, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card card-dark h-100 border-0 shadow-sm transition-all hover-transform p-3">
                <div className="card-body">
                  <div
                    className={`mb-3 p-3 text-white rounded-3 d-inline-block ${project.color.replace('bg-', 'bg-opacity-75 bg-')}`}
                  >
                    <project.icon size={24} className="text-dark" />{' '}
                    {/* Correct icon color */}
                    {/* Actually bootstrap bg-primary text-white usually works. */}
                  </div>
                  <h4 className="h5 fw-bold text-white mb-3">
                    {project.title}
                  </h4>
                  <p className="card-text text-white-50 small mb-3">
                    {project.description}
                  </p>

                  <div className="alert alert-success py-2 px-3 mb-3 small fw-bold">
                    {project.impact}
                  </div>

                  <div className="d-flex flex-wrap gap-1">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="badge bg-secondary bg-opacity-25 text-white border-0 fw-normal"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a
            href="https://github.com/elconrad23"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-lg px-5"
          >
            <Github size={20} className="me-2" /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
