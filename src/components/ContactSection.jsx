import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrap">
          <span className="section-badge gold">
            <MessageSquare size={14} />
            GET IN TOUCH
          </span>
          <h2 className="section-heading">Contact & Campus Location</h2>
          <p className="section-subheading">
            Need assistance or have questions regarding admissions, curriculum, or hostel facilities? We welcome parents and students to visit our campus or connect with us directly.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-main-grid">
          {/* Left Column: Campus Info Cards */}
          <div className="contact-info-col">
            <div className="contact-card glass-card">
              <div className="contact-card-icon" style={{ backgroundColor: '#ebf3ff', color: '#0284c7' }}>
                <MapPin size={24} />
              </div>
              <div className="contact-card-content">
                <h4>Campus Address</h4>
                <p>
                  <strong>Masters PU College Hassan</strong><br />
                  Vivekanagara, Hassan,<br />
                  Karnataka, India – 573201
                </p>
                <a 
                  href="https://maps.google.com/?q=Vivekanagara,+Hassan,+Karnataka+573201" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-action-link"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-card-icon" style={{ backgroundColor: '#dcfce7', color: '#059669' }}>
                <Phone size={24} />
              </div>
              <div className="contact-card-content">
                <h4>Telephone & Mobile</h4>
                <p>
                  Landline: <a href="tel:08172297164">08172297164</a><br />
                  Admissions Helpline: <a href="tel:8277785534">+91 8277785534</a>
                </p>
                <div className="contact-quick-btns">
                  <a href="tel:08172297164" className="quick-btn phone-btn">
                    Call Office
                  </a>
                  <a href="https://wa.me/918277785534" target="_blank" rel="noopener noreferrer" className="quick-btn whatsapp-btn">
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-card-icon" style={{ backgroundColor: '#fef3c7', color: '#d97706' }}>
                <Mail size={24} />
              </div>
              <div className="contact-card-content">
                <h4>Official Emails</h4>
                <p>
                  Primary: <a href="mailto:manjunathbs083@gmail.com">manjunathbs083@gmail.com</a><br />
                  Admissions: <a href="mailto:masterpucollege2012@gmail.com">masterpucollege2012@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-card-icon" style={{ backgroundColor: '#f3e8ff', color: '#7c3aed' }}>
                <Clock size={24} />
              </div>
              <div className="contact-card-content">
                <h4>Office Timings</h4>
                <p>
                  Monday – Saturday: <strong>10:00 AM – 5:00 PM</strong><br />
                  Sunday: Closed (Available via Phone Inquiry)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form & Map */}
          <div className="contact-form-col">
            <div className="contact-form-box glass-card">
              <h3 className="form-box-title">Need Assistance? Send Us a Message</h3>
              <p className="form-box-subtitle">
                Please complete the contact form below and our administrative team will reach out to you promptly.
              </p>

              {submitted ? (
                <div className="contact-form-success">
                  <CheckCircle2 size={48} className="text-emerald" />
                  <h4>Message Received!</h4>
                  <p>
                    Thank you for reaching out to Masters PU College Hassan. Our admissions team will respond to your inquiry shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="contactName">Your Full Name <span className="req">*</span></label>
                    <input
                      id="contactName"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-control"
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label htmlFor="contactPhone">Phone Number <span className="req">*</span></label>
                      <input
                        id="contactPhone"
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contactEmail">Email Address <span className="req">*</span></label>
                      <input
                        id="contactEmail"
                        type="email"
                        required
                        placeholder="e.g. ramesh@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contactMessage">Your Message / Inquiry <span className="req">*</span></label>
                    <textarea
                      id="contactMessage"
                      required
                      rows="4"
                      placeholder="Ask about admissions, fee structure, hostel facility, or competitive courses..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-control"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary full-width"
                  >
                    <Send size={18} />
                    <span>{submitting ? 'Sending Message...' : 'Submit Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Location Map Preview */}
            <div className="map-embed-box glass-card">
              <div className="map-header">
                <MapPin size={18} />
                <span>Campus Location: Vivekanagara, Hassan (Karnataka)</span>
              </div>
              <div className="map-frame">
                <iframe
                  title="Masters PU College Hassan Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.685244195726!2d76.0841263!3d13.0039296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba549d97034c56b%3A0xc391e469d72c6e61!2sVivekanagara%2C%20Hassan%2C%20Karnataka%20573201!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
