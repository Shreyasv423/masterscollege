import { Quote, Award, Users, CheckCircle, GraduationCap } from 'lucide-react';

export default function PrincipalMessage({ onOpenApply }) {
  const management = [
    {
      name: 'T A HANUMANTHA RAYUDU',
      qualification: 'M.Sc., M.Phil.',
      role: 'PRESIDENT',
      badge: 'Board of Trustees',
      initials: 'TR',
      color: '#1e3a8a'
    },
    {
      name: 'H C NANDINI',
      qualification: 'M.Sc.',
      role: 'VICE PRESIDENT',
      badge: 'Board of Trustees',
      initials: 'HN',
      color: '#047857'
    },
    {
      name: 'GOWDE GOWDA',
      qualification: 'M.Sc., B.Ed.',
      role: 'SECRETARY',
      badge: 'Board of Trustees',
      initials: 'GG',
      color: '#b45309'
    },
    {
      name: 'B S MANJUNATHA',
      qualification: 'M.Sc.',
      role: 'TREASURER & PRINCIPAL',
      badge: 'Principal & Executive',
      initials: 'BM',
      color: '#6d28d9'
    }
  ];

  return (
    <section id="management" className="section principal-mgmt-section">
      <div className="container">
        {/* Principal Message Showcase */}
        <div className="principal-card-box">
          <div className="principal-badge-tag">
            <Award size={15} />
            <span>LEADERSHIP PERSPECTIVE</span>
          </div>

          <div className="principal-grid">
            <div className="principal-profile-col">
              <div className="principal-avatar-wrap">
                <div className="principal-avatar-letter">BM</div>
                <div className="principal-ring-glow" />
              </div>
              <h3 className="principal-name">Sri B. S. MANJUNATHA</h3>
              <div className="principal-credentials">M.Sc. • Founder & Principal</div>
              <div className="principal-post-badge">Treasurer & Principal, Masters PU College Hassan</div>

              <div className="principal-contact-mini">
                <span>📞 08172297164</span>
                <span>✉️ manjunathbs083@gmail.com</span>
              </div>

              <button
                type="button"
                onClick={onOpenApply}
                className="btn btn-gold principal-apply-btn"
              >
                <GraduationCap size={16} />
                <span>Join Masters for 2026-27</span>
              </button>
            </div>

            <div className="principal-quote-col">
              <div className="quote-mark-icon">
                <Quote size={42} />
              </div>

              <blockquote className="quote-epigraph">
                &ldquo;A good education is a foundation for a better future.&rdquo;
                <span className="quote-author">— Elizabeth Warren</span>
              </blockquote>

              <div className="principal-speech">
                <p>
                  <strong>Masters Pre-University College</strong> is a symbol of progressive and quality education in Science. As the principal of this esteemed institute, I take this opportunity to thank all our well-wishers, especially our parents who have unconditionally trusted us and wholeheartedly supported us.
                </p>
                <p>
                  We are committed to encouraging positive communication and interaction among students, teachers, and the wider community. We welcome the support and guidance of the community to train our students in our endeavor to build a better society and a better world at large.
                </p>
                <p>
                  We promise an academic environment that is deeply conducive for learning and individual achievement. I extend my warmest best wishes to all our students, staff, parents, and alumni. I wish that the career of our students will rise to great heights and they will cherish all their dreams after successfully completing education from our college.
                </p>
              </div>

              <div className="principal-signoff">
                <div className="signoff-text">
                  <div className="signoff-salutation">Wishing you all success and a bright future,</div>
                  <div className="signoff-signature">Sri B. S. Manjunatha</div>
                  <div className="signoff-desig">Principal, Masters PU College Hassan, Hassan</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Management Board of Trustees Section */}
        <div className="management-board-section">
          <div className="section-title-wrap mgmt-title-wrap">
            <span className="section-badge gold">
              <Users size={14} />
              GOVERNING BODY
            </span>
            <h3 className="section-heading">Meet Our Management</h3>
            <p className="section-subheading">
              Distinguished academicians, educational leaders, and subject visionaries steering Masters Education Trust with commitment and integrity.
            </p>
          </div>

          <div className="management-grid">
            {management.map((leader) => (
              <div key={leader.name} className="mgmt-card glass-card">
                <div className="mgmt-avatar" style={{ backgroundColor: `${leader.color}15`, color: leader.color }}>
                  <span>{leader.initials}</span>
                </div>
                <span className="mgmt-badge">{leader.badge}</span>
                <h4 className="mgmt-name">{leader.name}</h4>
                <div className="mgmt-qual">{leader.qualification}</div>
                <div className="mgmt-role" style={{ color: leader.color }}>{leader.role}</div>
                <div className="mgmt-footer">
                  <CheckCircle size={14} className="mgmt-check" />
                  <span>Masters Education Trust</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
