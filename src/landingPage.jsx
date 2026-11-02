import React from 'react';
import './landingCss.css';
import NavBar from './components/NavBar';
import ThemeToggle from './components/ThemeToggle';

export default function LandingPage() {
  return (
    
    <main className="main">
      <div className="Intro">
      <ThemeToggle />
      <h1>Welcome to the F1 Landing Page</h1>
      <h3>Ask F1 AI Agent</h3>
      </div>
      <div className="gridContainer">
      <div className="sideBar">
        <h3>Check out our Shop!</h3>
        <ul>
        <li className="sideBarItem1"><img src='/images/helmet.jpg' alt="Helemt" width="150" height="150" />
        <p>Full size Replica Helmets</p></li>
        <li className="sideBarItem2"><img src='/images/shirt.webp' alt="Shirt" width="150" height="150" />
        <p>Team Shirts</p></li>
        <li className="sideBarItem3"><img src='/images/images.jpg' alt="Hat" width="150" height="150" />
        <p>Team Hats</p></li> 
        </ul> 
      </div>
        <div className="gridItem1">
          <h2>Latest Race</h2>
          <img src='/images/race.webp' alt="Latest Race" width="300" height="200" />
          <p> It was a great race in Austin Texas as RedBull and Mercades fought it out for the win.</p>
        </div>
        <div className="gridItem2">
          <h2>News</h2>
          <img src='/images/news.webp' alt="News" width="300" height="200" />
          <p> Kimi Antoneli secures the drivers championship with amazing race in Austin</p>
          <p> Audi showing great form for new team in midfild</p>
          <p> How will the regulations change for 2027?</p>
        </div>
        <div className="gridItem3">
          <h2>Teams</h2>
          <img src='/images/teams.jpg' alt="Teams" width="300" height="200" />
        </div>


      </div>
    </main>
    
  );
}
