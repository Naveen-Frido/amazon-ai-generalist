import React, { useState } from 'react';
import './FinalOutputSection.css';
import { Award, TrendingUp, ShieldCheck, ShoppingCart } from 'lucide-react';

export default function FinalOutputSection() {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  };

  return (
    <section className="final-output-section">
      <div className="container">
        <div className="label">6. QUALITY CONTROL (QC)</div>
        <h2 className="section-title">Final QC Validation</h2>
        <p className="section-desc">
          Before final delivery, every image undergoes a final QC validation process. The objective is to ensure the image achieves editorial-grade visual quality and luxury brand presentation standards.
        </p>

        <div className="final-showcase">
          <div 
            className="comparison-slider" 
            onMouseMove={handleMouseMove}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const touch = e.touches[0];
              const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
              const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
              setSliderPos(percent);
            }}
          >
            <img className="img-after" src="/final.png" alt="Final Retouched Image" />
            <div className="img-before-wrapper" style={{ width: `${sliderPos}%` }}>
              <img className="img-before" src="/hero.png" alt="Raw AI Output Image" />
            </div>
            <div className="slider-handle" style={{ left: `${sliderPos}%` }}>
              <div className="slider-line"></div>
              <div className="slider-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </div>
            <div className="slider-label label-before">RAW AI</div>
            <div className="slider-label label-after">FINAL QC</div>
          </div>

          <div className="achievement-cards">
            <div className="card achievement-card">
              <ShieldCheck size={24} className="achievement-icon" />
              <h3>Product Accuracy</h3>
              <p>Mattress integrity is preserved</p>
            </div>
            <div className="card achievement-card">
              <TrendingUp size={24} className="achievement-icon" />
              <h3>Visual Realism</h3>
              <p>Lighting & material behavior</p>
            </div>
            <div className="card achievement-card">
              <Award size={24} className="achievement-icon" />
              <h3>Composition Quality</h3>
              <p>Platform-ready consistency</p>
            </div>
            <div className="card achievement-card">
              <ShoppingCart size={24} className="achievement-icon" />
              <h3>Ecommerce Ready</h3>
              <p>Luxury brand standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
