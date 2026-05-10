import React from 'react';
import './KeyProjects.css';
import { Layers, ShieldCheck, Home, Maximize, AlertTriangle } from 'lucide-react';

export default function KeyProjects() {
  const projects = [
    {
      icon: <Maximize size={24} />,
      title: 'Automated Multi-Room Generation',
      desc: 'Engineered an end-to-end VLM pipeline. A single reference image autonomously generates 16-30 distinct room types, perfectly preserving architectural lines, interior style, and material fidelity.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Copyright-Safe Replication',
      desc: 'Reconstructed proprietary real-world imagery using AI to achieve 80%+ aesthetic similarity, completely eliminating copyright liability while maintaining brand standards.'
    },
    {
      icon: <AlertTriangle size={24} />,
      title: 'MLS AI Compliance System',
      desc: 'Built an AI-driven moderation engine for Multiple Listing Services (MLS) that automatically detects and removes visual compliance violations from real estate imagery.'
    },
    {
      icon: <Layers size={24} />,
      title: 'Reference-Based Object Addition',
      desc: 'Seamlessly integrated specific furniture and decor into existing AI scenes, precisely matching lighting, perspective, and material reflections.'
    },
    {
      icon: <Home size={24} />,
      title: 'Single Property Generation',
      desc: 'Generated cohesive, ultra-high-fidelity real estate and property imagery tailored for premium ecommerce and luxury branding.'
    }
  ];

  return (
    <section className="key-projects-section">
      <div className="container">
        <div className="label">EXPERIENCE &amp; CAPABILITIES</div>
        <h2 className="section-title">Key Projects &amp; Innovations</h2>
        <p className="section-desc">
          A track record of building scalable AI products and solving complex visual challenges for enterprise e-commerce and real estate platforms.
        </p>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className={`project-card ${idx === 0 ? 'project-card--featured' : ''}`}>
              <div className="project-icon">{proj.icon}</div>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
