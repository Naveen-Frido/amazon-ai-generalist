import React, { useState, useEffect } from 'react';
import './NavBar.css';

export default function NavBar({ currentPage = 'home', setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo" onClick={() => setCurrentPage?.('home')} style={{ cursor: 'pointer' }}>
          <span className="logo-text">Amazon AI Generalist</span>
        </div>
        
        {setCurrentPage && (
          <nav className="nav-tabs">
            <button 
              className={`nav-tab-btn ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => setCurrentPage('home')}
            >
              Workflow
            </button>
            <button 
              className={`nav-tab-btn ${currentPage === 'experience' ? 'active' : ''}`}
              onClick={() => setCurrentPage('experience')}
            >
              Experience
            </button>
            <button 
              className={`nav-tab-btn ${currentPage === 'samples' ? 'active' : ''}`}
              onClick={() => setCurrentPage('samples')}
            >
              Work samples
            </button>
          </nav>
        )}

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontWeight: 600, color: 'var(--accent-navy)', fontSize: '1rem' }}>Naveen Rajendran</span>
          <a 
            href="https://www.linkedin.com/in/naveen-rajendran-94ab74192/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', color: '#0A66C2', transition: 'transform 0.2s ease' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            aria-label="LinkedIn Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
