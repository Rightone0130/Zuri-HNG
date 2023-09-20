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
      <Link to="/"><h3 className="sidebar__header__icon" >RightPics</h3></Link>
      </div>
      <div className="menu">
        <ul>
          <li className='home__tab'>Pages</li>
          <li className="movies__tab"> Profile</li>
          <li>Pricing </li>
          <li> FAQ</li>
          <li>Timeline </li>
          <li>Contact </li>
          <li>Gallery </li>
          <li>Team Members </li>
          <li>Error 404 </li>
          <li>Error 500 </li>

        </ul>
      </div>
      
      <button className="toggle-button" onClick={toggleSidebar}>
      <span><img src='https://res.cloudinary.com/dcntmhgwf/image/upload/v1694768519/Zuri-HNG/Logout_zsydqf.svg'/></span>
        Toggle Sidebar
      </button>
    </div>
  );
};

export default Sidebar;
