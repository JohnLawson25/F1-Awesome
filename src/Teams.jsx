
import React from 'react';
import './Teams.css';
import NavBar from './components/NavBar';



const Teams = () => {
  return (
    
    <main className="main">
      <h1>Welcome to the F1 Landing Page</h1>
      <h3>Ask F1 AI Agent</h3>
      Teams Page
      <div className="TeamsGridContainer">
        <div className="gridItem1">
          <h1>Mercades</h1>
          <img src='/images/merclogo.jpeg' alt="Mercades F1" width='400px' height='400px' />
          <img src='/images/george-russell-mercedes.jpg' alt="George Russell" width='400px' height='400px' />
          <h2>George Russell</h2>
          <img src='/images/kimi.jpg' alt="Kimi Antonelli" width='400px' height='400px' />
          <h2>Kimi Antonelli</h2>
        </div>
        <div className="gridItem2">
          <h1>Ferrari</h1>
          <img src='/images/FerrariLogo.webp' alt="Ferrari F1 Logo" width='400px' height='400px' />
          <img src='/images/charles-leclerc-ferrari.webp' alt="Charles LeClerc" width='400px' height='400px'/>
          <h2>Charles Leclare</h2>
          <img src='/images/lewis-hamilton-ferrari-2.webp' alt="Louis Hamilton" width='400px' height='400px' />
          <h2>Louis Hamilton</h2>
        </div>
        <div className="gridItem3">
          <h1>RedBull</h1>
          <img src='/images/RBlogo.jpg' alt="RB Logo" width='400px' height='400px' />
          <img src='/images/max-RB.webp' alt="Max Vertrappen" width='400px' height='400px' />
          <h2>Max Verstrapin</h2>
          <img src='/images/isack-RB.jpg' alt="Isack Hadjar" width='400px' height='400px' />
          <h2>Issac Hadjar</h2>
        </div>
        <div className="gridItem4">
          <h1>MClaren</h1>
          <img src='/images/Mclarenlogo.avif' alt="Mclaren Logo" width='400px' height='400px' />
          <img src='/images/lando-norris-mclaren.webp' alt="Lando Noris" width='400px' height='400px' />
          <h2>Lando Norris</h2>
          <img src='/images/oscar-piastri-mclaren.jpg' alt="Kimi Antonelli" width='400px' height='400px' />
          <h2>Oscar Piastri</h2>
        </div>
        <div className="gridItem5">
          <h1>VCARB Racing Bulls</h1>
          <img src='/images/racingbullsLogo.jpg' alt="Visa Racing Bulls" width='400px' height='400px' />
          <h2>Liam Lawson</h2>
          <h2>Arvid Linblad</h2>
        </div>
        <div className="gridItem6">
          <h1>Alpine</h1>
          <h2>Pierre Gasley</h2>
          <h2>Franko Collopento</h2>
        </div>
        <div className="gridItem7">
          <h1>Williams</h1>
          <h2>Caarlos Sinz</h2>
          <h2>Bottas</h2>
        </div>
        <div className="gridItem8">
          <h1>Audi</h1>
          <h2>Nicko Holkenburg</h2>
          <h2>Bortoleto</h2>
        </div>
        <div className="gridItem9">
          <h1>Cadillac</h1>
          <h2>Sergio Perez</h2>
          <h2>Valeri Bottas</h2>
        </div>
      </div>
    </main>
      )
};

export default Teams;
