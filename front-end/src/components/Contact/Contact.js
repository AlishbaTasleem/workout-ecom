import React, { Component } from 'react';
import '../../App.css';
import './Contact.css';
import Navbar from '../layout/Navbar/Navbar';

var BG_LAPTOP = require('../../assets/MEDIA/LAPTOP.jpg');

var bgStyling = {
	background: 'url(' + BG_LAPTOP + ')',
	height: '100vh',
	paddingBottom: '50px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

export default class Contact extends Component {
    render() {
        return (
            <>
                <div style={bgStyling}>     
                    <Navbar />        
                <section id="mainContent-P1">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="mainHeader">
                            <div className="container">
                                <h1 className="display-4">Contact Us</h1>
                                <p className="lead"></p>
                                <p className="lead">You're not going to hit a ridiculously long phone menu when you call us.<br />
                                    <br />Your
                                    email isn't going to the inbox abyss, never to be seen or heard from again.<br /><br />
                                    At WorkOut, we provide the exceptional service we'd want to experience ourselves!</p>
                            </div>
                        </div>
                    </div>
                </section>
        
            </div>
        
            <div className="parentContactus">
                <div className="childContactus">
                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to
                        contact us directly. Our team will come back to you within
                        a matter of hours to help you.</p>
        
                    <div className="row">
        
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
        
                                <div className="row">
        
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                        <label for="name" className="">Full Name</label>

                                                <input type="text" id="name" name="name" className="form-control" />
                                        </div>
                                    </div>
        
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                        <label for="email" className="">Email Address</label>
                                        <input type="text" id="email" name="email" className="form-control" />
                                        </div>
                                    </div>
        
                                </div>
        
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">

                                        <label for="subject" className="">Subject</label>
                                                <input type="text" id="subject" name="subject" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
        
                                    <div className="col-md-12">
        
                                        <div className="md-form">

                                        <label for="message">Your Message</label>
                                                <textarea type="text" id="message" name="message" rows="2"
                                                className="form-control md-textarea"></textarea>
                                        </div>
        
                                    </div>
                                </div>
        
                            </form>
        
                            <div className="text-center text-md-left">
                                <button type="button" className="btn btn-light">Send</button>
                            </div>
                            <div className="status"></div>
                        </div>
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><i className="fas fa-map-marker-alt fa-2x editIcon"></i>
                                    <p className="editLabel">NED University</p>
                                </li>
        
                                <li><i className="fas fa-phone mt-4 fa-2x editIcon"></i>
                                    <p className="editLabel">+92 111-111-111</p>
                                </li>
        
                                <li><i className="fas fa-envelope mt-4 fa-2x editIcon"></i>
                                    <p className="editLabel">support@workout.com</p>
                                </li>
                            </ul>
                        </div>
        
                    </div>
        
                </div>
            </div>
            </>
            )
                
            }
        }
