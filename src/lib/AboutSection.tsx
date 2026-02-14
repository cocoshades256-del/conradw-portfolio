import { Shield, Zap, Users, Award } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    title: 'Full-Stack Versatility',
    description: 'End-to-end ownership from database design to responsive UIs',
  },
  {
    icon: Zap,
    title: 'Performance Focused',
    description:
      'Optimized data flows, sub-100ms API responses, and efficient cloud architectures',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description:
      'OWASP best practices, penetration testing, and secure authentication systems',
  },
  {
    icon: Award,
    title: 'Production Ready',
    description:
      'CI/CD pipelines, monitoring, and enterprise-grade deployments',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container px-4 px-lg-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-3">About Conrad</h2>
          <div
            className="mx-auto bg-info"
            style={{ width: '6rem', height: '0.25rem' }}
          ></div>
          <p
            className="lead text-secondary mt-4 mx-auto"
            style={{ maxWidth: '40rem' }}
          >
            I'm a full-stack software engineer with a passion for building
            secure, scalable applications that solve real-world problems. With
            expertise spanning multiple languages and frameworks, I bring a
            security-first approach to every project.
          </p>
        </div>

        <div className="row g-4 mb-5">
          {highlights.map((item) => (
            <div className="col-md-6" key={item.title}>
              <div className="card h-100 border-0 shadow-sm p-4 hover-shadow transition-all">
                <div className="card-body">
                  <div
                    className="d-flex align-items-center justify-content-center bg-info bg-opacity-10 rounded-3 mb-3"
                    style={{ width: '3rem', height: '3rem' }}
                  >
                    <item.icon className="text-info" size={24} />
                  </div>
                  <h3 className="h5 fw-bold text-dark mb-2">{item.title}</h3>
                  <p className="card-text text-secondary">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-dark text-white rounded-4 p-4 p-md-5">
          <h3 className="h2 fw-bold mb-4 text-center text-md-start">
            Real-World Impact
          </h3>
          <div className="row g-4">
            <div className="col-md-6">
              <h4 className="h5 text-info fw-bold mb-3">Problems I Solve</h4>
              <ul className="list-unstyled text-secondary">
                <li className="mb-2 d-flex align-items-start">
                  <span className="text-info me-2">•</span>
                  <span>
                    Building secure authentication systems with JWT/OAuth
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="text-info me-2">•</span>
                  <span>
                    Optimizing API performance to sub-100ms response times
                  </span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="text-info me-2">•</span>
                  <span>Zero-downtime database migrations</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="text-info me-2">•</span>
                  <span>
                    Designing cloud-native architectures that reduce costs
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="h5 text-info fw-bold mb-3">Why It Matters</h4>
              <ul className="list-unstyled text-secondary">
                <li className="mb-2 d-flex align-items-start">
                  <span className="text-info me-2">•</span>
                  <span>70% of senior roles require security expertise</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="text-info me-2">•</span>
                  <span>Data breaches are costly and damaging</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="text-info me-2">•</span>
                  <span>Cloud-native skills are in high demand</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <span className="text-info me-2">•</span>
                  <span>End-to-end ownership improves velocity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
