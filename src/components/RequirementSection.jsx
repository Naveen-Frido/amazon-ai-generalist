import React from 'react';
import './RequirementSection.css';
import { Target, Maximize } from 'lucide-react';

export default function RequirementSection() {
  return (
    <section className="requirement-section">
      <div className="container">
        <div className="req-top-row">
          <div className="req-text-content">
            <div className="label">1. REQUIREMENT GATHERING</div>
            <h2 className="section-title">Understanding the Requirement</h2>
            <p className="section-desc" style={{ marginBottom: 0 }}>
              Analyzing the creative and production requirements of the project. For this project, the objective was to <strong className="req-highlight">transform basic mattress cutouts into photorealistic luxury editorial bedroom scenes</strong>.
            </p>

            {/* Wide looping doodle arrow pointing right toward the mattress */}
            <svg className="curved-arrow" viewBox="0 0 420 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path
                d="M 10 50 C 40 10, 60 90, 100 55 C 140 20, 120 80, 160 55 C 200 30, 200 80, 260 55 C 320 30, 360 70, 400 45"
                stroke="#112240"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              {/* Arrowhead */}
              <path
                d="M 387 30 L 403 46 L 383 58"
                stroke="#112240"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="req-mattress-direct">
            <a
              href="https://www.ikea.com/in/en/p/vatnestroem-pocket-sprung-mattress-extra-firm-natural-70478480/"
              target="_blank"
              rel="noopener noreferrer"
              className="mattress-link"
              title="View on IKEA — VATNESTROEM Pocket Sprung Mattress"
            >
              <img src="/mattress-ikea.png" alt="IKEA VATNESTROEM Pocket Sprung Mattress" />
              <span className="mattress-link-label">View on IKEA ↗</span>
            </a>
          </div>
        </div>

        <div className="req-cards">
          <div className="card">
            <div className="req-icon"><Target size={24} /></div>
            <h3>Visual Objectives</h3>
            <ul>
              <li>Luxury editorial bedroom scenes</li>
              <li>Photorealistic environments</li>
              <li>Premium hospitality-style visuals</li>
              <li>Ecommerce-ready compositions</li>
            </ul>
          </div>

          <div className="card">
            <div className="req-icon"><Maximize size={24} /></div>
            <h3>Preservation Goals</h3>
            <ul>
              <li>Accurate mattress proportions</li>
              <li>Realistic lighting behavior</li>
              <li>Believable materials</li>
              <li>Clean luxury composition</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
