import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import RequirementSection from './components/RequirementSection';
import MspWorkflow from './components/MspWorkflow';
import MspPreviewSection from './components/MspPreviewSection';
import AiOutputSection from './components/AiOutputSection';
import QcSection from './components/QcSection';
import RetouchSection from './components/RetouchSection';
import FinalOutputSection from './components/FinalOutputSection';
import UpscalingSection from './components/UpscalingSection';
import WorkSamples from './components/WorkSamples';
import KeyProjects from './components/KeyProjects';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="app">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <ScrollToTop />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <div className="section-divider"></div>
            <RequirementSection />
            <div id="workflow">
              <MspWorkflow />
            </div>
            <MspPreviewSection />
            <AiOutputSection />
            <div id="qc">
              <QcSection />
            </div>
            <RetouchSection />
            <div id="final">
              <FinalOutputSection />
            </div>
            <UpscalingSection />
          </>
        )}

        {currentPage === 'experience' && (
          <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
            <KeyProjects />
            <TechStack />
          </div>
        )}

        {currentPage === 'samples' && (
          <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
            <WorkSamples />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
