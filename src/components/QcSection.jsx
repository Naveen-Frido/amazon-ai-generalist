import React from 'react';
import './QcSection.css';
import { AlertCircle, Search, Eye, Filter } from 'lucide-react';
import ToolStack from './ToolStack';

export default function QcSection() {
  return (
    <section className="qc-section">
      <div className="container">
        <div className="label" style={{ color: '#E63946' }}>4. ARTIFACT / ISSUE DETECTION</div>
        <ToolStack
          theme="light"
          tools={[
            { name: 'Gemini 2.5 Pro' },
            { name: 'GPT-5' },
          ]}
          reason="Multimodal analysis for detecting visual anomalies at scale"
        />
        <h2 className="section-title">Artifact Detection Using AI</h2>
        <p className="section-desc">
          Once the first AI output is generated, a dedicated AI-assisted Quality Control (QC) workflow is initiated. A specialized QC Prompt is generated to evaluate realism, lighting, proportions, and artifacts.
        </p>

        <div className="qc-layout">
          <div className="qc-image-panel">
            <div className="img-container qc-frame">
              <img src="/qc-mattress.jpg" alt="QC Annotated Mattress Scene Review" />
            </div>

            <div className="qc-workflow">
              <span>First AI Output</span>
              <span className="arrow">→</span>
              <span>QC Prompt</span>
              <span className="arrow">→</span>
              <span className="rework">Artifact Detection</span>
            </div>
          </div>

          <div className="qc-issues-panel">
            <div className="issue-card">
              <div className="issue-header">
                <AlertCircle color="#E63946" size={20} />
                <h4>Distorted geometry</h4>
              </div>
              <p>The scale of the artwork above the bed does not match real-world proportions, creating spatial dissonance.</p>
            </div>

            <div className="issue-card">
              <div className="issue-header">
                <Search color="#E63946" size={20} />
                <h4>Warped product proportions</h4>
              </div>
              <p>The draped blanket obscures key product details and hardware on the bed, violating ecommerce guidelines.</p>
            </div>

            <div className="issue-card">
              <div className="issue-header">
                <Eye color="#E63946" size={20} />
                <h4>Compositional imbalance</h4>
              </div>
              <p>The composition imbalance, due to side table only on the right side of the bed makes left part empty.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
