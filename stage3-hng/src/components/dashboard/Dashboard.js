import React  from "react";
import "./dashboard.css"
import Siidebar from '../../components/sidebar/Sidebar';
import ImageList from '../ImageList/ImageList'
import Header from "../header/Header";
import { useState } from "react";





const Dashboard = () =>
{

    const isVisible = true;
    const [searchQuery, setSearchQuery] = useState(""); 
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };
    

return (
    <>
    <Header isVisible={true} searchQuery={searchQuery} handleSearchChange={handleSearchChange}/>
     <Siidebar/>
    <div className="dashboard__container">
        <div className="dashboard__head">
            <h3>Gallery</h3>
            <div>
            <span>Pages  --- </span>
            <span>Gallery</span>
            </div>
            

        </div>

        <div className="dashboard__head_details">
            <h1>Photo Gallery</h1>
            <p>Unlock the Beauty of Our World, One Captivating Image at a Time – Your Personal Photo Gallery Dashboard.</p>
              <div className="section__nav">
                <span>All</span> 
                <span>Branding</span>
                <span>Design</span>
                <span>Development</span>
              </div>

        </div>

        <div className="cards">
            <ImageList  searchQuery={searchQuery}
        handleSearchChange={handleSearchChange} />
        </div>

      


    </div>
    
    </>
)



}


export default Dashboard
