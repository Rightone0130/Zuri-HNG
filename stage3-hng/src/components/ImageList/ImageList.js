import React, {useEffect, useState, useRef} from "react"
import "./ImageList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/Card"
import jsonData from './images.json';


const ImageList = () => {
    
    const [imageList, setImageList] = useState([])
    const {type} = useParams()



    const [fruitItems, setFruitItems] = useState([
      { name: "Bottle water", imageUrl: "https://res.cloudinary.com/dcntmhgwf/image/upload/v1692283017/Bullseye/Greenland_Water_Bottle_c7twqr.webp" },
      { name: "Green tea", imageUrl: "https://res.cloudinary.com/dcntmhgwf/image/upload/v1692283017/Bullseye/Grene_Tea_k16hvw.webp" },
      { name: "Lux Rose", imageUrl: "https://res.cloudinary.com/dcntmhgwf/image/upload/v1692283018/Bullseye/Lux_Rose_zvjrvj.webp" },
      { name: "Lemon flavor soda", imageUrl: "https://res.cloudinary.com/dcntmhgwf/image/upload/v1692283018/Bullseye/Lemon_Flavor_Soda_f0mnuq.webp" },
      { name: "Milk Chocolate bar", imageUrl: "https://res.cloudinary.com/dcntmhgwf/image/upload/v1692283019/Bullseye/Milk_Chocolate_Bar_raolg3.webp" },
    ]);
    




    const [newFruitItem, setNewFruitItem] = useState("");
    const { item } = useParams();
  





    // Save reference for dragItem and dragOverItem
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);
  
    // Handle drag sorting
    const handleSort = () => {
      // Duplicate items
      let _fruitItems = [...fruitItems];
  
      // Remove and save the dragged item content
      const draggedItemContent = _fruitItems.splice(dragItem.current, 1)[0];
  
      // Switch the position
      _fruitItems.splice(dragOverItem.current, 0, draggedItemContent);
  
      // Reset the position ref
      dragItem.current = null;
      dragOverItem.current = null;
  
      // Update the actual array
      setFruitItems(_fruitItems);
    };
  
    // Handle name change
    const handleNameChange = (e) => {
      setNewFruitItem(e.target.value);
    };
  
    // Handle new item addition
    const handleAddItem = () => {
      const _fruitItems = [...fruitItems];
      _fruitItems.push(newFruitItem);
      setFruitItems(_fruitItems);
    };
  



    
    return (
        <div className="movie__list">
            {/* <h2 className="list__title">{(type ? type : "Featured Movie")}</h2> */}
            <div className="list__cards">
            {fruitItems.map((item, index) => (
  <Cards
    movie={imageList[index]} // You can pass the corresponding movie data here
    item={item.name}
    imageUrl={item.imageUrl}
    Urls={"https://res.cloudinary.com/dcntmhgwf/image/upload/v1695082870/member-user-personal-data-button-human-avatar-character-social-character-profile-3d-icon_92753-13151-removebg-preview-transformed_weouo4.png"}
    index={index}
    dragItem={dragItem}
    dragOverItem={dragOverItem}
    handleSort={handleSort}
    key={index}
  />
))}

    
            </div>


            <div className="list-sort">
        
      </div>
        </div>
    )
}

export default ImageList