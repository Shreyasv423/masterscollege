import { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  CheckCircle2, 
  Copy, 
  Check, 
  Download, 
  Calendar, 
  Sparkles 
} from 'lucide-react';

export default function ApplyOnlineModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    studentName: '',
    gender: 'Male',
    dob: '',
    nationality: 'Indian',
    religion: 'Hindu',
    caste: '',
    isScSt: 'No',
    lastSchool: '',
    medium: 'English',
    percentage: '',
    admissionClass: 'I PU (Science)',
    combination: 'PCMB',
    competitiveTarget: 'NEET & KCET',
    phone: '',
    email: '',
    guardianDetails: ''
  });

  const [submittedApp, setSubmittedApp] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant admission registration & generate unique ID
    setTimeout(() => {
      const appId = `MPC-2026-${Math.floor(100000 + Math.random() * 900000)}`;
      const appRecord = {
        ...formData,
        appId,
        submittedAt: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      // Store in localStorage
      try {
        const stored = JSON.parse(localStorage.getItem('mpc_applications') || '[]');
        stored.unshift(appRecord);
        localStorage.setItem('mpc_applications', JSON.stringify(stored));
      } catch (err) {
        console.error(err);
      }

      setSubmittedApp(appRecord);
      setIsSubmitting(false);
    }, 600);
  };

  const handleCopyId = () => {
    if (!submittedApp) return;
    navigator.clipboard.writeText(submittedApp.appId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setSubmittedApp(null);
    setFormData({
      studentName: '',
      gender: 'Male',
      dob: '',
      nationality: 'Indian',
      religion: 'Hindu',
      caste: '',
      isScSt: 'No',
      lastSchool: '',
      medium: 'English',
      percentage: '',
      admissionClass: 'I PU (Science)',
      combination: 'PCMB',
      competitiveTarget: 'NEET & KCET',
      phone: '',
      email: '',
      guardianDetails: ''
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-dialog glass-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-box">
            <div className="modal-icon-badge">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 id="modal-title">Online Admission Application 2026–27</h3>
              <p className="modal-subtitle">Masters PU College Hassan • Hassan, Karnataka</p>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close application form"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {!submittedApp ? (
            <form onSubmit={handleSubmit} className="admission-form">
              <div className="form-info-notice">
                <Sparkles size={16} className="notice-icon" />
                <span>
                  Please fill all required details in capital letters. Admissions for <strong>I PU (PCMB & PCMCs)</strong> are strictly based on SSLC/10th Board merit.
                </span>
              </div>

              {/* Step 1: Personal Details */}
              <div className="form-section-title">
                1. Student Personal Information
              </div>

              <div className="form-grid-2">
                <div className="form-group full-width">
                  <label htmlFor="studentName">
                    1. Student Name with Initials [CAPITAL LETTERS] <span className="req">*</span>
                  </label>
                  <input
                    id="studentName"
                    type="text"
                    name="studentName"
                    required
                    placeholder="e.g. RAHUL SHARMA K S"
                    value={formData.studentName}
                    onChange={handleChange}
                    className="form-control uppercase"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gender">
                    2. Gender <span className="req">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="dob">
                    3. Date of Birth <span className="req">*</span>
                  </label>
                  <input
                    id="dob"
                    type="date"
                    name="dob"
                    required
                    value={formData.dob}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="nationality">4. Nationality</label>
                  <input
                    id="nationality"
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="religion">5. Religion</label>
                  <input
                    id="religion"
                    type="text"
                    name="religion"
                    placeholder="e.g. Hindu / Muslim / Christian"
                    value={formData.religion}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="caste">6. Caste / Category</label>
                  <input
                    id="caste"
                    type="text"
                    name="caste"
                    placeholder="e.g. General, 2A, 3B, Cat-1"
                    value={formData.caste}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="isScSt">7. Candidate Belongs to SC / ST?</label>
                  <select
                    id="isScSt"
                    name="isScSt"
                    value={formData.isScSt}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="No">No</option>
                    <option value="Yes - SC">Yes - SC</option>
                    <option value="Yes - ST">Yes - ST</option>
                  </select>
                </div>
              </div>

              {/* Step 2: Academic Background */}
              <div className="form-section-title">
                2. Academic Background & Course Choice
              </div>

              <div className="form-grid-2">
                <div className="form-group full-width">
                  <label htmlFor="lastSchool">
                    8. Name & Address of School Last Studied <span className="req">*</span>
                  </label>
                  <input
                    id="lastSchool"
                    type="text"
                    name="lastSchool"
                    required
                    placeholder="e.g. St. Joseph High School, Hassan"
                    value={formData.lastSchool}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="medium">9. Medium of Instruction</label>
                  <select
                    id="medium"
                    name="medium"
                    value={formData.medium}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="English">English</option>
                    <option value="Kannada">Kannada</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="percentage">
                    10. Marks / % Secured in 10th / SSLC <span className="req">*</span>
                  </label>
                  <input
                    id="percentage"
                    type="text"
                    name="percentage"
                    required
                    placeholder="e.g. 92.5% or 580/625"
                    value={formData.percentage}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="admissionClass">11. Class into which Admission is Sought</label>
                  <select
                    id="admissionClass"
                    name="admissionClass"
                    value={formData.admissionClass}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="I PU (Science)">I PU (11th Grade Science)</option>
                    <option value="II PU (Science - Lateral)">II PU (12th Grade Transfer)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="combination">
                    12. Combination Preferred <span className="req">*</span>
                  </label>
                  <select
                    id="combination"
                    name="combination"
                    value={formData.combination}
                    onChange={handleChange}
                    className="form-control highlight-select"
                  >
                    <option value="PCMB">P.C.M.B (Physics, Chemistry, Maths, Biology)</option>
                    <option value="PCMCs">P.C.M.Cs (Physics, Chemistry, Maths, Computer Science)</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="competitiveTarget">
                    13. Competitive Integrated Coaching Target
                  </label>
                  <select
                    id="competitiveTarget"
                    name="competitiveTarget"
                    value={formData.competitiveTarget}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="NEET & KCET">NEET (Medical) + KCET</option>
                    <option value="JEE & KCET">IIT-JEE (Mains & Adv) + KCET</option>
                    <option value="KCET Focus">K-CET Focused Speed Coaching</option>
                    <option value="BITSAT & NDA">BITSAT / NDA / Defence Entrance</option>
                    <option value="Board Distinction Only">Karnataka PU Board Distinction Only</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Contact & Guardian */}
              <div className="form-section-title">
                3. Contact Information & Guardian
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label htmlFor="phone">
                    14. Student / Parent Phone No <span className="req">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. 9876543210"
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    15. Email Address <span className="req">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. student@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="guardianDetails">
                    16. Name & Address of Local Guardian (if staying with local guardian in Hassan)
                  </label>
                  <textarea
                    id="guardianDetails"
                    name="guardianDetails"
                    rows="2"
                    placeholder="Guardian Name, House Address, Hassan (Optional)"
                    value={formData.guardianDetails}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="terms-row">
                <input type="checkbox" id="agreeTerms" required />
                <label htmlFor="agreeTerms">
                  I hereby declare that all the information furnished above is true to the best of my knowledge. I promise to abide by all the rules and discipline of Masters PU College Hassan, Hassan.
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="form-actions-row">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-outline-primary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-gold btn-lg"
                >
                  <GraduationCap size={18} />
                  <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application Now'}</span>
                </button>
              </div>
            </form>
          ) : (
            /* Submission Success View */
            <div className="submission-success-view">
              <div className="success-icon-wrap">
                <CheckCircle2 size={54} className="text-emerald" />
              </div>

              <h3 className="success-title">Application Submitted Successfully!</h3>
              <p className="success-subtitle">
                Thank you for applying to Masters PU College Hassan for the 2026–27 academic year.
              </p>

              {/* Acknowledgment Slip Card */}
              <div className="receipt-card glass-card">
                <div className="receipt-header">
                  <span className="receipt-tag">APPLICATION ACKNOWLEDGMENT SLIP</span>
                  <div className="receipt-id-box">
                    <span className="id-label">Application Ref ID:</span>
                    <strong className="id-val">{submittedApp.appId}</strong>
                    <button
                      type="button"
                      onClick={handleCopyId}
                      className="copy-btn"
                      title="Copy Reference ID"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                <div className="receipt-details-grid">
                  <div>
                    <span className="label">Applicant Name:</span>
                    <strong className="val">{submittedApp.studentName}</strong>
                  </div>
                  <div>
                    <span className="label">Applied Stream:</span>
                    <strong className="val">{submittedApp.combination} ({submittedApp.admissionClass})</strong>
                  </div>
                  <div>
                    <span className="label">Competitive Coaching:</span>
                    <strong className="val">{submittedApp.competitiveTarget}</strong>
                  </div>
                  <div>
                    <span className="label">Contact Phone:</span>
                    <strong className="val">{submittedApp.phone}</strong>
                  </div>
                  <div>
                    <span className="label">Email Address:</span>
                    <strong className="val">{submittedApp.email}</strong>
                  </div>
                  <div>
                    <span className="label">Submitted Date:</span>
                    <strong className="val">{submittedApp.submittedAt}</strong>
                  </div>
                </div>

                <div className="receipt-instructions">
                  <h4>Next Steps for Admission:</h4>
                  <ol>
                    <li>Our admissions counselor will contact you at <strong>{submittedApp.phone}</strong> within 24 hours.</li>
                    <li>Please bring your original 10th marks card, Aadhaar card, and 3 passport size photos to the campus office at Vivekanagara, Hassan.</li>
                    <li>For immediate assistance, contact Principal Sri B. S. Manjunatha at <strong>08172297164</strong> or <strong>8277785534</strong>.</li>
                  </ol>
                </div>
              </div>

              <div className="success-action-btns">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="btn btn-primary"
                >
                  <Download size={16} />
                  <span>Print Acknowledgment</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-outline-primary"
                >
                  <Calendar size={16} />
                  <span>Submit Another Application</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-gold"
                >
                  <span>Done</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
