import { X, ShieldCheck, Lock, CheckCircle } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-dialog glass-card privacy-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="privacy-modal-title"
        aria-modal="true"
      >
        <div className="modal-header">
          <div className="modal-title-box">
            <div className="modal-icon-badge">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h3 id="privacy-modal-title">Privacy Policy & Institutional Terms</h3>
              <p className="modal-subtitle">Masters PU College Hassan • Masters Education Trust</p>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close privacy modal"
          >
            <X size={22} />
          </button>
        </div>

        <div className="modal-body privacy-body-content">
          <div className="privacy-intro-box">
            <Lock size={18} className="intro-lock" />
            <p>
              Last Updated: October 2026. Masters PU College Hassan is committed to upholding the privacy, dignity, and personal data protection of prospective students, enrolled candidates, parents, and website visitors.
            </p>
          </div>

          <section className="privacy-section">
            <h4>1. Information We Collect</h4>
            <p>
              When applying for admission, submitting inquiries, or communicating with college administration, we collect:
            </p>
            <ul>
              <li><strong>Personal Identifiers:</strong> Student full name, date of birth, gender, nationality, religion, and social category.</li>
              <li><strong>Contact Information:</strong> Parent/guardian phone numbers, residential addresses, and email addresses.</li>
              <li><strong>Academic Records:</strong> Qualifying examination marks (10th/SSLC), school last attended, medium of instruction, and entrance exam aspirations.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h4>2. Use of Information</h4>
            <p>
              Information provided is utilized strictly for educational purposes, including:
            </p>
            <ul>
              <li>Processing Pre-University admission applications for I PU and II PU Science streams (PCMB & PCMCs).</li>
              <li>Facilitating parent-lecturer academic counseling and progress monitoring.</li>
              <li>Submitting mandatory candidate registration to the Department of Pre-University Education, Karnataka.</li>
              <li>Disseminating updates regarding competitive examinations (NEET, JEE, KCET).</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h4>3. Cookies & Local Storage</h4>
            <p>
              Our website uses minimal, non-invasive cookies and client-side browser storage exclusively to enhance site performance, remember user preferences, and securely manage admission form draft submissions. We do not engage in third-party commercial ad tracking.
            </p>
          </section>

          <section className="privacy-section">
            <h4>4. Data Security & Storage</h4>
            <p>
              All academic inquiries and records are retained under secure physical and electronic safeguards administered by the college office. Authorized staff access student records strictly on a need-to-know basis.
            </p>
          </section>

          <section className="privacy-section">
            <h4>5. Contact Our Privacy Office</h4>
            <p>
              For any inquiries regarding personal information or record modifications, please contact:
            </p>
            <div className="privacy-contact-box">
              <strong>Office of the Principal</strong><br />
              Masters PU College Hassan<br />
              Vivekanagara, Hassan, Karnataka – 573201<br />
              Telephone: 08172297164 / 8277785534 | Email: manjunathbs083@gmail.com
            </div>
          </section>

          <div className="privacy-modal-actions">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-primary"
            >
              <CheckCircle size={16} />
              <span>I Understand & Agree</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
