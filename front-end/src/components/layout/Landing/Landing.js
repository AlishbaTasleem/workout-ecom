import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import styles from './Landing.css';

// Image Imports
var VA = require('../../../assets/SVGs/VA.svg');
var MobileApp = require('../../../assets/SVGs/MobileApp.svg');
var Website = require('../../../assets/SVGs/Website.svg');
var Accounts = require('../../../assets/SVGs/Accounts.svg');
var BG_LAPTOP = require('../../../assets/MEDIA/LAPTOP.jpg');

var statSectionStyles = {
    width: '18rem',
    margin: '0 auto'
}

var bgStyling = {
	background: 'url(' + BG_LAPTOP + ')',
	height: '100vh',
	paddingBottom: '50px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

export default class Landing extends Component {
    render() {
        return (
            <div>
                {/* Removed the class, 'parallax-effect' */}
                <div style={bgStyling}>
                    <Navbar />

                    <section id="mainContent-P1">
                        <div className="jumbotron jumbotron-fluid">
                            <div className="mainHeader mt-3">
                                <div className="row">
                                    <div className="col-8 ml-5">
                                        <div className="col-6">
                                            <h1 className="display-4">Welcome to WorkOut.</h1>
                                            <p className="lead">Start your freelancing career with us!</p>
                                            <p className="lead">If you're an employer, our experienced professionals are here to assist
                                                you!</p>
                                            <button type="button" className="btn btn-light">I'm an employer</button>
                                            <button type="button" className="btn btn-light">I'm a freelancer</button>
                                        </div>
                                    </div>
                            
                                    <div className="col">
                                        <div className="socialBar d-flex flex-column align-items-end">
                                            <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                                            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                            <a href="https://www.pinterest.com"><i className="fab fa-pinterest"></i></a>
                                            <a href="https://www.dribbble.com"><i className="fab fa-dribbble"></i></a>
                                            <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </section>
                </div>

                <section id="mainContent-P2">
                    <div className="currentStatSection">
                        <div className="statHeader">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <h4 className="text-center introduction">Hi there, <br />
                                            <span className="em-introduction"> We are the leading freelance platform, WorkOut.</span>
                                        </h4>
                                        <hr />

                                        <p className="lead mt-1 text-center">Still unsure if our platform is the right fit for you? Let
                                            us show you the statistics.</p>
                                        <p className="lead mt-1 text-center">The following stats are for the year 2018. We've been a
                                            great help to millions of people and have successfully connected potential employers
                                            with the right candidates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="statsSection">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <div className="card mt-5" style={statSectionStyles}>
                                            <div className="card-body">
                                                <h5 className="card-title text-center"><span>10,343,497</span>
                                                </h5>
                                                <p className="card-text text-center">Freelancers Hired</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="card mt-5" style={statSectionStyles}>
                                            <div className="card-body">
                                                <h5 className="card-title text-center"><span>19,343,343</span></h5>
                                                <p className="card-text text-center">Jobs Completed</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm">
                                        <div className="card mt-5" style={statSectionStyles}>
                                            <div className="card-body">
                                                <h5 className="card-title text-center"><span>1,924,550</span>
                                                </h5>
                                                <p className="card-text text-center">Number of Freelancers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="mainContent-P3">
                    <div className="servicesSection">
                        <div className="serviceHeader">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <h4 className="text-center introduction">WHAT DO WE DO<br />
                                            <span className="em-introduction">We’ve got everything you need to launch and grow your
                                                business
                                            </span>
                                        </h4>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">

                            {/* <!-- ROW 1 --> */}
                            <div className="row">
                                {/* <!-- SERVICE 1 --> */}
                                <div className="col-sm">
                                    <div className="text-left mb-2 text-uppercase">Mobile Application Development</div>
                                    <div className="row">
                                        <div className="col">
                                            <img src={MobileApp} width="100" height="100"
                                                className="d-inline-block mb-3" alt="WorkOut" />
                                        </div>
                                        <div className="col-8">
                                            Mobile Application Development is on the rise. Get it done by professional
                                            developers through our platform!
                                            <br /><br />
                                            Hire a developer now.
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- SERVICE 2 --> */}
                                <div className="col">
                                    <div className="text-left mb-2 text-uppercase">Website Development</div>
                                    <div className="row">
                                        <div className="col">
                                            <img src={Website} width="100" height="100" className="d-inline-block"
                                                alt="WorkOut" />
                                        </div>
                                        <div className="col-8 mt-2">
                                            Web Application Development is on the rise. Get it done by professional
                                            developers through our platform!
                                            <br /><br />
                                            Hire a developer now.
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- END OF ROW 1 --> */}

                            {/* <!-- ROW 2 --> */}
                            <div className="row mt-5">
                                {/* <!-- SERVICE 3 --> */}
                                <div className="col">
                                    <div className="text-left mb-4 text-uppercase">Accounting and Finance</div>
                                    <div className="row">
                                        <div className="col">
                                            <img src={Accounts} width="100" height="100" className="d-inline-block"
                                                alt="WorkOut" />
                                        </div>
                                        <div className="col-8 mt-2">
                                            Relieve yourself of all the bookkeeping and accounting hassles and let our professional
                                            accountants handle your workload effectively.
                                            <br /><br />
                                            Hire a developer now.
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- SERVICE 4 --> */}
                                <div className="col">
                                    <div className="text-left mb-4 text-uppercase">Virtual Assistant</div>
                                    <div className="row">
                                        <div className="col">
                                            <img src={VA} width="100" height="100" className="d-inline-block"
                                                alt="WorkOut" />
                                        </div>
                                        <div className="col-8 mt-2">
                                            Are you in search of someone who can take over your entire administrative dealings and
                                            make it work for you? We've got experts!
                                            <br /><br />
                                            Hire an assistant now.
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- END OF ROW 2 --> */}

                        </div>

                    </div>
                </section>
            </div>
        )
    }
}
