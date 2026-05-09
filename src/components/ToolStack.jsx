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
        {tools.map((tool, i) => (
          <div key={i} className="tool-stack__item">
            <img
              src={LOGO[tool.name] ?? '/logos/gemini.png'}
              alt={tool.name}
              className="tool-stack__logo"
            />
            <span className="tool-stack__name">{tool.name}</span>
          </div>
        ))}
      </div>
      {reason && <span className="tool-stack__tooltip">{reason}</span>}
    </div>
  );
}
