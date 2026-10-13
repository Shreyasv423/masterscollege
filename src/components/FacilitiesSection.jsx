import { useState } from 'react';
import { 
  Building, 
  FlaskConical, 
  BookOpen, 
  HeartHandshake, 
  MonitorPlay, 
  ShieldCheck, 
  Bus, 
  Home, 
  Maximize2, 
  X 
} from 'lucide-react';

const facilitiesData = [
  {
    id: 'lab',
    title: 'Science Laboratories',
    image: '/college_assets/Pictures/Facilities/laboratory.jpg',
    icon: FlaskConical,
    tag: 'Hands-on Experiments',
    desc: 'Spacious, well-equipped and modern Physics, Chemistry, Biology and Computer laboratories that allow students to perform experiments individually under expert lecturer supervision.'
  },
  {
    id: 'lib',
    title: 'Extensive Library & Reading Hall',
    image: '/college_assets/Pictures/Facilities/lib4.jpg',
    icon: BookOpen,
    tag: 'Academic Knowledge Bank',
    desc: 'A calm, resource-rich library housing thousands of textbooks, reference guides, previous 15-year solved competitive question papers, periodicals, and national science magazines.'
  },
  {
    id: 'counsel',
    title: 'Counseling & Mentorship Cell',
    image: '/college_assets/Pictures/Facilities/counceling1.jpg',
    icon: HeartHandshake,
    tag: 'Student Well-Being',
    desc: 'Dedicated student counseling service offering personalized stress management, motivational guidance, study strategies, and career planning sessions for teenage students.'
  },
  {
    id: 'conf',
    title: 'Multimedia Conference Room',
    image: '/college_assets/Pictures/Facilities/conference.jpg',
    icon: MonitorPlay,
    tag: 'Seminars & Workshops',
    desc: 'Audio-visual equipped conference room hosting guest lectures by medical & engineering luminaries, motivational talks, and student interactive presentations.'
  },
  {
    id: 'security',
    title: '24/7 Campus Security & CCTV',
    image: '/college_assets/Pictures/Facilities/security1.jpg',
    icon: ShieldCheck,
    tag: 'Safety & Protection',
    desc: 'Complete 24x7 security surveillance with high-definition CCTV cameras across all corridors, laboratories, and grounds, with strict gate-pass regulations.'
  },
  {
    id: 'transport',
    title: 'Dedicated Transport Fleet',
    image: '/college_assets/Pictures/Facilities/transport.jpg',
    icon: Bus,
    tag: 'Safe Commute',
    desc: 'Reliable, well-maintained college bus service covering extensive routes across Hassan town and nearby neighborhoods, ensuring punctuality and safety.'
  },
  {
    id: 'hostel',
    title: 'Hostel — Home Away From Home',
    image: '/college_assets/Pictures/Facilities/hostel.jpg',
    icon: Home,
    tag: 'Nutritious & Caring',
    desc: 'Comfortable residential hostels with caring resident wardens, hygienic and healthy South Indian food, dedicated night study hours, and medical support.'
  }
];

export default function FacilitiesSection() {
  const [activeModalImg, setActiveModalImg] = useState(null);

  return (
    <section id="facilities" className="section facilities-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-title-wrap">
          <span className="section-badge gold">
            <Building size={14} />
            CAMPUS INFRASTRUCTURE
          </span>
          <h2 className="section-heading">World-Class Campus Facilities</h2>
          <p className="section-subheading">
            An inspiring environment built for focused intellectual development, physical well-being, and peaceful academic rigor at Vivekanagara, Hassan.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="facilities-grid">
          {facilitiesData.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="facility-card glass-card">
                <div 
                  className="facility-img-wrap"
                  onClick={() => setActiveModalImg(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setActiveModalImg(item);
                  }}
                  aria-label={`View enlarged photo of ${item.title}`}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="facility-img" 
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/college_assets/img/slider/s3.jpg';
                    }}
                  />
                  <div className="facility-zoom-overlay">
                    <Maximize2 size={24} />
                    <span>Click to enlarge</span>
                  </div>
                  <span className="facility-tag-pill">{item.tag}</span>
                </div>

                <div className="facility-content">
                  <div className="facility-title-row">
                    <div className="facility-icon-wrap">
                      <Icon size={20} />
                    </div>
                    <h3 className="facility-title">{item.title}</h3>
                  </div>
                  <p className="facility-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Lightbox */}
        {activeModalImg && (
          <div 
            className="lightbox-overlay"
            onClick={() => setActiveModalImg(null)}
          >
            <div 
              className="lightbox-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setActiveModalImg(null)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <div className="lightbox-img-box">
                <img 
                  src={activeModalImg.image} 
                  alt={activeModalImg.title} 
                  className="lightbox-img"
                />
              </div>
              <div className="lightbox-caption">
                <h3>{activeModalImg.title}</h3>
                <p>{activeModalImg.desc}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
