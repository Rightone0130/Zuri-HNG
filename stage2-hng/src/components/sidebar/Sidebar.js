import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    setIsActive(true);
     }, 1000); 
  }, []);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`sidebar ${isActive ? 'active' : ''}`}>
      <div className="logo">
      <Link to="/"><img className="sidebar__header__icon" src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1694503486/Zuri-HNG/Logo_edeb02.svg" /></Link>
      </div>
      <div className="menu">
        <ul>
          <li className='home__tab'> <span><img src='https://res.cloudinary.com/dcntmhgwf/image/upload/v1694768520/Zuri-HNG/Home_tam16x.svg'/></span> Home</li>
          <li className="movies__tab"> <span><img src='https://res.cloudinary.com/dcntmhgwf/image/upload/v1694768520/Zuri-HNG/Movie_Projector_f44era.svg'/></span>Movies</li>
          <li> <span><img src='https://res.cloudinary.com/dcntmhgwf/image/upload/v1694768520/Zuri-HNG/TV_Show_sjkyuv.svg'/></span>TV Series</li>
          <li> <span><img src='https://res.cloudinary.com/dcntmhgwf/image/upload/v1694768519/Zuri-HNG/Calendar_s5mkzu.svg'/></span>Upcoming</li>
        </ul>
      </div>
      <div className="movie__quizes">
        <p>Play movie quizes <br/>and earn <br/> free tickets</p>
        <p className='playing__now'>50k people are playing <br/>now</p>
        <p className='start__playing'>Start playing</p>
        
      </div>
      <button className="toggle-button" onClick={toggleSidebar}>
      <span><img src='https://res.cloudinary.com/dcntmhgwf/image/upload/v1694768519/Zuri-HNG/Logout_zsydqf.svg'/></span>
        Toggle Sidebar
      </button>
    </div>
  );
};

export default Sidebar;
