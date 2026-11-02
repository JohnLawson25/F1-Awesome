import '../navBar.css'; 
import { NavLink } from 'react-router';

export default function NavBar() {
    return(
        <div className="navContainer">
            <h2 className="navTitle">Formula Awesome!</h2>
            <img className="navItem" src='/images/F1logo.jpg' alt="F1 Logo" width='300px' height='200px' />
            <h4 className="navItem"><NavLink className="nav-link-item" to="/">Home</NavLink></h4>
            <h4 className="navItem"><NavLink className="nav-link-item" to="/News">News</NavLink></h4>
            <h4 className="navItem"><NavLink className="nav-link-item" to="/Teams">Teams</NavLink></h4>
            <h4 className="navItem"><NavLink className="nav-link-item" to="/Shop">Shop</NavLink></h4>
            <h4 className="navItem"><NavLink className="nav-link-item" to="/Register">Register</NavLink></h4>
            <h4 className="navItem"><NavLink className="nav-link-item" to="/Login">Login</NavLink></h4>
            <h4 className="navItem"><NavLink className="nav-link-item" to="/Contact">Contact</NavLink></h4>
        </div>
        
    )

};
