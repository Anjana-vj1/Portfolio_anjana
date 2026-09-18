import { GitHubIcon, ExternalLinkIcon, FolderIcon } from './Icons'

const PROJECTS = [
  {
    title: 'AI-Powered Certificate Verification System',
    description:
      'Developed an AI-powered system to verify certificates by extracting certificate information and identifying verification details. Implemented OCR, QR-code processing, and AI-based analysis to help automate certificate verification and generate verification results.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'OCR', 'AI / ML', 'JavaScript'],
    github: 'https://github.com/Anjana-vj1',
    demo: null,
  },
  {
    title: 'AI Video-to-Text Converter for Impaired Persons',
    description:
      'Developed an AI-based application that converts spoken content from videos into readable text to improve accessibility for hearing-impaired persons. Used speech-to-text technology to extract spoken content and present the generated transcript in a user-friendly format.',
    tech: ['Python', 'AI', 'Speech-to-Text', 'React', 'Node.js'],
    github: 'https://github.com/Anjana-vj1',
    demo: null,
  },
  {
    title: 'Event Management System',
    description:
      'Developed an event management system to organize and manage event-related information efficiently. Implemented features for managing events, participants, schedules, and other event details using programming and database concepts.',
    tech: ['Java', 'MySQL', 'Database Management'],
    github: 'https://github.com/Anjana-vj1',
    demo: null,
  },
  {
    title: 'Stock Management System',
    description:
      'Developed a stock management system to maintain and manage product inventory records efficiently. Implemented functionalities for adding, updating, tracking, and managing stock information using database concepts.',
    tech: ['Java', 'MySQL', 'Database Management'],
    github: 'https://github.com/Anjana-vj1',
    demo: null,
  },
]

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <div className="project-icon">
          <FolderIcon />
        </div>
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`${project.title} — GitHub repository`}
              title="View on GitHub"
            >
              <GitHubIcon size={18} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`${project.title} — Live demo`}
              title="Live Demo"
            >
              <ExternalLinkIcon size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.tech.map(t => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="section-label">Projects</span>
        <h2 className="section-title">What I've Built</h2>
        <p className="section-subtitle">
          Real projects I've worked on — from AI-powered applications to
          database-driven systems.
        </p>

        <div className="projects-grid">
          {PROJECTS.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
