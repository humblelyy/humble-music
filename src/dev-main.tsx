import React from 'react';
import { createRoot } from 'react-dom/client';
import Lanyard from './components/Lanyard.jsx';
import './components/Lanyard.css';
import './dev-lanyard.css';

function DeveloperPage() {
  return <main className="dev-page">
    <header className="dev-header">
      <a className="dev-back" href="/" aria-label="Back to Humble Music"><span className="dev-back-arrow">←</span><span>BACK TO HUMBLE MUSIC</span></a>
      <div className="dev-brand-lockup">
        <img src="/assets/logo.jpeg" alt="HUMBLE MUSIC logo" />
        <div className="dev-brand-text"><span>HUMBLE MUSIC</span><small>DEVELOPER</small></div>
      </div>
    </header>
    <div className="dev-label"><span className="dev-label-line"></span><span>INTERACTIVE IDENTITY</span><span className="dev-label-line"></span></div>
    <div className="dev-card-stage"><div className="lanyard-wrap">
      <Lanyard frontImage="/lanyard/character.png" backImage="/lanyard/card-back.svg" strapImage="/lanyard/band.svg" imageFit="cover" cardColor="#fff" orientation="portrait" finish="glossy" cornerRadius={0.3} size={0.6} anchor="center" strapLength={0.5} strapColor="#111" strapWidth={0.65} metal="silver" gravity={1} damping={0.5} elasticity={0.5} breeze={0.5} interactive intro />
    </div></div>
    <div className="dev-bottom"><span>DRAG THE CARD TO INTERACT</span></div>
  </main>
}

createRoot(document.getElementById('dev-root')!).render(<DeveloperPage />);
