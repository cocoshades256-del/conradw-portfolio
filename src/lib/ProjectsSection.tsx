import { Github, ExternalLink, Code2, TreePalm, Tv, SatelliteIcon, BuildingIcon, RocketIcon } from 'lucide-react';

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
const featuredProject2 = {
  title: 'RedBox Sports',
  description: 'A NASA Hackathon project to monitor astronaut health and body performance in space.',
  highlights: [
    'Availed a health platform that can be applied across the earth and space to provide real-time performance analytics',
    'Implemented a secure, scalable backend using Go and Gin, ensuring data integrity and low latency',
    'Designed an intuitive Svelte frontend for real-time health monitoring and analytics visualization',
  ],
  technologies: ['Go', 'Gin', 'Svelte', 'SQL', 'OAuth 2.0'],
  github: 'https://github.com/elconrad23/RbS',
  demo: 'https://elconrad23.github.io/RbS/',
};
const additionalProjects = [
  {
    title: 'Tetragric',
    description:
      'A Secure Agro Fintech platform built to be a cloud-native environmental conservation solution',
    impact: 'Daily transactions empowering farmers with access to financial services and sustainable farming resources',
    technologies: ['C#', '.Net Core', 'Azure', 'Redis', 'Angular', 'Opa'],
    // technologies: ['Go', 'gRPC', 'PostgreSQL', 'Kubernetes', 'React', 'Opa'],
    icon: TreePalm,
    color: 'bg-primary',
  },
  {
    title: 'Afromobile',
    description:
      'Mobile TV streaming app with offline viewing for emerging markets',
    impact:
      'Streaming 20 National TV stations to 100k users worldwide and enabling offline access in low-connectivity regions',
    technologies: ['Flutter', 'Node.js', 'Express', 'Linux', 'RabbitMQ'],
    icon: Tv,
    color: 'bg-success',
  },
  {
    title: 'Know-itUg',
    description: 'A health based game developed during the IFRAD Hackathon',
    impact: 'Availed sexual health information to youths across the country in a gamified way',
    technologies: ['Flutter', 'Firebase', 'Dart', 'OAuth 2.0'],
    icon: Code2,
    color: 'bg-warning',
  },
  {
  title: 'Light Robotics',
  description: 'A final year project to replace lost limbs with robotic ones and monitor health performance via a mobile app',
  impact: 'Availed a health platform that can be applied across the earth and space to provide real-time performance analytics',
  technologies: ['C', 'Arduino', 'Flutter', 'OAuth 2.0', 'Firebase', 'AES-256'],
  icon: RocketIcon,
  color: 'bg-warning',
},
{
  title: 'Coco city',
  description:
    'My hobby which doubles as a side hustle',
  impact: 'Fortnightly shipping of classy fashion accessories for eyes and wrists to customers in East Africa',
  technologies: ['HTML', 'Bootstrap', 'SQL', 'Stripe API', 'AWS'],
  icon: BuildingIcon,
  color: 'bg-primary',
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
                Mental Health Project
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
                  href={featuredProject.demo}
                  className="btn btn-info text-white"
                >
                  <ExternalLink size={20} className="me-2" /> Live Demo
                </a>
              </div>
            </div>
            </div>
          </div>
            {/* Featured Project */}
<div className="card border-0 shadow-lg overflow-hidden mb-5">
  <div className="row g-0">
    <div className="col-lg-6 bg-dark text-white p-5 d-flex flex-column justify-content-center">
      <div className="mb-3 text-info fw-bold text-uppercase small">
        Astronaut Health Project
      </div>
      <h3 className="display-6 fw-bold mb-3">
        {featuredProject2.title}
      </h3>
      <p className="text-white-50 mb-4">
        {featuredProject2.description}
      </p>
      <div className="mb-4">
        {featuredProject2.highlights.map((h, i) => (
          <div key={i} className="d-flex mb-2">
            <span className="text-success me-2">✓</span>
            <span>{h}</span>
          </div>
        ))}
      </div>
      <div className="d-flex flex-wrap gap-2 mb-4">
        {featuredProject2.technologies.map((t) => (
          <span key={t} className="badge bg-secondary">
            {t}
          </span>
        ))}
      </div>
      <div className="d-flex gap-3">
        <a
          href={featuredProject2.demo}
          className="btn btn-info text-white"
        >
          <ExternalLink size={20} className="me-2" /> Live Demo
        </a>
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
      </div>
      </div>
      </div>
    </section>
  );
}
