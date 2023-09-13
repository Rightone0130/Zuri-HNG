import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}} >
            <div className="cards flex-item">
            <div className="card__favorite">
                <span>hfesdjk</span>
                        <span className="card__favIcon"> <img className="" src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1694611062/Zuri-HNG/Heart_cb3x0k.svg"/> </span>
                    </div>
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                  <div className="card__details">
                    
                       <div className="card__releaseDate">{movie?movie.release_date:""}</div>  
                        <div className="cards__title">{movie ? movie.original_title: ""}</div>
                         <div>
                              <img className="card__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" />
                               <span className="card__ratings">{movie?movie.vote_average * 10 + ".0 / 100":""}</span>
                               <img className="card__icon2" src="https://res.cloudinary.com/dcntmhgwf/image/upload/v1694592596/Zuri-HNG/PngItem_1381056_1_k3vbro.svg" /> <span>%90</span>
                               <div className="card__genre">{movie?movie.genre +"" : ""}</div>
                         </div>
                   </div>
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                    
                </div>
                     
               
            </div>
        </Link>
    }
    </>
}

export default Cards