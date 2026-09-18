/**
 * Data Analytics section with a demo dashboard visualization.
 * All data shown here is sample/demo data for presentation purposes only.
 */

const ANALYTICS_SKILLS = [
  'Data Cleaning',
  'Data Preprocessing',
  'Exploratory Data Analysis',
  'Data Visualization',
  'SQL Queries',
  'Excel Analysis',
  'Python Data Analysis',
]

/* Demo data for the mini dashboard — clearly labeled as sample data */
const DEMO_METRICS = [
  { label: 'Records Processed', value: '12,450', change: 'Demo' },
  { label: 'Data Sources', value: '8', change: 'Demo' },
  { label: 'Visualizations', value: '24', change: 'Demo' },
  { label: 'Accuracy', value: '96.2%', change: 'Demo' },
]

const DEMO_BAR_DATA = [
  { label: 'Jan', value: 65, color: '#6366f1' },
  { label: 'Feb', value: 45, color: '#818cf8' },
  { label: 'Mar', value: 80, color: '#6366f1' },
  { label: 'Apr', value: 55, color: '#818cf8' },
  { label: 'May', value: 90, color: '#6366f1' },
  { label: 'Jun', value: 70, color: '#818cf8' },
]

const DEMO_CATEGORIES = [
  { label: 'Structured Data', value: '42%', color: '#6366f1' },
  { label: 'Semi-Structured', value: '28%', color: '#06b6d4' },
  { label: 'Time Series', value: '18%', color: '#10b981' },
  { label: 'Text Data', value: '12%', color: '#f59e0b' },
]

export default function Analytics() {
  return (
    <section id="analytics" className="section">
      <div className="container">
        <span className="section-label">Data Analytics</span>
        <h2 className="section-title">Data Analytics</h2>
        <p className="section-subtitle">
          Developing strong foundations in data analysis, from raw data to
          actionable insights.
        </p>

        <div className="analytics-content">
          <p className="analytics-intro">
            I am actively building skills in data analytics through coursework,
            hands-on projects, and self-study. My focus areas include cleaning
            and preprocessing data, exploring datasets through visual analysis,
            writing efficient SQL queries, and building Python-based analytical
            workflows.
          </p>

          <div className="analytics-skills-list">
            {ANALYTICS_SKILLS.map(skill => (
              <div className="analytics-skill-chip" key={skill}>
                <span className="chip-dot" />
                {skill}
              </div>
            ))}
          </div>

          {/* Demo Dashboard */}
          <div className="analytics-dashboard">
            <span className="analytics-dashboard-label">Demo Data</span>

            <div className="dashboard-header">
              <h3>Sample Analytics Dashboard</h3>
              <p>
                This is a visual demonstration using sample data only — not
                real professional metrics.
              </p>
            </div>

            <div className="dashboard-grid">
              {DEMO_METRICS.map(metric => (
                <div className="dashboard-metric" key={metric.label}>
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                  <div className="metric-change">{metric.change}</div>
                </div>
              ))}
            </div>

            <div className="dashboard-chart-area">
              {/* Bar chart */}
              <div className="dashboard-chart">
                <h4>Monthly Data Volume (Demo)</h4>
                <div className="bar-chart">
                  {DEMO_BAR_DATA.map(bar => (
                    <div className="bar-item" key={bar.label}>
                      <div
                        className="bar"
                        style={{
                          height: `${bar.value}%`,
                          background: bar.color,
                        }}
                      />
                      <span>{bar.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category breakdown */}
              <div className="dashboard-chart">
                <h4>Data Categories (Demo)</h4>
                <div className="donut-list">
                  {DEMO_CATEGORIES.map(cat => (
                    <div className="donut-item" key={cat.label}>
                      <span
                        className="donut-color"
                        style={{ background: cat.color }}
                      />
                      <span className="donut-item-text">{cat.label}</span>
                      <span className="donut-item-value">{cat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
