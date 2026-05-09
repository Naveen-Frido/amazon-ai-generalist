import React, { useState, useEffect } from 'react';
import './NavBar.css';

export default function NavBar() {
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
        <div className="logo">
          <span className="logo-text">Amazon AI Generalist</span>
        </div>
        <nav className="nav-links">
          <a href="#workflow">Workflow</a>
          <a href="#qc">QC & Retouch</a>
          <a href="#final">Final Output</a>
        </nav>
      </div>
    </header>
  );
}
