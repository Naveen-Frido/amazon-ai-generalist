import React from 'react';
import './Hero.css';
import { Sparkles, SlidersHorizontal, Image as ImageIcon, CheckCircle, Wand2, MonitorUp, Search, ChevronRight } from 'lucide-react';

const steps = [
  { id: 1, icon: <SlidersHorizontal size={20} />, label: 'Requirement Gathering' },
  { id: 2, icon: <Sparkles size={20} />, label: 'Building MSP' },
  { id: 3, icon: <ImageIcon size={20} />, label: 'Action Prompt' },
  { id: 4, icon: <Search size={20} />, label: 'Quality Analysis' },
  { id: 5, icon: <Wand2 size={20} />, label: 'Fix & Retouch' },
  { id: 6, icon: <CheckCircle size={20} />, label: 'Quality Control' },
  { id: 7, icon: <MonitorUp size={20} />, label: 'Upscale & Delivery' }
];

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-metadata animate-fade-in">
          <span>PORTFOLIO</span>
          <span className="dot">•</span>
          <span>AI CONTENT GENERALIST</span>
        </div>

        <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Scalable AI Workflow
        </h1>

        <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
          A structured pipeline combining AI automation, prompt engineering, quality control, and manual refinement to create photorealistic, premium ecommerce visuals.
        </p>

        <div className="hero-workflow-container animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {/* Iteration Loops (SVG) */}
          <div className="workflow-loops-wrapper">
            <svg className="workflow-loops" preserveAspectRatio="none">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-red)" />
                </marker>
              </defs>
              {/* Loop from QC (Step 6) to Fix & Retouch (Step 5) */}
              <path className="loop-path" d="M 80% 100% C 75% 20%, 65% 20%, 60% 100%" />
              {/* Loop from Quality Analysis (Step 4) to Action Prompt (Step 3) */}
              <path className="loop-path" d="M 52% 100% C 47% 20%, 37% 20%, 32% 100%" />
            </svg>
          </div>

          <div className="hero-workflow">
            <div className="workflow-track"></div>
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="workflow-step"
                onClick={() => {
                  const el = document.getElementById(`step-${step.id}`);
                  if (el) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = el.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                style={{ cursor: 'pointer' }}
              >
                <div className="workflow-icon-wrapper">
                  {step.icon}
                </div>
                <div className="workflow-label">{step.label}</div>

                {idx < steps.length - 1 && (
                  <div className="workflow-arrow">
                    <ChevronRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
