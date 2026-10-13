import { useState } from 'react';
import Navbar from './components/Navbar';
import FlashTicker from './components/FlashTicker';
import HeroSlider from './components/HeroSlider';
import AboutCollege from './components/AboutCollege';
import PrincipalMessage from './components/PrincipalMessage';
import CoursesOffered from './components/CoursesOffered';
import FacilitiesSection from './components/FacilitiesSection';
import AchieversWall from './components/AchieversWall';
import ResultsExplorer from './components/ResultsExplorer';
import CampusGallery from './components/CampusGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ApplyOnlineModal from './components/ApplyOnlineModal';
import PrivacyModal from './components/PrivacyModal';
import CookieBanner from './components/CookieBanner';
import './App.css';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handleOpenApply = () => {
    setIsApplyModalOpen(true);
  };

  const handleCloseApply = () => {
    setIsApplyModalOpen(false);
  };

  const handleOpenPrivacy = () => {
    setIsPrivacyModalOpen(true);
  };

  const handleClosePrivacy = () => {
    setIsPrivacyModalOpen(false);
  };

  return (
    <div className="site-wrapper">
      {/* Top Navigation */}
      <Navbar />

      {/* Marquee Notice Bar */}
      <FlashTicker onOpenApply={handleOpenApply} />

      {/* Main Website Sections */}
      <main id="main-content">
        <HeroSlider onOpenApply={handleOpenApply} />
        <AboutCollege />
        <PrincipalMessage onOpenApply={handleOpenApply} />
        <CoursesOffered onOpenApply={handleOpenApply} />
        <FacilitiesSection />
        <AchieversWall />
        <ResultsExplorer />
        <CampusGallery />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenApply={handleOpenApply} 
        onOpenPrivacy={handleOpenPrivacy} 
      />

      {/* Interactive Admission Form Modal */}
      <ApplyOnlineModal 
        isOpen={isApplyModalOpen} 
        onClose={handleCloseApply} 
      />

      {/* Privacy Policy & Terms Modal */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={handleClosePrivacy}
      />

      {/* Cookie Consent Banner */}
      <CookieBanner
        onOpenPrivacy={handleOpenPrivacy}
      />
    </div>
  );
}
