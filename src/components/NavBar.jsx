import '../navBar.css'; 
import { NavLink } from 'react-router';

export default function NavBar() {
    return(
       <div className="navContainer">
    <h2 className="navTitle">Formula Awesome!</h2>

    <img
        className="navItem"
        src="/images/F1logo.jpg"
        alt="F1 Logo"
        width="300px"
        height="200px"
    />

    <div className="navLinks">
        <NavLink className="nav-link-item" to="/">Home</NavLink>
        <NavLink className="nav-link-item" to="/News">News</NavLink>
        <NavLink className="nav-link-item" to="/Teams">Teams</NavLink>
        <NavLink className="nav-link-item" to="/Shop">Shop</NavLink>
        <NavLink className="nav-link-item" to="/Contact">Contact</NavLink>
    </div>
</div>
        
    )

};
