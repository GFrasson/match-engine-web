import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <nav>
                <div className="nav-logo">
                <img src="/logo.png" />
                </div>
                <div className="nav-links">
                <a href="" target="_blank">
                    <NavLink to='/match'>MATCH</NavLink>
                </a>
                <a href="" target="_blank">
                    <NavLink to='/register'>PROFILE REGISTER</NavLink>
                </a>
                </div>
            </nav>
    )
}