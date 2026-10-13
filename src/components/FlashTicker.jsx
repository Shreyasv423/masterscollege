import { Megaphone, ChevronRight } from 'lucide-react';

export default function FlashTicker({ onOpenApply }) {
  return (
    <div className="flash-ticker-wrapper">
      <div className="container flash-ticker-container">
        <div className="ticker-label">
          <Megaphone size={16} className="ticker-icon" />
          <span>LATEST NOTICE</span>
        </div>
        <div className="ticker-track">
          <div className="ticker-content">
            <span className="ticker-item">
              🎓 <strong>ADMISSIONS OPEN FOR 2026-27:</strong> Secure your seat in Hassan&apos;s leading Science Pre-University College.
            </span>
            <span className="ticker-bullet">•</span>
            <span className="ticker-item">
              ⭐ <strong>INTEGRATED COACHING:</strong> Daily day-to-day specialized preparation for NEET, JEE (Mains & Adv), K-CET, BITSAT & NDA.
            </span>
            <span className="ticker-bullet">•</span>
            <span className="ticker-item">
              🏆 <strong>STATE TOP 5 & DISTRICT TOP RANKERS:</strong> Consistent academic excellence since 2012.
            </span>
            <span className="ticker-bullet">•</span>
            <span className="ticker-item">
              📞 <strong>HELPLINE:</strong> 08172297164 / 8277785534 | Email: manjunathbs083@gmail.com
            </span>
          </div>
        </div>
        <button 
          type="button" 
          onClick={onOpenApply} 
          className="ticker-action-btn"
        >
          <span>Register Now</span>
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
