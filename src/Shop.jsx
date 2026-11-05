import React from 'react';
import NavBar from './components/NavBar.jsx';

function Shop() {

    return (
        <div>
            <ThemeToggle />
            <h1>Welcome to the Merchandise Shop</h1>
            <div>
                <p>Product1</p>
                <img src='/images/helmet.jpg' alt="Replica Helmet" />
            </div>
            <div>
                <p>Product2</p>
                <img src='/images/shirt.webp' alt="Team Shirts" />
            </div>
            <div>
                <p>Product3</p>
                <img src='/images/images.jpg' alt="Team Hats" />
            </div>
        </div>
    );
};

export default Shop;
