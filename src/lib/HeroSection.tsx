import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center justify-content-center text-center position-relative overflow-hidden from-slate-950"
    >
      {/* Background overlay pattern */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCAyLTRzMiAyIDIgNHYxNGgtMlYzNHptMCAwYzAtMiAyLTQgMi00czIgMiAyIDR2MTRoLTJWMzR6bTAgMGMwLTIgMi00IDItNHMyIDIgMiA0djE0aC0yVjM0eiIvPjwvZz48L2c+PC9zdmc+")',
          opacity: 0.2,
          zIndex: 0,
        }}
      />

      <div className="container position-center z-1 px-4">
        <div className="row align-items-center">
          <div className="col-lg-8 text-start">
            <h1 className="display-3 fw-bold text-white mb-4 tracking-tight">
              Conrad Waako
              <br />
              <span className="text-info bg-clip-text text-transparent bg-gradient-to-r from-info to-primary">
                Building Solutions
              </span>
            </h1>

            <p
              className="lead text-secondary mb-5"
              style={{ maxWidth: '40rem' }}
            >
              Software Engineer specializing in full-stack development,
              cloud-native architectures, and cybersecurity-first approaches.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-5">
              <a
                href="#projects"
                className="btn btn-info text-white px-5 py-3 rounded-3 fw-bold shadow-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="btn btn-outline-secondary text-white px-5 py-3 rounded-3 fw-bold"
              >
                Get In Touch
              </a>
            </div>

            <div className="d-flex flex-wrap gap-4 text-secondary small">
              <div className="d-flex align-items-center gap-2">
                <div
                  className="rounded-circle bg-success"
                  style={{ width: '8px', height: '8px' }}
                ></div>
                <span>5+ Years Experience</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div
                  className="rounded-circle bg-info"
                  style={{ width: '8px', height: '8px' }}
                ></div>
                <span>7+ Languages & Frameworks</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div
                  className="rounded-circle bg-primary"
                  style={{ width: '8px', height: '8px' }}
                ></div>
                <span>Security-First Mindset</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 text-center text-lg-end mt-5 mt-lg-0">
            <img
              className="d-inline-block px-3 py-2 bg-opacity-10 bg-info border border-info rounded-pill img-fluid"
              src="/headerimage.jpg"
              style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
              alt="Available for Full-Stack Roles"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="position-absolute bottom-0 start-50 translate-middle-x mb-5 text-secondary hover-text-info z-3"
        aria-label="Scroll Down"
      >
        <ArrowDown size={32} className="animate-bounce" />
      </a>
    </section>
  );
}
