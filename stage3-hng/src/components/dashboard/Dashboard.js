import React from "react";
import "./dashboard.css"
import Siidebar from '../../components/sidebar/Sidebar';
import ImageList from '../ImageList/ImageList'
import Header from "../header/Header";





const Dashboard = () =>
{

    const isVisible = true;



return (
    <>
    <Header isVisible={isVisible}/>
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
            <p>Lorem ipsum jdjfjgkgo;jhh;jhlkkkkjkjksss</p>
              <div className="section__nav">
                <span>All</span> 
                <span>Branding</span>
                <span>Design</span>
                <span>Development</span>
              </div>

        </div>

        <div className="cards">
            <ImageList/>
        </div>

      


    </div>
    
    </>
)



}


export default Dashboard
