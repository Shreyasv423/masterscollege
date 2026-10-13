import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUp, 
  GraduationCap, 
  ShieldCheck 
} from 'lucide-react';

export default function Footer({ onOpenApply, onOpenPrivacy }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      {/* Pre-Footer CTA Bar */}
      <div className="pre-footer-cta">
        <div className="container pre-footer-container">
          <div className="pre-footer-text">
            <span className="pre-footer-pill">
              <ShieldCheck size={14} /> ADMISSIONS 2026–27
            </span>
            <h3>Shape Your Future in Science with Karnataka&apos;s Proven Champions</h3>
            <p>
              Join Masters PU College Hassan for integrated PCMB & PCMCs coaching led personally by founder department heads.
            </p>
          </div>
          <div className="pre-footer-actions">
            <button
              type="button"
              onClick={onOpenApply}
              className="btn btn-gold btn-lg"
            >
              <GraduationCap size={20} />
              <span>Apply for Admission</span>
            </button>
            <a href="tel:08172297164" className="btn btn-outline btn-lg">
              <Phone size={18} />
              <span>Call: 08172297164</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="main-footer">
        <div className="container footer-grid">
          {/* Column 1: College Intro */}
          <div className="footer-col col-brand">
            <div className="footer-brand-title">
              <img 
                src="/college_assets/img/logo/logo2.png" 
                alt="Masters PU College Hassan" 
                className="footer-logo-img"
                width="200"
                height="55"
              />
            </div>
            <p className="footer-about-text">
              Masters PU College Hassan, initiated by experienced lecturers, dedicated to connecting students to premier medical, engineering, and pure science institutions across India.
            </p>
            <div className="footer-tagline">
              &ldquo;Masters is a home away from home.&rdquo;
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Our College</a></li>
              <li><a href="#management">Leadership & Faculty</a></li>
              <li><a href="#courses">Courses Offered</a></li>
              <li><a href="#facilities">Campus Facilities</a></li>
              <li><a href="#achievers">Wall of Fame & Sports</a></li>
              <li><a href="#results">Examination Results</a></li>
              <li><a href="#gallery">Campus Gallery</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div className="footer-col">
            <h4 className="footer-col-title">Academic Streams</h4>
            <ul className="footer-links-list">
              <li>
                <strong>P.C.M.B:</strong> Physics, Chemistry, Mathematics & Biology
              </li>
              <li>
                <strong>P.C.M.Cs:</strong> Physics, Chemistry, Mathematics & Computer Science
              </li>
              <li className="comp-header">Integrated Programs:</li>
              <li>• NEET / JIPMER (Medical)</li>
              <li>• IIT-JEE Mains & Advanced</li>
              <li>• K-CET (Karnataka Common Entrance)</li>
              <li>• BITSAT, NDA & NATA</li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="footer-col col-contact">
            <h4 className="footer-col-title">Campus Office</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="f-icon" />
              <span>Vivekanagara, Hassan, Karnataka 573201</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="f-icon" />
              <span>08172297164 | 8277785534</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="f-icon" />
              <span>manjunathbs083@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} className="f-icon" />
              <span>10:00 AM – 5:00 PM (Mon – Sat)</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="container bottom-footer-bar">
          <p className="copyright-text">
            © 2026 Masters PU College Hassan. All Rights Reserved. Managed by Masters Education Trust.
          </p>

          <div className="bottom-links">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="footer-policy-link"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="footer-policy-link"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="back-to-top-btn"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
