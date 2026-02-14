import { Mail, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container px-4 px-lg-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-4">Let's Connect</h2>
          <div
            className="mx-auto bg-info"
            style={{ width: '6rem', height: '0.25rem' }}
          ></div>
          <p
            className="lead text-white-50 mt-4 mx-auto"
            style={{ maxWidth: '40rem' }}
          >
            Open to roles at innovative companies. Let's discuss how I can join
            your team and solve your toughest technical challenges.
          </p>
        </div>
        <div className="row g-4 align-items-center mb-5">
          <div className="col-lg-12 text-center">
            <div className="row g-4 justify-content-center">
              <div className="col-4 text-center">
                <div className="card h-100 bg-secondary bg-opacity-25 border-0 text-white text-center p-4 hover-shadow transition-all">
                  <div className="card-body">
                    <div className="mb-3 text-info">
                      <Mail size={32} />
                    </div>
                    <h5 className="card-title fw-bold">Email</h5>
                    <a
                      href="mailto:eleazarconrad@gmail.com"
                      className="text-info text-decoration-none small"
                    >
                      eleazarconrad@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <img
                  className="d-inline-block px-3 py-2 bg-opacity-10 bg-info border border-info rounded-pill img-fluid"
                  src="/pic2.jpg"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '300px',
                    objectFit: 'cover',
                  }}
                  alt="Available for Full-Stack Roles"
                />
              </div>
              <div className="col-4">
                <div className="card h-100 bg-secondary bg-opacity-25 border-0 text-white text-center p-4 hover-shadow transition-all">
                  <div className="card-body">
                    <div className="mb-3 text-primary">
                      <Linkedin size={32} />
                    </div>
                    <h5 className="card-title fw-bold">LinkedIn</h5>
                    <a
                      href="https://linkedin.com/in/conrad-w-79334254"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-info text-decoration-none small"
                    >
                      linkedin.com/in/conrad-waako
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-gradient bg-opacity-10 p-5 rounded-4 text-center border border-secondary border-opacity-25"
        style={{ background: 'linear-gradient(to right, #083344, #0f172a)' }}
      >
        <h3 className="h2 fw-bold mb-4">Ideal Role Fit</h3>
        <div className="d-flex flex-wrap gap-3 justify-content-center mb-4">
          <span className="badge bg-light text-dark bg-opacity-75 p-3 rounded-pill">
            Senior Full-Stack Engineer
          </span>
          <span className="badge bg-light text-dark bg-opacity-75 p-3 rounded-pill">
            Security Engineer
          </span>
          <span className="badge bg-light text-dark bg-opacity-75 p-3 rounded-pill">
            Cloud Solutions Architect
          </span>
        </div>
        <p className="text-white-50 mx-auto" style={{ maxWidth: '40rem' }}>
          Especially interested in roles at security-focused startups,
          innovative companies, or enterprises building forward-looking
          solutions.
        </p>
      </div>

      <div className="text-center mt-5 text-white-50 small">
        &copy; 2026 elconrad23. Built with Nestjs & Bootstrap.
      </div>
    </section>
  );
}
