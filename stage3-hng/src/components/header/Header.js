import "./Header.css"
import { Link, useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";



const Header = ({ isVisible, searchQuery, handleSearchChange  }) => {
  
  const [currentUser, setCurrentUser] = useState(null);
    const [movieList, setMovieList] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [shouldCloseDropdown, setShouldCloseDropdown] = useState(false);
  



    const navigate = useNavigate();


    const handleSignOut = async () => {
      try {
        await auth.signOut();
        navigate("/");
      } catch (error) {
        console.error("Error signing out:", error);
      }
    };
    
  


    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
      });

    return () => unsubscribe();
  }, []);

    
  
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
                   <Link to="/"><h3 className="header__icon" >RightPics</h3></Link>
                </div>
                <div className="search__main_container" style={{ display: isVisible ? 'block' : 'none' }}>
                <div className="search__bar">
      <input
      placeholder="Search by name"
       className="search__input"
        value={searchQuery}
        onChange={handleSearchChange}
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
                  <div className="search__result">
              <img className="search__img"
                src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                alt={movie.title}
              />
              <span className="search__title">{movie.title}</span>
              </div>
            
            </div>
          ))}
        </div>
      )}
    </div>
                <div className="signIn__section">
                <img className="signIn__img1" src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1695108712/Zuri-HNG/pngfind.com-full-screen-icon-png-4181640_fsx9m7.png"/>
                <img className="signIn__img2" src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1695108751/Zuri-HNG/kev5k761eptnef2prduef53thg_irc3nr.png"/>
                {currentUser ? (
          <div className="signIn__btn" onClick={handleSignOut}>
          <img
            className="signIn__img"
            src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1695082870/member-user-personal-data-button-human-avatar-character-social-character-profile-3d-icon_92753-13151-removebg-preview-transformed_weouo4.png"
          />
          <span>Sign Out</span>
        </div>
        ) : (
          <Link to={"/rightpics/SignIn"}>
            <div className="signIn__btn">
              <img
                className="signIn__img"
                src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1695082870/member-user-personal-data-button-human-avatar-character-social-character-profile-3d-icon_92753-13151-removebg-preview-transformed_weouo4.png"
              />
              <span>Sign in</span>
            </div>
          </Link>
        )}
                </div>
                
        </div>
    )
}

export default Header