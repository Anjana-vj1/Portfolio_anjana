import { GitHubIcon, LinkedInIcon, DownloadIcon, MailIcon } from './Icons'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Anjana V J</h1>
            <h2 className="hero-title">
              Aspiring <span>Data Analyst</span>
            </h2>
            <p className="hero-tagline">
              Computer Science &amp; Engineering Student
            </p>
            <p className="hero-description">
              Passionate about transforming data into meaningful insights and
              building practical technology solutions. Skilled in Data Analytics,
              Python, SQL, Excel, Cloud Computing, and Software Testing.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View My Projects
              </a>
              <a href="/resume.pdf" className="btn btn-outline" download>
                <DownloadIcon size={16} />
                Download Resume
              </a>
            </div>

            <div className="hero-meta">
              <span className="hero-meta-item">
                📍 Nilgiris, Tamil Nadu
              </span>
              <a href="mailto:anjanavj224@gmail.com" className="hero-meta-item hero-meta-link">
                <MailIcon size={14} />
                anjanavj224@gmail.com
              </a>
            </div>

            <div className="hero-social">
              <a
                href="https://github.com/Anjana-vj1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://linkedin.com/in/anjana4436973a1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="hero-portrait-ring">
              <div className="hero-portrait-wrapper">
                <img
                  src="/profile.jpg"
                  alt="Anjana V J — Aspiring Data Analyst"
                  className="hero-portrait-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
