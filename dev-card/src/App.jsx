import Lanyard from './components/Lanyard';
import './styles.css';

export default function App() {
  return (
    <main className="stage">
      <div className="lanyard-wrap">
        <Lanyard
          frontImage="/character.png"
          backImage="/card-back.svg"
          strapImage="/band.svg"
          imageFit="cover"
          cardColor="#ffffff"
          orientation="portrait"
          finish="glossy"
          cornerRadius={0.3}
          size={0.6}
          anchor="center"
          strapLength={0.5}
          strapColor="#111111"
          strapWidth={0.65}
          metal="silver"
          gravity={1}
          damping={0.5}
          elasticity={0.5}
          breeze={0.5}
          interactive
          intro
        />
      </div>
      <div className="hint">DRAG THE CARD TO INTERACT</div>
      <nav className="quick-links" aria-label="Contact links">
        <a href="mailto:maheshmadhav620@gmail.com" aria-label="Email Mahesh Madhav">
          <span aria-hidden="true">✉</span> EMAIL
        </a>
        <a href="https://maheshmadhav.vercel.app/" target="_blank" rel="noreferrer" aria-label="Open Mahesh Madhav portfolio">
          <span aria-hidden="true">↗</span> PORTFOLIO
        </a>
      </nav>
    </main>
  );
}
