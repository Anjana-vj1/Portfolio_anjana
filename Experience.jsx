const INTERNSHIPS = [
  {
    role: 'Data Analytics Intern',
    company: 'Novitech Private Limited',
    points: [
      'Gained practical experience in data analytics and data-driven problem-solving concepts.',
      'Strengthened knowledge of Python, SQL, Excel, and data analysis.',
      'Worked on extracting meaningful insights from datasets.',
    ],
    icon: '📊',
    color: '#6366f1',
  },
  {
    role: 'Full Stack Java Intern',
    company: 'Appin Technology',
    points: [
      'Gained practical exposure to full-stack Java development.',
      'Learned application development concepts.',
      'Strengthened skills in Java, frontend, backend, database management, debugging, and problem-solving.',
    ],
    icon: '☕',
    color: '#06b6d4',
  },
]

const CERTIFICATIONS = [
  { name: 'Digital Marketing', issuer: 'Simplilearn' },
  { name: 'Introduction to AI', issuer: 'Simplilearn' },
  { name: 'Data Analytics', issuer: 'Novitech Private Limited' },
  { name: 'Java', issuer: 'NPTEL' },
]

const ACTIVITIES = [
  'Attended NPTEL examination.',
  'NPTEL learning / examination exposure.',
  'Technical learning through online certification and job-simulation programs.',
  'Developed practical skills in Data Analytics, Python, SQL, Microsoft Excel, Cloud Computing, Network Engineering, and Software Testing.',
  'Contributed to content-writing related work focused on women empowerment and social impact.',
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <span className="section-label">Experience</span>
        <h2 className="section-title">Internships & Certifications</h2>
        <p className="section-subtitle">
          Hands-on experience gained through internships and recognized
          certifications.
        </p>

        {/* Internships */}
        <div className="experience-grid">
          {INTERNSHIPS.map(intern => (
            <div className="experience-card" key={intern.role}>
              <div className="experience-card-accent" style={{ background: intern.color }} />
              <div className="experience-card-content">
                <div className="experience-header">
                  <span className="experience-icon">{intern.icon}</span>
                  <div>
                    <h3 className="experience-role">{intern.role}</h3>
                    <p className="experience-company">{intern.company}</p>
                  </div>
                </div>
                <ul className="experience-points">
                  {intern.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 className="subsection-heading">📜 Certifications</h3>
        <div className="certifications-grid">
          {CERTIFICATIONS.map(cert => (
            <div className="certification-card" key={cert.name}>
              <div className="certification-badge">✓</div>
              <div>
                <div className="certification-name">{cert.name}</div>
                <div className="certification-issuer">{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Activities & Achievements */}
        <h3 className="subsection-heading">🏆 Activities & Achievements</h3>
        <div className="activities-list">
          {ACTIVITIES.map((activity, i) => (
            <div className="activity-item" key={i}>
              <span className="activity-bullet" />
              <span>{activity}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
