import { 
  Target, 
  Compass, 
  Lightbulb, 
  Check, 
  Award,
  Atom, 
  FlaskConical, 
  Calculator, 
  Dna,
  ShieldCheck,
  Building2
} from 'lucide-react';

export default function AboutCollege() {
  const founders = [
    {
      subject: 'Physics Department',
      icon: Atom,
      name: 'Sri Gowde Gowda',
      qualification: 'M.Sc., B.Ed.',
      role: 'Founder & H.O.D of Physics',
      color: '#0284c7',
      desc: 'Expert educator specializing in Mechanics, Electrodynamics & competitive problem-solving for JEE & NEET.'
    },
    {
      subject: 'Chemistry Department',
      icon: FlaskConical,
      name: 'Sri T.A. Hanumantha Rayudu',
      qualification: 'M.Sc., M.Phil.',
      role: 'Founder & H.O.D of Chemistry',
      color: '#059669',
      desc: 'Master strategist in Organic, Inorganic and Physical Chemistry with decades of proven rank generation.'
    },
    {
      subject: 'Mathematics Department',
      icon: Calculator,
      name: 'Smt. H.C. Nandini',
      qualification: 'M.Sc.',
      role: 'Founder & H.O.D of Mathematics',
      color: '#d97706',
      desc: 'Renowned mathematician dedicated to deep conceptual clarity, speed algorithms, and rigorous calculus mastery.'
    },
    {
      subject: 'Biology Department',
      icon: Dna,
      name: 'Sri B.S. Manjunatha',
      qualification: 'M.Sc.',
      role: 'Principal, Founder & H.O.D of Biology',
      color: '#7c3aed',
      desc: 'Distinguished botanist & zoologist mentoring medical aspirants to top percentiles in NEET & Board biology.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrap">
          <span className="section-badge gold">
            <Building2 size={14} />
            Institutional Profile
          </span>
          <h2 className="section-heading">About Masters PU College Hassan</h2>
          <p className="section-subheading">
            A symbol of progressive, high-quality Science Pre-University education in Hassan, Karnataka — bridging the gap between board syllabus and competitive exam triumphs.
          </p>
        </div>

        {/* Narrative & Milestone Grid */}
        <div className="about-narrative-grid">
          <div className="about-text-column">
            <h3 className="about-lead-title">
              Nurturing Minds, Powering Ambitions Since 2012
            </h3>
            <p className="about-p">
              <strong>Masters PU College Hassan</strong>, one of the finest institutions with potential for excellence, is situated in Vivekanagara, Hassan, Karnataka. It was established in 2012–13 under the visionary auspices of <strong>Masters Education Trust</strong>. A pioneering chapter began then in Hassan in the Pre-University Science stream by successfully bridging the gap between the Karnataka State Board syllabus and all competitive entrance exams (CET, NEET, JEE, BITSAT) under a single harmonious umbrella.
            </p>
            <p className="about-p">
              Since its inception, Masters PU College Hassan has persistently produced phenomenal results, <strong>securing one of the Top 5 positions across Karnataka State</strong> and maintaining the <strong>District Top 5 positions every single year</strong> since establishment. Every year, our students earn top percentiles and enter premier Engineering, Medical, and Agricultural universities across India.
            </p>
            
            <div className="about-highlights-box">
              <div className="highlight-row">
                <div className="highlight-icon-box">
                  <Award size={20} />
                </div>
                <div>
                  <h4>State & District Dominance</h4>
                  <p>Consistently producing single-digit and double-digit state ranks in CET, NEET, and PU Board.</p>
                </div>
              </div>

              <div className="highlight-row">
                <div className="highlight-icon-box">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4>Distinguished Founder-Led Faculty</h4>
                  <p>Optional PCMB combinations are personally headed and taught daily by the founding master lecturers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-pillars-column">
            {/* Vision */}
            <div className="pillar-card vision-card">
              <div className="pillar-header">
                <div className="pillar-icon-wrap" style={{ background: '#dbeafe', color: '#1d4ed8' }}>
                  <Compass size={22} />
                </div>
                <h3>OUR VISION</h3>
              </div>
              <p>
                To provide affordable quality education, while equipping students with knowledge and skills in their chosen stream, inculcate values, identify hidden talents, provide opportunities for students to realize their full potential and thus shape them into future leaders, entrepreneurs and above all good human beings.
              </p>
            </div>

            {/* Mission */}
            <div className="pillar-card mission-card">
              <div className="pillar-header">
                <div className="pillar-icon-wrap" style={{ background: '#dcfce7', color: '#15803d' }}>
                  <Target size={22} />
                </div>
                <h3>OUR MISSION</h3>
              </div>
              <p>
                True to the vision of this college, we are committed to inspiring our students to attain nobility through compassion, strength of character, and dedication to the service of their fellow human beings, and achievement of excellence in all walks of life.
              </p>
            </div>

            {/* Aims & Objectives */}
            <div className="pillar-card aims-card">
              <div className="pillar-header">
                <div className="pillar-icon-wrap" style={{ background: '#fef3c7', color: '#b45309' }}>
                  <Lightbulb size={22} />
                </div>
                <h3>AIMS & OBJECTIVES</h3>
              </div>
              <p>
                To empower every individual with knowledge and Self-Confidence. To enable students to develop as intellectually alive, morally upright, socially responsible citizens with a positive attitude, ever ready for continuous personal and professional growth.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Department Heads Banner */}
        <div className="founders-section">
          <div className="founders-header">
            <span className="section-badge">Academic Pillars</span>
            <h3>Department Heads & Founder Faculty</h3>
            <p>Direct leadership from legendary subject experts in PCMB ensures unparalleled guidance and individual attention.</p>
          </div>

          <div className="founders-grid">
            {founders.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.name} className="founder-card glass-card">
                  <div className="founder-icon-box" style={{ color: f.color, backgroundColor: `${f.color}15` }}>
                    <Icon size={28} />
                  </div>
                  <span className="founder-subject">{f.subject}</span>
                  <h4 className="founder-name">{f.name}</h4>
                  <div className="founder-qual">{f.qualification}</div>
                  <div className="founder-role">{f.role}</div>
                  <p className="founder-desc">{f.desc}</p>
                  <div className="founder-badge">
                    <Check size={14} /> 100% Curriculum Focus
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
