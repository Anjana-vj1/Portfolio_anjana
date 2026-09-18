const SKILL_CATEGORIES = [
  {
    title: 'Programming',
    icon: '⚡',
    color: '#6366f1',
    skills: ['Python', 'Java'],
  },
  {
    title: 'Data Analytics',
    icon: '📊',
    color: '#06b6d4',
    skills: ['Pandas', 'NumPy', 'Data Analysis Fundamentals', 'SQL'],
  },
  {
    title: 'Data Visualization',
    icon: '📈',
    color: '#10b981',
    skills: ['Microsoft Excel', 'Matplotlib'],
  },
  {
    title: 'Database',
    icon: '🗄️',
    color: '#f59e0b',
    skills: ['SQL', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Cloud',
    icon: '☁️',
    color: '#8b5cf6',
    skills: ['AWS Cloud Fundamentals'],
  },
  {
    title: 'Networking',
    icon: '🌐',
    color: '#0ea5e9',
    skills: [
      'Networking Fundamentals',
      'TCP/IP',
      'IP Addressing',
      'LAN',
      'WAN',
      'Routing & Switching',
    ],
  },
  {
    title: 'Software Testing',
    icon: '🧪',
    color: '#ef4444',
    skills: [
      'Manual Testing',
      'Test Cases',
      'Bug Identification',
      'Software Testing Fundamentals',
    ],
  },
  {
    title: 'Web Technologies',
    icon: '💻',
    color: '#14b8a6',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#64748b',
    skills: ['Node.js', 'Express.js'],
  },
  {
    title: 'Artificial Intelligence',
    icon: '🤖',
    color: '#a855f7',
    skills: ['Artificial Intelligence', 'NLP Fundamentals'],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    color: '#ec4899',
    skills: ['Microsoft Excel', 'PowerPoint', 'UI/UX Design'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 className="section-title">My Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with, grouped by area of expertise.
        </p>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map(category => (
            <div className="skill-category" key={category.title}>
              <div className="skill-category-header">
                <div
                  className="skill-category-icon"
                  style={{ background: `${category.color}14` }}
                >
                  {category.icon}
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-tags">
                {category.skills.map(skill => (
                  <span className="skill-tag" key={`${category.title}-${skill}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
