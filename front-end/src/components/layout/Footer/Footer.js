import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="footer">
                    <div className="logos">
                        <p className="logoIntro">Follow us on any of our socials and keep up to date with our success</p>
                        <Link to="https://www.facebook.com"><i className="fab fa-facebook"></i></Link>
                        <Link to="https://www.instagram.com"><i className="fab fa-instagram"></i></Link>
                        <Link to="https://www.pinterest.com"><i className="fab fa-pinterest"></i></Link>
                        <Link to="https://www.dribbble.com"><i className="fab fa-dribbble"></i></Link>
                        <Link to="https://www.youtbe.com"><i className="fab fa-youtube"></i></Link>
                        <small> Copyright 2019.</small>
                        <small>Designed and Developed by Alishba and Hasan.</small>
                    </div>
                </div>
            </footer>
        </div>
    )
}
