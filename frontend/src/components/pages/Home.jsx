import { useContext, useEffect, useState } from "react";
import { HeaderContext } from "../utils/context";
import Hero from "../../assets/images/team-hero-image.png";
import ThankYouPopup from "../pages/Thank-you-subscribe";
//import BeneFirst from "../../assets/images/benefits1-large.png";
//import BeneSecond from "../../assets/images/benefits2-large.png";
//import PostImage1 from "../../assets/images/nordic.png";
//import PostImage2 from "../../assets/images/kruzo.png";
//import PostImage3 from "../../assets/images/ergonomic.png";
//import { Link } from "react-router-dom";
import { HomeContainer } from "../styles/Home";


function Home() {
    const [showThankYouPopup, setShowThankYouPopup] = useState(false);
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage('home');
    }, [setActivePage]);

    async function handleSubmit(event) {
        event.preventDefault();
      
        const formData = new FormData(event.target);
        const searchParams = new URLSearchParams();
      
        for (const [key, value] of formData.entries()) {
          searchParams.append(key, value);
        }
    
        try {
            const response = await fetch("http://localhost:3000/api/newsletter", {
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

    return(
        <HomeContainer className="home">
            <div className="hero">
                <div className="hero__text">
                    <h1>The Ultimate To-Do List Application</h1>
                    <p className="subtitle">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                    <div className="cta-row">
                        <form onSubmit={handleSubmit}>
                            <input type="email" id="email" name="email" placeholder="Email"/>
                            <input type="submit" value="Sign up"/>
                        </form>
                        {showThankYouPopup && (
                            <ThankYouPopup onClose={handleCloseThankYouPopup} />
                        )}
                    </div>
                </div>
                <div className="hero__image">
                    <img src={Hero} alt=""/>
                </div>
                <div className="hero__overlay"></div>
            </div>
            <div className="steps-section">
                <h2>Plan, Organize, and Execute Your Projects.</h2>
                <div className="steps">
                    <div className="step">
                        <div className="order">1</div>
                        <p>Brainstorm in Mind Maps</p>
                    </div>
                    <div className="step">
                        <div className="order">2</div>
                        <p>Manage in Project Boards</p>
                    </div>
                    <div className="step">
                        <div className="order">3</div>
                        <p>Organize in To-Do Lists</p>
                    </div>
                </div>
            </div>
            {/*
            <CatalogView id="catalogView"/>
            <div className="benefits-one">
                <div className="benefits-one__image">
                    <img src={BeneFirst} alt=""/>
                </div>
                <div className="benefits-one__text">
                    <h2>blog Choose Us</h2>
                    <p>Recherche de produits, recherche de marchés inexploités, copywriting, boutique shopify, vidéos pour Facebook ads et Tiktok ads etc... Nous nous occupons de tout pour vous.
                    Notre objectif est de vous décharger de toutes ces tâches pour vous laisser vous occuper de l'essentiel et ainsi faire exploser votre business. </p>
                    <div className="four-benefits">
                        <div className="four-benefits__first">
                            <span className="bi bi-stopwatch"></span>
                            <h4>Fast & Free Shiping</h4>
                            <p>Recherche produits, recherche de marchés inexploités, copywriting, boutique shopify</p>
                        </div>
                        <div className="four-benefits__second">
                            <span className="bi bi-bag-fill"></span>
                            <h4>Easy to shop</h4>
                            <p>Recherche produits, recherche de marchés inexploités, copywriting, boutique shopify</p>
                        </div>
                        <div className="four-benefits__third">
                            <span className="bi bi-wechat"></span>
                            <h4>24/7 Support</h4>
                            <p>Recherche produits, recherche de marchés inexploités, copywriting, boutique shopify</p>
                        </div>
                        <div className="four-benefits__fourth">
                            <span className="bi bi-arrow-repeat"></span>
                            <h4>Hassle Free Returns</h4>
                            <p>Recherche produits, recherche de marchés inexploités, copywriting, boutique shopify</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="benefits-two">
                <div className="benefits-two__image">
                    <img src={BeneSecond} alt=""/>
                </div>
                <div className="benefits-two__text">
                    <h2>We Help You Make Modern Interior Design</h2>
                    <p>Recherche de produits, recherche de marchés inexploités, copywriting, boutique shopify, 
                        vidéos pour Facebook ads et Tiktok ads etc... Nous nous occupons de tout pour vous.</p>
                    <div className="four-benefits">
                        <div className="four-benefits__first">
                            <span className="bi bi-check2-circle"></span>
                            <p>Recherche produits, recherche de marchés</p>
                        </div>
                        <div className="four-benefits__second">
                            <span className="bi bi-check2-circle"></span>
                            <p>Recherche produits, recherche de marchés</p>
                        </div>
                        <div className="four-benefits__third">
                            <span className="bi bi-check2-circle"></span>
                            <p>Recherche produits, recherche de marchés</p>
                        </div>
                        <div className="four-benefits__fourth">
                            <span className="bi bi-check2-circle"></span>
                            <p>Recherche produits, recherche de marchés</p>
                        </div>
                    </div>
                    <Link to='/catalog' className="cta-button">Explore</Link>
                </div>
            </div>
            <div className="blog">
                <div className="blog__posts">
                    <div className="blog__post">
                        <div className="image">
                            <img src={PostImage1} alt=""/>
                        </div>
                        <div>
                        <h4>Nordic Chair</h4>
                        <p>Nous maîtrisons les meilleurs process et les meilleures stratégies des tops du domaine</p>
                            <Link to='/blog'>Read more</Link>
                        </div>
                    </div>
                    <div className="blog__post">
                    <div className="image">
                            <img src={PostImage2} alt=""/>
                        </div>
                        <div>
                            <h4>Kurozo Aero Chair</h4>
                        <p>Nous maîtrisons les meilleurs process et les meilleures stratégies des tops du domaine</p>
                            <Link to='/blog'>Read more</Link>
                        </div>
                    </div>
                    <div className="blog__post">
                    <div className="image">
                            <img src={PostImage3} alt=""/>
                        </div>
                        <div>
                        <h4>Ergonomic Chair</h4>
                        <p>Nous maîtrisons les meilleurs process et les meilleures stratégies des tops du domaine</p>
                            <Link to='/blog'>Read more</Link>
                        </div>
                    </div>
                </div>
            </div>*/}
        </HomeContainer>
    )
}

export default Home