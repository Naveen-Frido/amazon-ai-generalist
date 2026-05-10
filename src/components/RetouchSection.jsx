import React from 'react';
import './RetouchSection.css';
import { PenTool, GitMerge, Eraser, Brush } from 'lucide-react';

export default function RetouchSection() {
  return (
    <section id="step-5" className="retouch-section dark-section">
      <div className="container">
        <div className="label" style={{ color: '#C5A880' }}>5. MANUAL / AI FIX & RETOUCH</div>
        <h2 className="section-title">Manual & AI Retouching</h2>
        <p className="section-desc">
          After issue identification, the workflow moves into the refinement stage. Depending on the severity of the issue, we either regenerate structural problems or correct minor imperfections through AI-assisted editing and manual retouching.
        </p>

        <div className="retouch-layout">
          <div className="regeneration-logic">
            <div className="logic-card">
              <h3>Hybrid AI + Manual Workflow</h3>
              <p>This hybrid approach ensures higher production efficiency, reduced regeneration dependency, and premium-quality visual consistency.</p>
              
              <div className="logic-flow">
                <div className="logic-node">Issue Detection</div>
                <div className="logic-line"></div>
                <div className="logic-split">
                  <div className="logic-branch">
                    <span>Structural</span>
                    <strong>Major Regeneration</strong>
                  </div>
                  <div className="logic-branch">
                    <span>Localized</span>
                    <strong>Manual / AI Fix</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="retouch-matrix">
            <div className="matrix-row matrix-header">
              <div className="col-issue">Issue</div>
              <div className="col-action">Action Taken</div>
              <div className="col-reason">Focus</div>
            </div>
            
            <div className="matrix-row">
              <div className="col-issue">
                <GitMerge size={16} color="#E63946" />
                <span>Distorted geometry</span>
              </div>
              <div className="col-action">Generative Fill</div>
              <div className="col-reason">Compositional balancing and structural correction.</div>
            </div>
            
            <div className="matrix-row">
              <div className="col-issue">
                <Eraser size={16} color="#E63946" />
                <span>Floating objects</span>
              </div>
              <div className="col-action">Inpaint / Remove</div>
              <div className="col-reason">Artifact cleanup and edge correction.</div>
            </div>
            
            <div className="matrix-row">
              <div className="col-issue">
                <PenTool size={16} color="#E63946" />
                <span>Missing props</span>
              </div>
              <div className="col-action">Composite Object</div>
              <div className="col-reason">Adding necessary contextual elements to the scene.</div>
            </div>
            
            <div className="matrix-row">
              <div className="col-issue">
                <Brush size={16} color="#E63946" />
                <span>Unrealistic textures</span>
              </div>
              <div className="col-action">Texture Refinement</div>
              <div className="col-reason">Realism enhancement through lighting and texture adjustment.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
