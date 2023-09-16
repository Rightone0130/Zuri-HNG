import "./Header.css"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
  


    const fetchData = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
      
        if (!apiKey) {
          console.error("API key not found.");
          return;
        }
      
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}`
          );
      
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
      
          const data = await response.json();
          setMovieList(data.results);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      
      useEffect(() => {
        if (searchQuery) {
          fetchData();
        } else {
          setMovieList([]); 
        }
      }, [searchQuery]);
    return (
        <div className="header">
                <div className="headerLeft">
                   <Link to="/"><img className="header__icon" src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1694503486/Zuri-HNG/Logo_edeb02.svg" /></Link>
                </div>
                <div className="search__main_container">
                <div className="search__bar">
      <input
        placeholder="What do you want to watch?"
        className="search__input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setShowDropdown(false)}
      />
      <span>
        <img
          className="search__icon"
          src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1694607269/Zuri-HNG/Search_gmmjkv.svg"
        />
      </span>
      </div>
      {showDropdown && (
        <div className="search__dropdown">
            
          {movieList.map((movie) => (
            
            <div key={movie.id} className="search__result">
                 <Link style={{textDecoration:"none",color:"white"}} to={`/movies/${movie.id}`} ></Link>
              <img className="search__img"
                src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                alt={movie.title}
              />
              
              <span className="search__title">{movie.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
                <div className="signIn__section">
                    <span>Sign in</span>
                    <img src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1694604464/Zuri-HNG/Menu_jqonol.svg"/>
                    

                </div>
        </div>
    )
}

export default Header