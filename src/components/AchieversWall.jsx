import { useState } from 'react';
import { 
  Trophy, 
  Medal, 
  Award, 
  Maximize2, 
  X, 
  Flame, 
  Globe2 
} from 'lucide-react';

const sportsAchievements = [
  {
    title: 'Football State Level & District Champions',
    event: 'DISTRICT LEVEL SPORTS 2021-22',
    category: 'Sports Championship',
    image: '/college_assets/Pictures/FOOT BALL STATE LEVEL.jpg',
    badge: 'Gold Medalists',
    desc: 'The Masters PU College Hassan Football team showcased tactical brilliance and stamina to lift the District Championship trophy.'
  },
  {
    title: 'International Karate Championship Dubai',
    event: 'INTERNATIONAL KARATE 2021-22 (DUBAI)',
    category: 'International Honor',
    image: '/college_assets/Pictures/KARATE INTERNATION DUBAI.jpg',
    badge: 'International Glory',
    desc: 'Bringing pride to India and Karnataka on the international stage in Dubai with martial arts precision.'
  },
  {
    title: 'Taluk Athletics Champions',
    event: 'DISTRICT LEVEL SPORTS 2021-22',
    category: 'Track & Field',
    image: '/college_assets/Pictures/TALUK ATHLETICS.jpg',
    badge: 'Multiple Medals',
    desc: 'Dominant podium finishes across sprints, relays, and long-distance athletics competitions.'
  },
  {
    title: 'Netball Boys Team Champions',
    event: 'DISTRICT LEVEL SPORTS 2021-22',
    category: 'Team Sports',
    image: '/college_assets/Pictures/NET BALL BOYS TEAM.jpg',
    badge: 'District Winners',
    desc: 'Defeated tough district contenders to emerge as the undisputed champions in the Netball tournament.'
  },
  {
    title: 'Netball Girls Team Champions',
    event: 'DISTRICT LEVEL SPORTS 2021-22',
    category: 'Team Sports',
    image: '/college_assets/Pictures/NET BALL GIRLS.jpg',
    badge: 'District Winners',
    desc: 'Masters PU College Hassan girls displayed supreme teamwork and endurance to win the trophy.'
  }
];

const academicBanners = [
  {
    title: 'JEE Mains 2024 Result Highlights',
    event: 'NATIONAL TESTING AGENCY (NTA)',
    category: 'National Engineering',
    image: '/college_assets/Pictures/WhatsApp Image 2024-02-17 at 12.35.52 PM.jpg',
    badge: 'JEE 2024 Qualifiers',
    desc: 'Outstanding percentile scores achieved by our students in Session 1 & 2 of JEE Mains 2024.'
  },
  {
    title: '2023 Annual Board Toppers',
    event: 'KARNATAKA PU BOARD EXAMINATION',
    category: 'PU Board Excellence',
    image: '/college_assets/Pictures/2023 ANNUAL TOPPERS.jpeg',
    badge: 'Centum Scorers',
    desc: 'Distinction holders and centum scorers in Physics, Chemistry, Mathematics, and Biology.'
  },
  {
    title: '2023 JEE Advanced & Mains Toppers',
    event: 'IIT JEE ADVANCED RANKERS',
    category: 'IIT / NIT Entries',
    image: '/college_assets/Pictures/2023 JEE TOPPERS.jpeg',
    badge: 'Premier Technology',
    desc: 'Students qualifying with top marks for admission to premier Indian Institutes of Technology and NITs.'
  },
  {
    title: 'Overall Academic Results (2014 - 2022)',
    event: 'DECADE OF EXCELLENCE',
    category: 'Historical Milestone',
    image: '/college_assets/Pictures/OVERALL ACADAMIC RESULT FROM 2014-2022.jpeg',
    badge: 'District Top 5 Legacy',
    desc: 'Continuous track record of top 5 ranks across Karnataka and Hassan district from 2014 to 2022.'
  }
];

export default function AchieversWall() {
  const [filter, setFilter] = useState('all');
  const [activePhoto, setActivePhoto] = useState(null);

  const displayItems = 
    filter === 'sports' 
      ? sportsAchievements 
      : filter === 'academic' 
      ? academicBanners 
      : [...sportsAchievements, ...academicBanners];

  return (
    <section id="achievers" className="section achievers-section">
      <div className="container">
        {/* Section Title */}
        <div className="section-title-wrap">
          <span className="section-badge gold">
            <Trophy size={14} />
            HALL OF FAME
          </span>
          <h2 className="section-heading">Achievers & Champions Gallery</h2>
          <p className="section-subheading">
            Celebrating our students&apos; heroic achievements in State & International sports arenas and record-breaking performances in Board and Competitive examinations.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="achievers-filter-bar">
          <button
            type="button"
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <Flame size={16} />
            <span>All Champions ({sportsAchievements.length + academicBanners.length})</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'sports' ? 'active' : ''}`}
            onClick={() => setFilter('sports')}
          >
            <Medal size={16} />
            <span>Sports & International ({sportsAchievements.length})</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'academic' ? 'active' : ''}`}
            onClick={() => setFilter('academic')}
          >
            <Award size={16} />
            <span>Academic Topper Banners ({academicBanners.length})</span>
          </button>
        </div>

        {/* Achievers Grid */}
        <div className="achievers-grid">
          {displayItems.map((item) => (
            <div key={item.title} className="achiever-card glass-card">
              <div 
                className="achiever-img-wrap"
                onClick={() => setActivePhoto(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setActivePhoto(item);
                }}
                aria-label={`View ${item.title}`}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="achiever-img" 
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/college_assets/img/slider/s5.jpg';
                  }}
                />
                <div className="achiever-overlay">
                  <Maximize2 size={24} />
                  <span>Enlarge Trophy</span>
                </div>
                <div className="achiever-badge-ribbon">
                  {item.badge}
                </div>
              </div>

              <div className="achiever-info">
                <div className="achiever-meta">
                  <span className="achiever-event">{item.event}</span>
                  <span className="achiever-cat">{item.category}</span>
                </div>
                <h3 className="achiever-title">{item.title}</h3>
                <p className="achiever-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        {activePhoto && (
          <div 
            className="lightbox-overlay"
            onClick={() => setActivePhoto(null)}
          >
            <div 
              className="lightbox-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setActivePhoto(null)}
                aria-label="Close photo"
              >
                <X size={24} />
              </button>
              <div className="lightbox-img-box">
                <img 
                  src={activePhoto.image} 
                  alt={activePhoto.title} 
                  className="lightbox-img" 
                />
              </div>
              <div className="lightbox-caption">
                <div className="lightbox-tag">{activePhoto.event} • {activePhoto.badge}</div>
                <h3>{activePhoto.title}</h3>
                <p>{activePhoto.desc}</p>
              </div>
            </div>
          </div>
        )}

        {/* Holistic Excellence Banner */}
        <div className="holistic-sports-banner">
          <div className="holistic-icon">
            <Globe2 size={32} />
          </div>
          <div>
            <h4>Total Personality & Physical Growth</h4>
            <p>
              At Masters PU College Hassan, academic discipline is matched with passionate athletic encouragement. Our students compete and win in state, national, and international tournaments while sustaining top academic percentiles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
