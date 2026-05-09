import React from 'react';
import './AiOutputSection.css';
import { Terminal, Settings2, Image as ImageIcon } from 'lucide-react';
import ToolStack from './ToolStack';

export default function AiOutputSection() {
  return (
    <section className="ai-output-section">
      <div className="container">
        <div className="label">3. ACTION PROMPT &rarr; FIRST AI OUTPUT</div>
        <ToolStack
          theme="light"
          tools={[
            { name: 'Gemini 2.5 Pro' },
            { name: 'GPT-5' },
          ]}
          reason="Best VLMs for understanding visual-language alignment"
        />
        <h2 className="section-title">Generating the Foundation</h2>
        <p className="section-desc">
          The MSP dynamically generates structured Action Prompts tailored to the specific image requirement. The output generated at this stage serves as the foundational production image.
        </p>

        <div className="prompt-container card dark-card">
          <div className="prompt-header">
            <div className="prompt-header-left">
              <Terminal size={16} />
              <span>Example Action Prompt</span>
            </div>
            <div className="prompt-sources">
              <span className="prompt-sources-label">Generated using</span>
              <div className="prompt-source-item">
                <img src="/mattress-ikea.png" alt="Reference Mattress" className="source-thumb" />
                <span>Reference Image</span>
              </div>
              <div className="prompt-source-plus">+</div>
              <div className="prompt-source-item prompt-source-msp">
                <span className="msp-icon-badge">MSP</span>
                <span>Master System Prompt</span>
              </div>
            </div>
          </div>
          <div className="prompt-body">
            <p>"Transform the provided mattress cutout into a luxury lifestyle bedroom scene for premium ecommerce advertising. Preserve the mattress exactly as provided — no redesign, warping, thickness changes, or altered stitching. Create a photorealistic boutique hotel style interior with warm natural daylight, soft architectural shadows, premium linen bedding, brushed oak or walnut finishes, matte plaster walls, soft wool rug, and refined Scandinavian/Japandi styling. The mattress must remain the hero product, centered and proportionally accurate on a realistic bed frame. Use professional architectural photography aesthetics with realistic material response, subtle depth of field, luxury hospitality mood, calm neutral palette, and editorial-grade composition suitable for a premium mattress brand campaign. Avoid CGI appearance, clutter, oversaturation, distorted geometry, floating objects, fake HDR, or AI artifacts."</p>
          </div>
        </div>

        <div className="output-showcase" style={{ marginTop: '32px' }}>
          <div className="title-tool-row" style={{ marginBottom: '12px' }}>
            <h3 className="tool-stack-image-label">Image Generation</h3>
            <ToolStack
              theme="light"
              tools={[
                { name: 'Nano Banana 2' },
                { name: 'Google Imagen 4' },
              ]}
              reason="Nano Banana 2 for reference-guided; Imagen 4 for text-to-image"
            />
          </div>
          <div className="img-container large-frame">
            <img src="/ai-output-bedroom.jpg" alt="First AI Output — Luxury Mattress Bedroom Scene" />
          </div>

          <div className="metadata-cards">
            <div className="card meta-card">
              <Settings2 size={20} className="meta-icon" />
              <div className="meta-info">
                <span>Pipeline Stage</span>
                <strong>First-Pass Output</strong>
              </div>
            </div>

            <div className="card meta-card">
              <ImageIcon size={20} className="meta-icon" />
              <div className="meta-info">
                <span>Product Focus</span>
                <strong>Mattress Preserved</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
