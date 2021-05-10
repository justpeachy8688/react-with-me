import React from 'react'
import { NavLink } from 'react-router-dom';
import image1 from '../img/profilepic.jpg';

function Navbar() {
    return (
        <div className="NavBar">
            <div className="profile">
                <img src={image1} width="150" height="150" />
            </div>
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" exact activeClassName="active">
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
