import React from "react";  
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
        {/* <Link>

        </Link> */}

        <div className="footer__container">
            <div className="footer__icon">
                <img className="social__icon" alt="facebook" src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1694598741/Zuri-HNG/fa-brands_facebook-square_czinij.svg" />
                <img className="social__icon" alt="instagram" src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1694598742/Zuri-HNG/fa-brands_instagram_traegb.svg"/>
                <img className="social__icon" alt="twitter" src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1694598741/Zuri-HNG/fa-brands_twitter_bx9qtr.svg" />
                <img className="social__icon" alt="youtube" src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1694598741/Zuri-HNG/fa-brands_youtube_ewwfqs.svg" />

            </div>
            <div className="footer__policy">
            <span className="footer__link">Conditions of Use</span>
            <span className="footer__link">Privacy & Policy</span>
            <span className="footer__link">Press Room</span>
            </div>

            <div className="footer__copywrite">© 2021 MovieBox by Ayilara Richard</div>


        </div>
        
        </>

    )
}

export default Footer