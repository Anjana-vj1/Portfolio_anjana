import { DownloadIcon, EyeIcon } from './Icons'

export default function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="container">
        <span className="section-label">Resume</span>
        <h2 className="section-title">My Resume</h2>
        <p className="section-subtitle">
          Interested in my background and skills?
        </p>

        <div className="resume-content">
          <div className="resume-icon">📄</div>
          <p className="resume-text">
            Download my resume to learn more about my education, skills,
            projects, and what I can bring to your team.
          </p>

          <div className="resume-actions">
            {/* 
              TODO: Place your resume PDF in the /public folder as "resume.pdf".
              The download and view buttons below will automatically point to it.
            */}
            <a href="/resume.pdf" className="btn btn-primary" download>
              <DownloadIcon size={16} />
              Download Resume
            </a>
            <a
              href="/resume.pdf"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EyeIcon size={16} />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
