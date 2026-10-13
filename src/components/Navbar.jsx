import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Leadership', href: '#management' },
    { label: 'Courses', href: '#courses' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Wall of Fame', href: '#achievers' },
    { label: 'Exam Results', href: '#results' },
    { label: 'Campus Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="navbar-wrapper">
      {/* Top Header Bar */}
      <div className="topbar">
        <div className="container topbar-container">
          <div className="topbar-left">
            <span className="topbar-item">
              <MapPin size={13} className="topbar-icon" />
              <span>Vivekanagara, Hassan, Karnataka 573201</span>
            </span>
            <span className="topbar-item desktop-only">
              <Clock size={13} className="topbar-icon" />
              <span>Opening Hours: 10:00 AM – 5:00 PM</span>
            </span>
          </div>

          <div className="topbar-right">
            <a href="tel:08172297164" className="topbar-item topbar-link">
              <Phone size={13} className="topbar-icon" />
              <span>08172297164 / 8277785534</span>
            </a>
            <a href="mailto:manjunathbs083@gmail.com" className="topbar-item topbar-link desktop-only">
              <Mail size={13} className="topbar-icon" />
              <span>manjunathbs083@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className={`main-navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo Only - Made Bigger, No Side Text */}
          <a href="#home" className="brand-logo" aria-label="Masters PU College Hassan">
            <img 
              src="/college_assets/img/logo/logo2.png" 
              alt="Masters PU College Hassan" 
              className="college-logo-img"
              width="240"
              height="66"
            />
          </a>

          {/* Minimalist Desktop Navigation Links */}
          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            type="button" 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-panel">
          <div className="mobile-drawer-content">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} className="mobile-chevron" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
