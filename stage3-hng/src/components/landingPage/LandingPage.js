import React from "react";
import Header from '../header/Header';
import "./landingPage.css"


const LandingPage = () =>
{


    const isVisible = false;




return(

    <>
     <Header isVisible={isVisible} />
    
     <section class="intro">
        <div class="intro-content">
            <h1>Welcome to Your Image Gallery</h1>
            <p>Explore a world of captivating images</p>
            <a href="#gallery" class="btn">View Gallery</a>
        </div>
    </section>
    </>
)

}




export default LandingPage