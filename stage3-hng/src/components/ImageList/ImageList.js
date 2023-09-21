import React, {useEffect, useState, useRef} from "react"
import "./ImageList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/Card"
import jsonData from './images.json';


const ImageList = ({searchQuery, handleSearchChange}) => {
    
    const [imageList, setImageList] = useState([])
    const {type} = useParams()



    const [Items, setItems] = useState([
      { name: "Bottle water", imageUrl: "https://res.cloudinary.com/dcntmhgwf/image/upload/v1692283017/Bullseye/Greenland_Water_Bottle_c7twqr.webp", tags: ["water", "beverage"] },
      { name: "Green tea", imageUrl: "https://res.cloudinary.com/dcntmhgwf/image/upload/v1692283017/Bullseye/Grene_Tea_k16hvw.webp", tags: ["tea", "beverage"] },
      { name: "Lux Rose", imageUrl: "https://res.cloudinary.com/dcntmhgwf/image/upload/v1692283018/Bullseye/Lux_Rose_zvjrvj.webp", tags: ["perfume", "luxury"] },
      { name: "Lemon flavor soda", imageUrl: "https://res.cloudinary.com/dcntmhgwf/image/upload/v1692283018/Bullseye/Lemon_Flavor_Soda_f0mnuq.webp", tags: ["soda", "beverage"] },
      { name: "Milk Chocolate bar", imageUrl: "https://res.cloudinary.com/dcntmhgwf/image/upload/v1692283019/Bullseye/Milk_Chocolate_Bar_raolg3.webp", tags: ["chocolate", "snack"] },
    ]);
    
    
    const [newItem, setNewItem] = useState("");
    const { item } = useParams();
    const filteredItems = Items.filter((item) => {
      const itemNameMatches = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const tagsMatch = item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
      return itemNameMatches || tagsMatch;
    });
    
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    const handleSort = () => {

      let _Items = [...Items];
      const draggedItemContent = _Items.splice(dragItem.current, 1)[0];

      _Items.splice(dragOverItem.current, 0, draggedItemContent);
  

      dragItem.current = null;
      dragOverItem.current = null;
  
   
      setItems(_Items);
    };
  
    const handleNameChange = (e) => {
      setNewItem(e.target.value);
    };
  
 
    const handleAddItem = () => {
      const _Items = [...Items];
      _Items.push(newItem);
      setItems(_Items);
    };
  
    
    return (
      
        <div className="movie__list">
            <div className="list__cards">
            {filteredItems .map((item, index) => (
  <Cards
    movie={imageList[index]} 
    item={item.name}
    imageUrl={item.imageUrl}
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