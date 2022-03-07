import React from "react";
import 'bulma/css/bulma.min.css';

export default function Navbar() {
    return(
        <nav className="navbar is-dark is-fixed-top">
        {/* <!-- my name --> */}
        <div className="navbar-brand">
            <p className="navbar-item">Jenny Keene - Portfolio</p>
        </div>
        {/* <!-- nav links --> */}
        <div className="navbar-menu">
            <div className="navbar-end">
                <a className="navbar-item" href="#about">
                    About Me
                </a>
                <a className="navbar-item" href="#projects">
                    Work/Projects
                </a>
                <a className="navbar-item" href="#contact">
                    <span>
                        <i className="fas fa-address-card"></i>
                    </span>
                    <span>&nbsp Contact Me </span>
                </a>
            </div>
        </div>
    </nav>
    );
};