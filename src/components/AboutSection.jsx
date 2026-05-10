import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="label">ABOUT ME</div>
            <h2 className="section-title">AI Designer & Problem Solver</h2>

            <div className="about-text">
              <p>
                I’m an AI Designer focused on building scalable AI products across platforms. My work combines prompt engineering, AI-assisted quality analysis, retouching, and production-focused refinement to create photorealistic outputs while maintaining product accuracy and visual consistency. With my expertise in UI/UX Design, I solve problems with a user-centric approach.
              </p>
              <p>
                I’m a fast learner who enjoys adapting to evolving AI technologies, exploring new creative systems, and solving production-scale visual challenges through both technical and creative thinking.
              </p>
            </div>

            <div className="about-disclaimer">
              <div className="disclaimer-icon">ℹ️</div>
              <p>
                <strong>Portfolio Context:</strong> This portfolio showcases workflows and production pipelines developed using primarily non-paid/free-tier AI tools and models, which may have certain quality limitations compared to enterprise or paid-generation systems. Despite these constraints, the focus has been on maximizing output quality through structured prompting, quality validation, and iterative refinement workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
