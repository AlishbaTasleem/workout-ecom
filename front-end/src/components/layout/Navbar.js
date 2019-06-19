import React, { Component } from 'react';
import { SVGLogo } from '../../assets/SVGs/WebPack.svg';

export default class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <!-- Add class 'navbar-transparent' --> */}
                <nav className="navbar navbar-expand-lg navbar-dark" role="navigation">

                {/* <!-- ADD CUSTOM BRAND LOGO HERE --> */}
                    <a className="navbar-brand" href="index.html">
                        <img src={SVGLogo} width="50" height="50" className="d-inline-block align-top" alt="WorkOut" />
                        {/* <span className="navbar-brand-text">WorkOut</span> */}
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fas fa-bars"></i>
                        </span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active ">
                                <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#mainContent-P3">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#mainContent-P2">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact-us.html">Contact Us</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign Up</a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </React.Fragment>
        )
    }
}
