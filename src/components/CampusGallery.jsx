import { useState } from 'react';
import { 
  Camera, 
  Video, 
  Maximize2, 
  X, 
  Play, 
  Sparkles 
} from 'lucide-react';

const galleryPhotos = [
  {
    title: 'Main Academic Campus & Building',
    category: 'Campus',
    src: '/college_assets/img/slider/s1.jpg',
    caption: 'Modern academic architecture located in tranquil Vivekanagara, Hassan.'
  },
  {
    title: 'Advanced Science Laboratory Workstations',
    category: 'Laboratories',
    src: '/college_assets/Pictures/Facilities/laboratory.jpg',
    caption: 'Hands-on practical equipment for Physics, Chemistry, and Biology syllabus.'
  },
  {
    title: 'Extensive Library & Reading Stacks',
    category: 'Academics',
    src: '/college_assets/Pictures/Facilities/lib4.jpg',
    caption: 'Rich collection of scientific journals, competitive question banks, and books.'
  },
  {
    title: 'State Level Football Championship Glory',
    category: 'Sports',
    src: '/college_assets/Pictures/FOOT BALL STATE LEVEL.jpg',
    caption: 'Masters PU College Hassan soccer team celebrating tournament triumph.'
  },
  {
    title: 'International Karate Championship Dubai',
    category: 'Sports',
    src: '/college_assets/Pictures/KARATE INTERNATION DUBAI.jpg',
    caption: 'Global martial arts recognition represented by Masters PU College Hassan.'
  },
  {
    title: 'Interactive Audio-Visual Conference Hall',
    category: 'Campus',
    src: '/college_assets/Pictures/Facilities/conference.jpg',
    caption: 'Air-conditioned seminar and guest speaker presentation hall.'
  },
  {
    title: 'District Athletics Track & Field Winners',
    category: 'Sports',
    src: '/college_assets/Pictures/TALUK ATHLETICS.jpg',
    caption: 'Athletes clinching gold and silver finishes in track events.'
  },
  {
    title: 'Hostel Living — Home Away From Home',
    category: 'Hostel',
    src: '/college_assets/Pictures/Facilities/hostel.jpg',
    caption: 'Hygienic living and caring warden supervision for outstation students.'
  },
  {
    title: 'Fleet of College Transport Buses',
    category: 'Campus',
    src: '/college_assets/Pictures/Facilities/transport.jpg',
    caption: 'Connecting students across Hassan city with maximum safety.'
  }
];

export default function CampusGallery() {
  const [activeTab, setActiveTab] = useState('photos');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const categories = ['all', 'Campus', 'Laboratories', 'Sports', 'Academics', 'Hostel'];

  const filteredPhotos = filterCategory === 'all'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category === filterCategory);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrap">
          <span className="section-badge gold">
            <Camera size={14} />
            CAMPUS MEMORIES & LIFE
          </span>
          <h2 className="section-heading">Photo & Video Gallery</h2>
          <p className="section-subheading">
            A visual journey through vibrant academic life, experiential laboratory discovery, sports champions, and campus celebrations at Masters PU College Hassan.
          </p>
        </div>

        {/* Tab Switcher: Photos vs Videos */}
        <div className="gallery-main-nav">
          <button
            type="button"
            className={`gallery-nav-btn ${activeTab === 'photos' ? 'active' : ''}`}
            onClick={() => setActiveTab('photos')}
          >
            <Camera size={17} />
            <span>Photo Gallery ({galleryPhotos.length})</span>
          </button>
          <button
            type="button"
            className={`gallery-nav-btn ${activeTab === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            <Video size={17} />
            <span>Campus Video Tour</span>
          </button>
        </div>

        {/* Photos Tab */}
        {activeTab === 'photos' && (
          <div>
            {/* Category Pills */}
            <div className="gallery-category-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`cat-pill-btn ${filterCategory === cat ? 'active' : ''}`}
                  onClick={() => setFilterCategory(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {/* Photos Grid */}
            <div className="gallery-grid">
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.title}
                  className="gallery-item-card glass-card"
                  onClick={() => setSelectedImage(photo)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setSelectedImage(photo);
                  }}
                  aria-label={`View photo of ${photo.title}`}
                >
                  <div className="gallery-img-wrap">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="gallery-img"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = '/college_assets/img/slider/s1.jpg';
                      }}
                    />
                    <div className="gallery-overlay">
                      <Maximize2 size={24} />
                      <span>View Photo</span>
                    </div>
                    <span className="gallery-cat-badge">{photo.category}</span>
                  </div>
                  <div className="gallery-caption-box">
                    <h4>{photo.title}</h4>
                    <p>{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <div className="video-gallery-wrap">
            <div className="video-player-box glass-card">
              {!isPlayingVideo ? (
                <div 
                  className="video-poster-container"
                  style={{ backgroundImage: `url('/college_assets/img/slider/s2.jpg')` }}
                >
                  <div className="video-poster-overlay">
                    <button
                      type="button"
                      className="video-play-btn animate-pulse-subtle"
                      onClick={() => setIsPlayingVideo(true)}
                      aria-label="Play video walkthrough"
                    >
                      <Play size={36} fill="#ffffff" color="#ffffff" />
                    </button>
                    <h3>Masters PU College Hassan Experience & Campus Tour</h3>
                    <p>Take an inspiring visual tour of our classrooms, science laboratories, hostel, and student life in Hassan.</p>
                  </div>
                </div>
              ) : (
                <div className="video-frame-container">
                  <iframe 
                    width="100%" 
                    height="500" 
                    src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1" 
                    title="Masters PU College Hassan Video Tour" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                  <button
                    type="button"
                    className="video-stop-btn"
                    onClick={() => setIsPlayingVideo(false)}
                  >
                    Close Video Tour
                  </button>
                </div>
              )}
            </div>

            <div className="video-highlights-row">
              <div className="video-feat-card glass-card">
                <Sparkles size={20} className="feat-gold" />
                <h4>Daily Academic Routine</h4>
                <p>Concept lectures followed by immediate supervised application sessions.</p>
              </div>
              <div className="video-feat-card glass-card">
                <Sparkles size={20} className="feat-gold" />
                <h4>Interactive Experiments</h4>
                <p>Real laboratory discovery sparking scientific curiosity and precision.</p>
              </div>
              <div className="video-feat-card glass-card">
                <Sparkles size={20} className="feat-gold" />
                <h4>Sports & Holistic Life</h4>
                <p>Active physical education, outdoor games, and leadership activities.</p>
              </div>
            </div>
          </div>
        )}

        {/* Modal Lightbox */}
        {selectedImage && (
          <div
            className="lightbox-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="lightbox-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="lightbox-close-btn"
                onClick={() => setSelectedImage(null)}
                aria-label="Close dialog"
              >
                <X size={24} />
              </button>
              <div className="lightbox-img-box">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="lightbox-img"
                />
              </div>
              <div className="lightbox-caption">
                <div className="lightbox-tag">{selectedImage.category}</div>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
