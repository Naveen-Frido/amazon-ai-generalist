import React from 'react';
import './UpscalingSection.css';
import { ZoomIn, Zap, CheckCircle } from 'lucide-react';
import ToolStack from './ToolStack';

export default function UpscalingSection() {
  return (
    <section className="upscaling-section">
      <div className="container">
        <div className="label">7. UPSCALE &amp; FINAL DELIVERY</div>
        <ToolStack
          theme="light"
          tools={[
            { name: 'Crystal Upscaler' },
            { name: 'Clarity Upscaler' },
          ]}
          reason="More granular control over sharpness vs. softness than alternatives"
        />
        <h2 className="section-title">Upscaling &amp; Delivery</h2>
        <p className="section-desc">
          Once the image passes QC, the approved output enters the final upscaling pipeline. The focus is on improving texture fidelity, edge sharpness, and micro-details to prepare assets for high-resolution ecommerce usage.
        </p>

        <div className="upscaling-layout">
          <div className="upscaling-cards">
            <div className="card upscaling-card">
              <ZoomIn size={24} className="upscaling-icon" />
              <h3>Texture Fidelity</h3>
              <p>Enhancing fabric weaves and material responses that get softened during standard generation, preserving realistic lighting transitions.</p>
            </div>

            <div className="card upscaling-card">
              <Zap size={24} className="upscaling-icon" />
              <h3>Edge Sharpness</h3>
              <p>Applying selective sharpening to high-contrast edges and increasing micro-detail quality without introducing artificial textures.</p>
            </div>

            <div className="card upscaling-card">
              <CheckCircle size={24} className="upscaling-icon" />
              <h3>Post-Upscale QC</h3>
              <p>A final validation pass ensures no oversharpening occurs and product integrity remains fully intact for premium brand campaigns.</p>
            </div>
          </div>

          <div className="upscaling-workflow">
            <div className="flow-step-h">
              <h4>QC Approved Image</h4>
              <span>2048x1152px</span>
            </div>
            <div className="flow-arrow-h">→</div>
            <div className="flow-step-h active">
              <h4>AI Upscaling</h4>
              <span>Texture Recovery</span>
            </div>
            <div className="flow-arrow-h">→</div>
            <div className="flow-step-h">
              <h4>Post-Upscale QC</h4>
              <span>Detail Verification</span>
            </div>
            <div className="flow-arrow-h">→</div>
            <div className="flow-step-h success">
              <h4>Final Asset</h4>
              <span>Production-Ready 4K</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
