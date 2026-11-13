import React from 'react';
import ThemeToggle from './components/ThemeToggle.jsx';

function Shop() {

    return (
        <div>
            <ThemeToggle />
            <h1>Welcome to the Merchandise Shop</h1>
            <div>
                <h2>Replica Helmets</h2>
                <img src='/images/helmet.jpg' alt="Replica Helmet" />
                <p>Miniature replica helmets of your favorite F1 drivers.</p>
                <p>$35.00</p>
            </div>
            <div>
                <h2>Team Shirts</h2>
                <img src='/images/shirt.webp' alt="Team Shirts" />
                <p>Official team shirts for all your favorite F1 teams.</p>
                <p>$50.00</p>
            </div>
            <div>
                <h2>Team Hats</h2>
                <img src='/images/hat.webp' alt="Team Hats" />
                <p>Official team hats for all your favorite F1 teams.</p>
                <p>$25.00</p>
            </div>
        </div>
    );
};

export default Shop;
