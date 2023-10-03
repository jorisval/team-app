import { useState } from "react";
import Logo from "../../assets/images/footer-logo.png";
import ThankYouPopup from "../pages/Thank-you-newsletter";
import { BASE_URL } from '../../config';

function Footer() {
    const [showThankYouPopup, setShowThankYouPopup] = useState(false);
    async function handleSubmit(event) {
        event.preventDefault();
      
        const formData = new FormData(event.target);
        const searchParams = new URLSearchParams();
      
        for (const [key, value] of formData.entries()) {
          searchParams.append(key, value);
        }
    
        try {
            const response = await fetch(`${BASE_URL}/api/newsletter`, {
                method: "POST",
                body: searchParams,
                headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                },
            });
      
            const data = await response.json();
            console.log(data);

            // Reset the form
            event.target.reset();

            // Show thank you popup
            setShowThankYouPopup(true);

        } catch (error) {
            console.error("Error:", error);
        }
    }

    const handleCloseThankYouPopup = () => {
        setShowThankYouPopup(false);
      };

    return (
        <div className="footer">
            {showThankYouPopup && (
                <ThankYouPopup onClose={handleCloseThankYouPopup} />
            )}
            <div className="footer__part-1">
                <div className="media">
                    <img src={Logo} alt=""/>
                    <ul>
                        <li><a href="#b"><i className="bi bi-instagram"></i> Instagram</a></li>
                        <li><a href="#b"><i className="bi bi-facebook"></i> Facebook</a></li>
                        <li><a href="#b"><i className="bi bi-twitter"></i> Twitter</a></li>
                    </ul>
                </div>
                <div className="products">
                    <h3>Products</h3>
                    <ul>
                        <li><a href="#b"><i className="bi"></i>Desk Booking</a></li>
                        <li><a href="#b"><i className="bi"></i>Visitor Management</a></li>
                        <li><a href="#b"><i className="bi"></i>Modern Ticketing</a></li>
                        <li><a href="#b"><i className="bi"></i>Room Scheduling</a></li>
                        <li><a href="#b"><i className="bi"></i>Facilities Service </a></li>
                        <li><a href="#b"><i className="bi"></i>Marketplace</a></li>
                    </ul>
                </div>
                <div className="about">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#b"><i className="bi"></i>Resources</a></li>
                        <li><a href="#b"><i className="bi"></i>Our Story</a></li>
                        <li><a href="#b"><i className="bi"></i>Our Team</a></li>
                        <li><a href="#b"><i className="bi"></i>Careers</a></li>
                        <li><a href="#b"><i className="bi"></i>Security</a></li>
                    </ul>
                </div>
                <div className="support">
                    <h3>Contact & Support</h3>
                    <ul>
                        <li><a href="#b"><i className="bi"></i>1 (800) 751-4512</a></li>
                        <li><a href="#b"><i className="bi"></i>support@teamapp.com</a></li>
                        <br/>
                        <li><a href="#b"><i className="bi"></i>Privacy Policy</a></li>
                        <li><a href="#b"><i className="bi"></i>Terms of Service</a></li>
                    </ul>
                </div>
                <div className="newsletter">
                    <h3>Newsleter</h3>
                    <p>Sign up for our newsletter to stay up to date with what's new!</p>
                    <form onSubmit={handleSubmit}>
                        <input type="email" id="email" name="email" placeholder="Email"/>
                        <input type="submit" value="Sign up"/>
                    </form>
                </div>
            </div>
            <div className="footer__part-2">
                <p>© 2023 Teamapp. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;