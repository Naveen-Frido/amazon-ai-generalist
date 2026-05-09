import React from 'react';
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
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
