import React from 'react';
import './TechStack.css';
import { Cpu, Code2, Paintbrush, Database, Sparkles, Box } from 'lucide-react';

export default function TechStack() {
  return (
    <section className="tech-stack-section">
      <div className="container">
        <div className="tech-layout">
          
          <div className="tech-column">
            <div className="label">AI ARCHITECTURES</div>
            <h2 className="section-title">Foundation Models</h2>
            
            <div className="tech-list">
              <div className="tech-item highlight-item">
                <div className="tech-icon"><Database size={20} /></div>
                <div className="tech-details">
                  <h3>Alibaba ACE+</h3>
                  <p>Core contributor to dataset creation and model fine-tuning. Provided high-level visual analysis, aesthetic judgment, and domain expertise for training.</p>
                </div>
              </div>
              
              <div className="tech-item">
                <div className="tech-icon"><Sparkles size={20} /></div>
                <div className="tech-details">
                  <h3>Generative Vision Models</h3>
                  <p>SDXL, Flux Kontext, Eigen Banana, and Seedance's Seed Edit for high-fidelity image synthesis.</p>
                </div>
              </div>

              <div className="tech-item">
                <div className="tech-icon"><Box size={20} /></div>
                <div className="tech-details">
                  <h3>Segmentation &amp; Analysis</h3>
                  <p>Meta SAM (Segment Anything) for precise object masking and extraction.</p>
                </div>
              </div>

              <div className="tech-item">
                <div className="tech-icon"><Cpu size={20} /></div>
                <div className="tech-details">
                  <h3>LLMs &amp; VLMs</h3>
                  <p>OpenAI GPT architectures, Google Gemini Series, and Qwen for advanced prompt reasoning and workflow automation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tech-column">
            <div className="label">TOOLING &amp; CAPABILITIES</div>
            <h2 className="section-title">Technical Background</h2>
            
            <div className="tech-list">
              <div className="tech-item highlight-item">
                <div className="tech-icon"><Code2 size={20} /></div>
                <div className="tech-details">
                  <h3>End-to-End App Development</h3>
                  <p>Architecting and deploying full-stack web applications accelerated by advanced AI agent workflows including Antigravity, Cursor AI, and Claude.</p>
                </div>
              </div>

              <div className="tech-item">
                <div className="tech-icon"><Paintbrush size={20} /></div>
                <div className="tech-details">
                  <h3>Design &amp; Post-Production</h3>
                  <p>Deep expertise in Figma for rapid UI/UX prototyping and layout design, supported by foundational knowledge of Adobe Photoshop for essential image adjustments and asset preparation.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
