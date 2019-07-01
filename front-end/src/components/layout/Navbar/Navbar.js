import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';

import './Navbar.css';
import Contact from '../../Contact/Contact';
import Landing from '../Landing/Landing';
import Notfound from '../../NotFound/NotFound'

var SVGLogo = require('../../../assets/SVGs/WebPack.svg');

class Navbar extends Component {
    render() {
        return (
            <Router>

            <React.Fragment>

                {/* <!-- Add class 'navbar-transparent' --> */}
                <nav className="navbar navbar-expand-lg navbar-transparent" role="navigation">

                    <NavLink activeClassName="navbar-brand" to="/">
                        <img src={SVGLogo} width="50" height="50" className="d-inline-block align-top" alt="WorkOut" />
                        {/* <span className="navbar-brand-text">WorkOut</span> */}
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="fas fa-bars"></i>
                        </span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active ">
                                <NavLink activeClassName="nav-link"  to="/">Home<span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="nav-link" to="/">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="nav-link" to="/">Testimonials</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink activeClassName="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="nav-link" to="/register">Sign Up</NavLink>
                            </li>
                        </ul>
                    </div>

                </nav>
                </React.Fragment>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/contact" component={Contact} />
                    <Route component={Notfound} />
                </Switch>
                </Router>
                
        )
    }
}

export default Navbar;