const AREAS_OF_INTEREST = [
  'Data Analytics',
  'Cloud Computing',
  'Network Engineering',
  'Software Testing',
  'Data Visualization',
  'SQL & Database Management',
  'Python Development',
  'Artificial Intelligence',
]

const HIGHLIGHTS = [
  { icon: '🎓', label: 'B.E CSE Student', detail: 'CGPA: 8.55' },
  { icon: '📊', label: 'Data Enthusiast', detail: 'Analytics & Insights' },
  { icon: '☁️', label: 'Cloud & Networking', detail: 'AWS · TCP/IP · LAN/WAN' },
  { icon: '🧪', label: 'Software Testing', detail: 'Manual Testing & QA' },
]

const STRENGTHS = [
  'Problem Solving',
  'Communication',
  'Teamwork',
  'Adaptability',
  'Time Management',
  'Willingness to Learn',
]

const EDUCATION = [
  {
    degree: 'B.E Computer Science and Engineering',
    institution: 'Sri Shakthi Institute of Engineering and Technology',
    year: '2024 – 2028',
    score: 'CGPA: 8.55',
    icon: '🎓',
  },
  {
    degree: 'Higher Secondary Certificate',
    institution: 'ST THOMAS',
    year: '2023 · Metric Board',
    score: '86%',
    icon: '📘',
  },
  {
    degree: 'Secondary School Leaving Certificate',
    institution: 'GOVT GIRLS',
    year: '2021 · State Board',
    score: '100%',
    icon: '📗',
  },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <span className="section-label">About Me</span>
        <h2 className="section-title">Get to Know Me</h2>
        <p className="section-subtitle">
          A motivated Computer Science student eager to build a career in
          technology.
        </p>

        <div className="about-grid">
          {/* Left — text content */}
          <div className="about-text">
            <p>
              Motivated and detail-oriented Computer Science and Engineering
              student with an interest in Data Analytics, Cloud Computing,
              Network Engineering, and Software Testing.
            </p>
            <p>
              I possess knowledge of Python, SQL, Microsoft Excel, databases,
              cloud fundamentals, networking concepts, and software testing
              fundamentals. I am interested in analyzing data, understanding
              technical systems, identifying problems, and developing practical
              solutions.
            </p>
            <p>
              Eager to learn new technologies and build a career in the IT
              industry through hands-on projects and continuous learning.
            </p>

            {/* Key Strengths */}
            <h3 className="about-subsection-title">Key Strengths</h3>
            <div className="about-interests">
              {STRENGTHS.map(s => (
                <div className="about-interest-item" key={s}>
                  <span className="icon" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Right — highlight cards + areas of interest */}
          <div className="about-right">
            <div className="about-stats">
              {HIGHLIGHTS.map(item => (
                <div className="about-stat-card" key={item.label}>
                  <div className="stat-icon">{item.icon}</div>
                  <div className="stat-label">{item.label}</div>
                  <div className="stat-detail">{item.detail}</div>
                </div>
              ))}
            </div>

            <h3 className="about-subsection-title" style={{ marginTop: 28 }}>
              Areas of Interest
            </h3>
            <div className="about-interests">
              {AREAS_OF_INTEREST.map(interest => (
                <div className="about-interest-item" key={interest}>
                  <span className="icon" />
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="education-section">
          <h3 className="about-subsection-title education-heading">
            🎓 Education
          </h3>
          <div className="education-grid">
            {EDUCATION.map(edu => (
              <div className="education-card" key={edu.degree}>
                <div className="education-icon">{edu.icon}</div>
                <div className="education-info">
                  <h4 className="education-degree">{edu.degree}</h4>
                  <p className="education-institution">{edu.institution}</p>
                  <div className="education-meta">
                    <span className="education-year">{edu.year}</span>
                    <span className="education-score">{edu.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="languages-row">
          <span className="languages-label">Languages:</span>
          {['Malayalam', 'English', 'Tamil'].map(lang => (
            <span className="language-badge" key={lang}>{lang}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
