import React from "react";
import Header from '../header/Header';
import "./landingPage.css"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const LandingPage = () =>
{


    const isVisible = false;

    const location = useLocation()


return(

    <>
     <Header isVisible={isVisible} />
    
     <section class="intro">
        <div class="intro-content">
            <h1>Welcome to Your Image Gallery</h1>
            <p>Explore a world of captivating images</p>
            <Link to="/rightpics/SignIn"  >
            <a href="/rightpics/Dashboard" class="btn">View Gallery</a>
            </Link>
        </div>
    </section>
    </>
)

}




export default LandingPage