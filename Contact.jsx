import { useState } from 'react'
import { MailIcon, GitHubIcon, LinkedInIcon, SendIcon } from './Icons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: This form does NOT actually send emails.
    // To enable email sending, integrate a service like:
    //   - Formspree (https://formspree.io)
    //   - EmailJS (https://emailjs.com)
    //   - Netlify Forms
    //   - Your own backend API
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          I am open to internships, entry-level technology opportunities, and
          project-based learning.
        </p>

        <div className="contact-grid">
          {/* Left — contact info */}
          <div className="contact-info">
            <p className="contact-info-text">
              I am interested in building a career in the technology field,
              particularly in Data Analytics, Cloud Computing, Network
              Engineering, and Software Testing. I am willing to learn new
              technologies and contribute to challenging projects.
            </p>

            <div className="contact-items">
              <a href="mailto:anjanavj224@gmail.com" className="contact-item">
                <div className="contact-item-icon">
                  <MailIcon size={20} />
                </div>
                <div className="contact-item-content">
                  <div className="contact-label">Email</div>
                  <div className="contact-value">anjanavj224@gmail.com</div>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div className="contact-item-content">
                  <div className="contact-label">Phone</div>
                  <div className="contact-value">8072013196</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div className="contact-item-content">
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Nilgiris, Tamil Nadu</div>
                </div>
              </div>

              <a
                href="https://linkedin.com/in/anjana4436973a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                style={{ textDecoration: 'none' }}
              >
                <div className="contact-item-icon">
                  <LinkedInIcon size={20} />
                </div>
                <div className="contact-item-content">
                  <div className="contact-label">LinkedIn</div>
                  <div className="contact-value">linkedin.com/in/anjana4436973a1</div>
                </div>
              </a>

              <a
                href="https://github.com/Anjana-vj1"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                style={{ textDecoration: 'none' }}
              >
                <div className="contact-item-icon">
                  <GitHubIcon size={20} />
                </div>
                <div className="contact-item-content">
                  <div className="contact-label">GitHub</div>
                  <div className="contact-value">github.com/Anjana-vj1</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right — contact form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>

            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              <SendIcon size={16} />
              {submitted ? 'Message Noted!' : 'Send Message'}
            </button>

            <p className="form-note">
              Note: This form is a UI demo. To receive messages, connect it to a
              service like Formspree, EmailJS, or your own backend.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
