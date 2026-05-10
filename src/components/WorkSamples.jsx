import React, { useState } from 'react';
import './WorkSamples.css';

const Slider = ({ before, after, title, description }) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  };

  const handleTouchMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  };

  return (
    <div className="sample-card">
      <div
        className="sample-slider"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        <img className="sample-img-after" src={after} alt={`After: ${title}`} />
        <div className="sample-img-before-wrapper" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
          <img className="sample-img-before" src={before} alt={`Before: ${title}`} />
        </div>
        <div className="sample-handle" style={{ left: `${sliderPos}%` }}>
          <div className="sample-handle-line"></div>
          <div className="sample-handle-btn">
          </div>
        </div>
        <div className="sample-label-badge badge-before">BEFORE</div>
        <div className="sample-label-badge badge-after">AFTER</div>
      </div>
      <div className="sample-content">
        <h3 style={{ marginBottom: 0 }}>{title}</h3>
      </div>
    </div>
  );
};

export default function WorkSamples() {
  const samples = [
    {
      before: '/virtual-renovation-before.jpg',
      after: '/virtual-renovation-after.jpg',
      title: 'Virtual Renovation',
      description: 'Complete transformation of raw spaces into photorealistic luxury interiors, maintaining exact architectural dimensions.'
    },
    {
      before: '/occupied-to-vacant-before.jpg',
      after: '/occupied-to-vacant-after.jpg',
      title: 'Decluttering ',
      description: 'Removing existing furniture and clutter while perfectly reconstructing the background plates and lighting.'
    },
    {
      before: '/vacant-to-staged-before.webp',
      after: '/vacant-to-staged-after.jpg',
      title: 'Vacant to Staged',
      description: 'Injecting high-end furniture and decor into empty rooms, calibrated to real-world material responses.'
    },
    {
      before: '/commercial-staging-before.jpg',
      after: '/commercial-staging-after.jpg',
      title: 'Commercial Staging',
      description: 'Transforming commercial or retail spaces into highly desirable, premium brand environments.'
    },
    {
      before: '/Re-design-before.jpg',
      after: '/Re-design-after.jpg',
      title: 'Space Redesign',
      description: 'A complete overhaul of interior layout, colors, and textures to meet modern premium aesthetic guidelines.'
    },
    {
      before: '/window-pull-before.png',
      after: '/window-pull-after.png',
      title: 'Lighting & Window Pull',
      description: 'Recovering blown-out window highlights and balancing harsh shadows for perfect ambient exposure.'
    },
    {
      before: '/after4.webp',
      after: '/before4.webp',
      title: 'Furniture Swap',
      description: 'Swapping furniture in the existing space , without changing any other elements.'
    },
    {
      before: '/before1_1.webp',
      after: '/after1_1.webp',
      title: 'Space Enhanement ',
      description: 'Enhancing the physical space with adding elemnts, while preserving the back and foreground.'
    },
    {
      before: '/before2_1.webp',
      after: '/after2_1.webp',
      title: 'Atmospheric Grading',
      description: 'Applying a cohesive color grade to unify the environment, creating an inviting and warm lifestyle mood.'
    },
    {
      before: '/before3_1.webp',
      after: '/after3_1.webp',
      title: 'Object Removal',
      description: 'Balancing directional light and localized shadows to match global scene illumination accurately.'
    },
    {
      before: '/after2.webp',
      after: '/before2.webp',
      title: 'Style Synchronization',
      description: 'Aligning newly generated decor with the existing interior design vernacular and color palettes.'
    },
    {
      before: '/before3.webp',
      after: '/after3.webp',
      title: 'Lawn & Curb Enhancement',
      description: 'Upscaling intricate textures like fabric weaves, rug patterns, and wood grains for ultra-HD quality.'
    },
    {
      before: '/after3_2.webp',
      after: '/before3_2.webp',
      title: 'Localized swap or editing',
      description: 'Enhancing spatial depth through careful adjustments to focal blur, contrast, and depth mapping.'
    }
  ];

  return (
    <section id="work-samples" className="work-samples-section">
      <div className="container">
        <div className="label">PORTFOLIO SHOWCASE</div>
        <h2 className="section-title">Before &amp; After Samples</h2>
        <p className="section-desc">
          A selection of real-world examples demonstrating the capability to transform raw inputs into premium, ecommerce-ready visual assets through AI and manual retouching.
        </p>

        <div className="samples-grid">
          {samples.map((sample, idx) => (
            <Slider key={idx} {...sample} />
          ))}
        </div>
      </div>
    </section>
  );
}
