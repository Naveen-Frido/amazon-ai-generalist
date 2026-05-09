import React from 'react';
import './MultiAngleSection.css';
import { Layers, Maximize, Cuboid } from 'lucide-react';

export default function MultiAngleSection() {
  return (
    <section className="multi-angle-section">
      <div className="container">
        <div className="label">MULTI-ANGLE CONSISTENCY</div>
        <h2 className="section-title">Spatial Identity & Continuity</h2>
        <p className="section-desc">
          Maintaining absolute architectural and lighting consistency across multiple camera angles within the same generated room environment to build consumer trust.
        </p>

        <div className="multi-angle-layout">
          <div className="main-angle img-container">
            <img src="/multi.png" alt="Multiple angles of the same living room" />
          </div>
          
          <div className="consistency-metrics">
            <div className="metric-card">
              <div className="metric-icon"><Layers size={24} /></div>
              <div className="metric-info">
                <h4>Lighting Accuracy</h4>
                <p>Directional light sources remain locked across all rotation axes.</p>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon"><Cuboid size={24} /></div>
              <div className="metric-info">
                <h4>Spatial Continuity</h4>
                <p>Furniture placement and room architecture persist between shots.</p>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-icon"><Maximize size={24} /></div>
              <div className="metric-info">
                <h4>Scale Preservation</h4>
                <p>Product dimensions remain accurate relative to background elements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
