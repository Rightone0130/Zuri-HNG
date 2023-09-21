import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({ imageUrl, movie,
    item,
    index,
    dragItem,
    dragOverItem,
    handleSort, Urls}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 



    const handleHeartClick = () => {
        console.log("Heart icon clicked");
        setIsClicked((prevValue) => !prevValue);
      };
      
      const cardClass = isClicked ? "clicked-background" : "default-background"
    

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#333">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <div className="card-container"
          item={item}
        key={index}
        draggable
        onDragStart={(e) => (dragItem.current = index)}
        onDragEnter={(e) => (dragOverItem.current = index)}
        onDragEnd={handleSort}
        onDragOver={(e) => e.preventDefault()} 
        
        >
            
        <div data-testid="movie-card">
        
            <div className="cards flex-item">
            <div className="card__favorite">
                <span className="rightkey"> { ""}</span>
                        <span className="card__favIcon">
                <img
                  className={`clickable-image ${isClicked ? "clicked-background" : ""}`} 
                  src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1694611062/Zuri-HNG/Heart_cb3x0k.svg"
                  onClick={handleHeartClick}
                  alt="Heart Icon"
                />
              </span>

                    </div>
                <img data-testid="movie-poster" className="cards__img" src={`${imageUrl}`} />
                  <div className="card__details">
                    
                       <div data-testid="release-date" className="card__releaseDate">{movie?movie.release_date:""}</div>  
                        <div data-testid="movie-title" className="cards__title">{item ? item: "ooo"}</div>
                        
                   </div>

                <div className="cards__overlay">
                    <div className="card__title">{item?item:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                    
                </div>
            </div>
      
        </div>
        </div>
    }
    </>
}

export default Cards