import "./Header.css"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [shouldCloseDropdown, setShouldCloseDropdown] = useState(false);
  


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

      useEffect(() => {
        if (selectedMovieId !== null) {
          // Close the dropdown after a delay (e.g., 2 seconds)
          const delay = setTimeout(() => {
            setShowDropdown(false);
            setSelectedMovieId(null);
            console.log("delay active");
          }, 2000); // 2000 milliseconds = 2 seconds
    
          return () => clearTimeout(delay); // Clear the timeout on unmount or when selecting a new movie
        }
      }, [selectedMovieId]);


      const handleResultClick = (movieId) => {
        try {
          setSelectedMovieId(movieId);
          setShouldCloseDropdown(true);
          console.log("A Movie was selected");
        } catch (error) {
          console.error("Error in handleResultClick:", error);
        }
      };
      
    
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
        <div className="search__dropdown" onClick={() => {if (shouldCloseDropdown) setShowDropdown(false);}}>
            
          {movieList.map((movie) => (
            
            <div key={movie.id} >
                 <Link key={movie.id} style={{textDecoration:"none",color:"black", zIndex:"100000"}} to={`/movies/${movie.id}`} onClick={() => handleResultClick(movie.id)}>
                  <div className="search__result">
              <img className="search__img"
                src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                alt={movie.title}
              />
              <span className="search__title">{movie.title}</span>
              </div>
              </Link>
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