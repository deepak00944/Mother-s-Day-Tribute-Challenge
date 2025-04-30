"use client"

import { Mail, Phone, MapPin, Send } from "lucide-react"
import "./ContactPage.css"

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="page-title">Contact Us</h1>

        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              Have a question, suggestion, or want to share your story? We'd love to hear from you! Fill out the form or
              reach out to us directly using the contact information below.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <Mail size={24} />
                <div>
                  <h3>Email</h3>
                  <p>info@mothersdaytribute.com</p>
                </div>
              </div>

              <div className="contact-method">
                <Phone size={24} />
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="contact-method">
                <MapPin size={24} />
                <div>
                  <h3>Address</h3>
                  <p>123 Blog Street, Content City, ST 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>

              <button type="submit" className="btn">
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
