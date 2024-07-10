import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <ul className="nav-list">
            <div className="left-nav">
                <li><Link to="/">Home</Link></li>
            </div>
            <div className="right-nav">
                <li><Link to="/About">About Me</Link></li>
                <li><Link to="/Project">Projects</Link></li>
                <li><Link to="/Resume">Resume</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </div>
            </ul>
        </nav>
    );
};

export default NavBar;