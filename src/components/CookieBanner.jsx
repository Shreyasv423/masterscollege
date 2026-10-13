import { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, Check } from 'lucide-react';

export default function CookieBanner({ onOpenPrivacy }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('mpc_cookie_consent');
    if (!consent) {
      // Small delay before showing so it doesn't jump aggressively
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('mpc_cookie_consent', 'accepted_all');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('mpc_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-wrap">
      <div className="cookie-banner glass-card">
        <div className="cookie-content">
          <div className="cookie-icon-wrap">
            <Cookie size={24} className="cookie-icon" />
          </div>
          <div className="cookie-text">
            <h4>Cookie & Privacy Notice</h4>
            <p>
              We use essential cookies and local storage to optimize your experience, process online admission forms, and display student examination archives.
            </p>
          </div>
        </div>

        <div className="cookie-actions">
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="cookie-link-btn"
          >
            <ShieldCheck size={14} />
            <span>Privacy Policy</span>
          </button>
          <button
            type="button"
            onClick={handleEssentialOnly}
            className="btn btn-outline-primary cookie-btn-sm"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="btn btn-primary cookie-btn-sm"
          >
            <Check size={14} />
            <span>Accept All</span>
          </button>
        </div>
      </div>
    </div>
  );
}
