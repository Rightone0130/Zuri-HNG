import React, { useState, useEffect } from 'react';
import './Sidebar.css'; // Import your CSS for styling

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // You can set a timeout if you want to delay the activation for some time
    // setTimeout(() => {
    setIsActive(true);
    // }, 1000); // Set an optional delay (in milliseconds) if needed
  }, []);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`sidebar ${isActive ? 'active' : ''}`}>
      <div className="logo">
        <img src="/path-to-your-logo.png" alt="Logo" />
      </div>
      <div className="menu">
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
          <li>Menu Item 4</li>
        </ul>
      </div>
      <button className="toggle-button" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
    </div>
  );
};

export default Sidebar;
