import React from 'react';
import './news.css';
import ThemeToggle from './components/ThemeToggle.jsx';


export default function News() {
  return (
    
    <main className="main">
     <ThemeToggle />
      <h1>Welcome to the F1 Landing Page</h1>
      <h3>Ask F1 AI Agent</h3>
      <div className="newsGridContainer">
        <div className="newsGridItem1">
          <h2>Latest Race</h2>
          <img src='/images/MexicoGP.jpg' alt="Latest Race" width="300" height="200" />
          <p> It was a great race in Mexico City as RedBull
              and Ferrari fought it out for the win.</p>
        </div>
        <div className="newsGridItem2">
          <h2>Kimi Takes Championship</h2>
          <img src='/images/Kimi.avif' alt="News" width="300" height="200" />
          <p>Kimi Antonelli has taken the F1 Drivers Championship
             after a dominant season.</p>
        </div>
        <div className="newsGridItem3">
          <h2>Estebon Olcon Dropped by Haas</h2>
          <img src='/images/Haas.jpg' alt="News" width="300" height="200" />
          <p>Esteban Ocon has been dropped by Haas Formula 1 
             Team mid-weekend.</p>
        </div>
        <div className="newsGridItem4">
          <h2>Ferrari Addresses Incident in Mexico</h2>
          <img src='/images/FerrariLogo.webp' alt="News" width="300" height="200" />
          <p>Ferrari has addressed the incident that occured in 
             Mexico City during the opening laps of the race.</p>
        </div>
        
      </div>
    </main>
      )

    };
