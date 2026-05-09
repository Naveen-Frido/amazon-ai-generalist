import React from 'react';
import './Footer.css';
import { Globe, Link as LinkIcon, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Amazon AI Content Generalist</h3>
            <p>Portfolio Case Study</p>
          </div>
          
          <div className="footer-links">
            <a href="#" aria-label="Website"><Globe size={20} /></a>
            <a href="#" aria-label="Portfolio"><LinkIcon size={20} /></a>
            <a href="#" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Case Study Presentation. All images are AI generated for demonstration purposes.</p>
        </div>
      </div>
    </footer>
  );
}
