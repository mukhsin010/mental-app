import React from 'react';
import { Link } from "react-router-dom";
import "./TopNav.css"

function TopNav() {
    return (
        <div>
            <nav className="navbar">
                <div className="nav_icon">
                    <i className="fa fa-bars"></i>
                </div>
                <div className="navbar__left">
                    <Link to={'/'} href="#">Home</Link>
                    <Link to={'/Patient'}>Patient</Link>
                    <Link to={'/Doctor'} className="active_link">Doctor</Link>
                    <Link to={'/Message'}>Message</Link>
                    <Link to={'/Counseling'}>Counseling</Link>
                </div>
                <div className="navbar__right">
                    <a href="#">
                        <i className="material-icons">search</i>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default TopNav
