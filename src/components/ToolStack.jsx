import React from 'react';
import './ToolStack.css';

const LOGO = {
  'Claude Opus':      '/logos/claude.png',
  'ChatGPT':          '/logos/openai.png',
  'GPT-5':            '/logos/openai.png',
  'Gemini 2.5 Pro':   '/logos/gemini.png',
  'Google Imagen 4':  '/logos/google.png',
  'Nano Banana 2':    '/logos/gemini.png',
  'Crystal Upscaler': '/logos/gemini.png',
  'Clarity Upscaler': '/logos/gemini.png',
};

export default function ToolStack({ tools = [], reason = '', theme = 'light' }) {
  return (
    <div className={`tool-stack tool-stack--${theme}`}>
      <div className="tool-stack__icons-row">
        {tools.map((tool, i) => {
          const content = (
            <>
              <img
                src={LOGO[tool.name] ?? '/logos/gemini.png'}
                alt={tool.name}
                className="tool-stack__logo"
              />
              <span className="tool-stack__name">{tool.name}</span>
            </>
          );

          return tool.url ? (
            <a 
              key={i} 
              href={tool.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="tool-stack__item" 
              style={{ textDecoration: 'none', transition: 'transform 0.2s ease' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {content}
            </a>
          ) : (
            <div key={i} className="tool-stack__item">
              {content}
            </div>
          );
        })}
      </div>
      {reason && <span className="tool-stack__tooltip">{reason}</span>}
    </div>
  );
}
