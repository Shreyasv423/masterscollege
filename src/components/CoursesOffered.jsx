import { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Stethoscope, 
  Laptop, 
  Target, 
  Award,
  ChevronRight,
  Clock,
  Layers
} from 'lucide-react';

export default function CoursesOffered({ onOpenApply }) {
  const [activeTab, setActiveTab] = useState('combinations');

  const competitiveExams = [
    {
      name: 'NEET / JIPMER',
      title: 'National Eligibility cum Entrance Test',
      category: 'Medical & Dental',
      desc: 'Rigorous coaching covering NCERT biology line-by-line, high-speed physics calculations, and organic chemistry mastery.',
      badge: 'Medical Premier',
      target: 'MBBS, BDS, AYUSH, Veterinary'
    },
    {
      name: 'IIT-JEE (Mains & Adv)',
      title: 'Joint Entrance Examination',
      category: 'Engineering & Technology',
      desc: 'Deep conceptual problem-solving, advanced mathematics mechanics, and multi-concept question drills for top IITs & NITs.',
      badge: 'IIT / NIT Target',
      target: 'B.Tech / B.E. at IITs, NITs, IIITs'
    },
    {
      name: 'K-CET (Karnataka CET)',
      title: 'Karnataka Common Entrance Test',
      category: 'State Engineering & Agriculture',
      desc: 'Speed accuracy training, past 15 years solved papers, and shortcut techniques for top rank securing in Karnataka.',
      badge: 'State Top 5 Track',
      target: 'Top Govt & Private Engg / Agri Colleges'
    },
    {
      name: 'BITSAT',
      title: 'BITS Admission Test',
      category: 'Premier Technical Institutes',
      desc: 'Speed-based online CBT mock simulation, English proficiency & logical reasoning training for BITS Pilani, Goa, Hyderabad.',
      badge: 'Premium BITS',
      target: 'Dual Degree & B.E. programs'
    },
    {
      name: 'NDA & Naval Academy',
      title: 'National Defence Academy Exam',
      category: 'Armed Forces Officer Entry',
      desc: 'Analytical mathematics, general ability, and physical discipline guidance for Indian Army, Navy, and Air Force entry.',
      badge: 'Defence Entry',
      target: 'Officer Commission in Armed Forces'
    },
    {
      name: 'NATA',
      title: 'National Aptitude Test in Architecture',
      category: 'Architecture & Design',
      desc: 'Aesthetic sensitivity, mathematics fundamentals, and architectural aptitude coaching for top B.Arch schools.',
      badge: 'Design & B.Arch',
      target: 'B.Arch in Premier Institutions'
    }
  ];

  return (
    <section id="courses" className="section courses-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-title-wrap">
          <span className="section-badge gold">
            <BookOpen size={14} />
            ACADEMIC PATHWAYS
          </span>
          <h2 className="section-heading">Courses & Integrated Coaching</h2>
          <p className="section-subheading">
            Choose your gateway to professional excellence. Masters PU College Hassan provides comprehensive 2-year Pre-University Science programs combined seamlessly with day-to-day competitive exam coaching.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="courses-tab-nav">
          <button
            type="button"
            className={`tab-btn ${activeTab === 'combinations' ? 'active' : ''}`}
            onClick={() => setActiveTab('combinations')}
          >
            <Layers size={17} />
            <span>Pre-University Combinations</span>
          </button>
          <button
            type="button"
            className={`tab-btn ${activeTab === 'competitive' ? 'active' : ''}`}
            onClick={() => setActiveTab('competitive')}
          >
            <Target size={17} />
            <span>Integrated Competitive Streams</span>
          </button>
        </div>

        {/* Tab 1: Combinations */}
        {activeTab === 'combinations' && (
          <div className="combinations-grid">
            {/* PCMB Card */}
            <div className="stream-card pcmb-card glass-card">
              <div className="stream-card-banner">
                <div className="stream-badge-pill">
                  <Stethoscope size={16} />
                  <span>Medical & Pure Sciences Track</span>
                </div>
                <span className="stream-code">P.C.M.B</span>
              </div>

              <div className="stream-card-body">
                <h3 className="stream-title">Physics, Chemistry, Mathematics & Biology</h3>
                <p className="stream-desc">
                  Physics, Chemistry, Mathematics, Biology (PCMB) is a very mature combination, tried and tested with time, which provides a solid foundation to further study of pure sciences or other professional science-related degrees.
                </p>

                <div className="stream-subjects-list">
                  <div className="subject-chip">Physics (Theory + Practical)</div>
                  <div className="subject-chip">Chemistry (Theory + Practical)</div>
                  <div className="subject-chip">Mathematics</div>
                  <div className="subject-chip">Biology (Botany + Zoology)</div>
                  <div className="subject-chip">English (Compulsory Language)</div>
                  <div className="subject-chip">Kannada / Hindi / Sanskrit</div>
                </div>

                <div className="career-opportunities">
                  <h4>Career Gateways:</h4>
                  <ul>
                    <li><CheckCircle2 size={15} /> MBBS, BDS, BAMS, BHMS & Allied Medical Sciences</li>
                    <li><CheckCircle2 size={15} /> B.V.Sc (Veterinary Sciences) & B.Sc (Agriculture / Forestry)</li>
                    <li><CheckCircle2 size={15} /> Biotechnology, Bioinformatics & Pharmacy (B.Pharm)</li>
                    <li><CheckCircle2 size={15} /> B.E. / B.Tech Engineering via KCET & JEE</li>
                  </ul>
                </div>

                <div className="stream-footer">
                  <button
                    type="button"
                    onClick={onOpenApply}
                    className="btn btn-primary full-width"
                  >
                    <span>Apply for PCMB Stream</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* PCMCs Card */}
            <div className="stream-card pcmc-card glass-card">
              <div className="stream-card-banner">
                <div className="stream-badge-pill cyan-badge">
                  <Laptop size={16} />
                  <span>Engineering & Technology Track</span>
                </div>
                <span className="stream-code">P.C.M.Cs</span>
              </div>

              <div className="stream-card-body">
                <h3 className="stream-title">Physics, Chemistry, Mathematics & Computer Science</h3>
                <p className="stream-desc">
                  Physics, Chemistry, Mathematics, Computer Science (PCMCs) is a dynamic combination designed to cater for the emerging technology market, providing an ideal analytical springboard for technical and computational degrees.
                </p>

                <div className="stream-subjects-list">
                  <div className="subject-chip">Physics (Theory + Practical)</div>
                  <div className="subject-chip">Chemistry (Theory + Practical)</div>
                  <div className="subject-chip">Mathematics</div>
                  <div className="subject-chip">Computer Science (C++, Python, SQL)</div>
                  <div className="subject-chip">English (Compulsory Language)</div>
                  <div className="subject-chip">Kannada / Hindi / Sanskrit</div>
                </div>

                <div className="career-opportunities">
                  <h4>Career Gateways:</h4>
                  <ul>
                    <li><CheckCircle2 size={15} /> Computer Science & AI / ML Engineering (B.E / B.Tech)</li>
                    <li><CheckCircle2 size={15} /> Electronics, Electrical, Mechanical & Aerospace</li>
                    <li><CheckCircle2 size={15} /> BCA, B.Sc Computer Science & Data Analytics</li>
                    <li><CheckCircle2 size={15} /> IIT, NIT, IIIT & BITS premier technological entries</li>
                  </ul>
                </div>

                <div className="stream-footer">
                  <button
                    type="button"
                    onClick={onOpenApply}
                    className="btn btn-primary full-width"
                  >
                    <span>Apply for PCMCs Stream</span>
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Competitive Coaching */}
        {activeTab === 'competitive' && (
          <div className="competitive-wrapper">
            <div className="competitive-header-notice">
              <Sparkles size={20} className="notice-icon" />
              <div>
                <h4>DAY-TO-DAY INTEGRATED COACHING MODEL</h4>
                <p>
                  No need for outside evening tuition classes. At Masters PU College Hassan, board syllabus preparation and competitive exam question drills occur synchronously in the regular daily academic schedule under expert supervision.
                </p>
              </div>
            </div>

            <div className="competitive-grid">
              {competitiveExams.map((exam) => (
                <div key={exam.name} className="competitive-card glass-card">
                  <div className="comp-card-top">
                    <span className="comp-badge">{exam.badge}</span>
                    <span className="comp-category">{exam.category}</span>
                  </div>

                  <h3 className="comp-name">{exam.name}</h3>
                  <div className="comp-full-title">{exam.title}</div>
                  <p className="comp-desc">{exam.desc}</p>

                  <div className="comp-target-box">
                    <span className="target-label">Target Destinations:</span>
                    <span className="target-val">{exam.target}</span>
                  </div>

                  <div className="comp-features">
                    <div className="comp-feat-item">
                      <Clock size={14} /> Daily Practice Problems (DPP)
                    </div>
                    <div className="comp-feat-item">
                      <Award size={14} /> Weekly OMR Pattern Mock Tests
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Educational Features Banner */}
        <div className="pedagogy-banner">
          <div className="pedagogy-item">
            <div className="pedagogy-num">01</div>
            <h4>Personalized Doubt Solving</h4>
            <p>Faculty members are available on campus after lecture hours for individual doubt eradication.</p>
          </div>
          <div className="pedagogy-item">
            <div className="pedagogy-num">02</div>
            <h4>Comprehensive Study Modules</h4>
            <p>Printed synopses, formula sheets, chapter-wise level-1 & level-2 question banks provided to every student.</p>
          </div>
          <div className="pedagogy-item">
            <div className="pedagogy-num">03</div>
            <h4>Continuous Parent Engagement</h4>
            <p>Periodic attendance, unit test scores, and counseling feedbacks shared directly with parents.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
