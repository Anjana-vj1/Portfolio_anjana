import { GitHubIcon, LinkedInIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          © 2026 Anjana V J. All rights reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/Anjana-vj1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com/in/anjana4436973a1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
