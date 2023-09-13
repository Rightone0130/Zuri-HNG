import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
                <div className="headerLeft">
                   <Link to="/"><img className="header__icon" src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1694503486/Zuri-HNG/Logo_edeb02.svg" /></Link>
               
                   {/* <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                    <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                   <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link> */}
                </div>
                <div className="search__bar">
                    <input placeholder="What do you want to watch?" className="search__input" /> <span><img className="search__icon" src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1694607269/Zuri-HNG/Search_gmmjkv.svg"/></span>
                </div>
                <div className="signIn__section">
                    <span>Sign in</span>
                    <img src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1694604464/Zuri-HNG/Menu_jqonol.svg"/>
                    

                </div>
        </div>
    )
}

export default Header