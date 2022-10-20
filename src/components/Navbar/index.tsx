import { NavLink } from 'react-router-dom';

import "./styles.css";

export function Navbar() {
    return (
        <nav>
            <div className="nav-logo">
                <img src="/logo.png" />
            </div>
            <div className="nav-links">
                <NavLink to='/'>MATCH</NavLink>
                <NavLink to='/register'>PROFILE REGISTER</NavLink>
            </div>
        </nav>
    )
}