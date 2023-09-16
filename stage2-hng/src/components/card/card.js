import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

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
        <div data-testid="movie-card" >
        
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
                <img data-testid="movie-poster" className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                  <div className="card__details">
                    
                       <div data-testid="release-date" className="card__releaseDate">{movie?movie.release_date:""}</div>  
                        <div data-testid="movie-title" className="cards__title">{movie ? movie.original_title: ""}</div>
                         <div>
                              <img className="card__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" />
                               <span className="card__ratings">{movie?movie.vote_average * 10 + ".0 / 100":""}</span>
                               <img className="card__icon2" src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1694592596/Zuri-HNG/PngItem_1381056_1_k3vbro.svg" /> <span className="card__percent">%90</span>
                               <div className="card__genre">{movie?movie.genres +"" : ""}</div>
                         </div>
                   </div>
                   <Link to={`/movies/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                    
                </div>
                </Link>
                     
               
            </div>
      
        </div>
    }
    </>
}

export default Cards