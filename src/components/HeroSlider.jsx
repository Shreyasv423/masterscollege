import { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  GraduationCap, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Trophy,
  Users,
  Compass
} from 'lucide-react';

const slides = [
  {
    image: '/college_assets/img/slider/s1.jpg',
    tag: 'Welcome to Masters PU College Hassan',
    title: 'Exceptional Education. Exceptional Value.',
    description: 'Personal Education, Extraordinary Success. Bridging the gap between Board examinations and premier competitive tests under one umbrella.',
    highlight: 'Admissions Open 2026-27'
  },
  {
    image: '/college_assets/img/slider/s2.jpg',
    tag: 'Integrated Competitive Coaching',
    title: 'Dedicated Mentorship for NEET & JEE',
    description: 'Day-to-day integrated curriculum tailored for IIT-JEE, NEET, K-CET, BITSAT and NDA alongside comprehensive Karnataka PU Board syllabus.',
    highlight: 'Proven Top 5 State Ranks'
  },
  {
    image: '/college_assets/img/slider/s3.jpg',
    tag: 'World-Class Infrastructure',
    title: 'Modern Laboratories & Campus Facilities',
    description: 'State-of-the-art Science Laboratories, extensive Library, high-speed Computer Center, and safe, caring hostel environment.',
    highlight: 'Home Away From Home'
  },
  {
    image: '/college_assets/img/slider/s4.jpg',
    tag: 'Faculty Excellence',
    title: 'Headed by Renowned Subject Masters',
    description: 'Optional subjects PCMB steered by veteran founders and senior lecturers with over two decades of coaching excellence.',
    highlight: '1-on-1 Academic Support'
  },
  {
    image: '/college_assets/img/slider/s5.jpg',
    tag: 'Co-Curricular Triumphs',
    title: 'Champions in Sports & Athletics',
    description: 'District, State & International sports champions in Football, Netball, Athletics, and Karate. Holistic development for every student.',
    highlight: 'State & International Champions'
  },
  {
    image: '/college_assets/img/slider/s6.jpg',
    tag: 'Unmatched Track Record',
    title: 'Consistently Hassan&apos;s #1 PU College',
    description: 'Every year our students secure prestigious engineering, medical, and agricultural college allotments across India.',
    highlight: '400+ Premier Allotments'
  }
];

const highlights = [
  {
    icon: Trophy,
    number: 'Top 5',
    label: 'State Rank Position',
    sub: 'Persistently secured across Karnataka'
  },
  {
    icon: Award,
    number: 'District Top 5',
    label: 'Consistent Every Year',
    sub: 'Leading Hassan district since 2012'
  },
  {
    icon: GraduationCap,
    number: '400+',
    label: 'Doctor & Engineer Allotments',
    sub: 'Reputed institutes across India'
  },
  {
    icon: Users,
    number: '100%',
    label: 'Science Specialization',
    sub: 'Pure PCMB & PCMCs Focus'
  }
];

export default function HeroSlider({ onOpenApply }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section 
      id="home" 
      className="hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      <div className="hero-slider-container">
        {slides.map((slide, idx) => (
          <div
            key={slide.title}
            className={`hero-slide ${idx === current ? 'active' : ''}`}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(10, 25, 47, 0.94) 0%, rgba(10, 25, 47, 0.8) 50%, rgba(10, 25, 47, 0.5) 100%), url("${slide.image}")`,
            }}
          >
            {/* Visual fallback if image loading fails */}
            <div className="hero-slide-overlay" />
          </div>
        ))}
      </div>

      {/* Hero Content Overlay */}
      <div className="container hero-content-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-pill">{slides[current].highlight}</span>
            <span className="hero-badge-text">Masters Education Trust (Regd. 2012-13)</span>
          </div>

          <h1 className="hero-title">
            {slides[current].title}
          </h1>

          <p className="hero-description">
            {slides[current].description}
          </p>

          <div className="hero-key-features">
            <div className="feature-item">
              <CheckCircle2 size={18} className="feature-icon" />
              <span>PCMB & PCMCs Combinations</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 size={18} className="feature-icon" />
              <span>Integrated NEET / JEE / KCET</span>
            </div>
            <div className="feature-item">
              <CheckCircle2 size={18} className="feature-icon" />
              <span>Experienced Founder H.O.Ds</span>
            </div>
          </div>

          <div className="hero-cta-group">
            <button
              type="button"
              onClick={onOpenApply}
              className="btn btn-gold btn-lg"
              id="hero-apply-btn"
            >
              <GraduationCap size={20} />
              <span>Apply Online 2026-27</span>
            </button>

            <a href="#courses" className="btn btn-outline btn-lg">
              <BookOpen size={20} />
              <span>Explore Courses</span>
            </a>

            <a href="#results" className="btn btn-outline btn-lg desktop-only">
              <Compass size={20} />
              <span>View Ranks & Results</span>
            </a>
          </div>
        </div>

        {/* Floating Quick Stat Cards */}
        <div className="hero-stats-grid">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="stat-card">
                <div className="stat-icon-wrap">
                  <Icon size={24} className="stat-icon" />
                </div>
                <div className="stat-info">
                  <span className="stat-number">{item.number}</span>
                  <span className="stat-label">{item.label}</span>
                  <span className="stat-sub">{item.sub}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slider Controls */}
      <div className="slider-controls">
        <button
          type="button"
          onClick={prevSlide}
          className="slider-nav-btn prev"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="slider-dots">
          {slides.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              type="button"
              onClick={() => setCurrent(idx)}
              className={`slider-dot ${idx === current ? 'active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={nextSlide}
          className="slider-nav-btn next"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
