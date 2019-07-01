import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.css';

var SVGLogo = require('../../../assets/SVGs/WebPack.svg');

export default class Navbar extends Component {
    render() {
        return (

            <React.Fragment>
                {/* <!-- Add class 'navbar-transparent' --> */}
                <nav className="navbar navbar-expand-lg navbar-transparent" role="navigation">

                {/* <!-- ADD CUSTOM BRAND LOGO HERE --> */}
                    <Link activeClassName="navbar-brand" to="/">
                        <img src={SVGLogo} width="50" height="50" className="d-inline-block align-top" alt="WorkOut" />
                        {/* <span className="navbar-brand-text">WorkOut</span> */}
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fas fa-bars"></i>
                        </span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active ">
                                <Link activeClassName="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClassName="nav-link" to=":mainContent-P3">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClassName="nav-link" to="/#mainContent-P2">Testimonials</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClassName="nav-link" to="contact-us.html">Contact Us</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link activeClassName="nav-link" to="#">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClassName="nav-link" to="#">Sign Up</Link>
                            </li>
                        </ul>
                    </div>

                </nav>
            </React.Fragment>
        )
    }
}
