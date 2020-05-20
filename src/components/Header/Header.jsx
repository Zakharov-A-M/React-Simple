import React from 'react';
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    Social Network
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/friends">My Friends</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/message">Message</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
