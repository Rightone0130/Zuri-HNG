import React, {useEffect, useState} from "react"
import "./movieDetails.css"
import { useParams } from "react-router-dom"
import Sidebar from '../../components/sidebar/Sidebar';

const MovieDetails = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()
    const [showHeaderFooter, setShowHeaderFooter] = useState(true);

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
        
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=16bd8644502d24eb918b4b9975ade1f1&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }
    const formatRuntime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
      
        let formattedRuntime = "";
      
        if (hours > 0) {
          formattedRuntime += hours + "h";
        }
      
        if (remainingMinutes > 0) {
          if (formattedRuntime !== "") {
            formattedRuntime += " ";
          }
          formattedRuntime += remainingMinutes + "min";
        }
      
        return formattedRuntime;
      };

    return (
        <div className="movieDetails__container">
              <Sidebar />
              <div className="movieDetails__content">
                 <div className="movieDetails__trailer">
                      <img className="movieDetails__clip" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
                 </div>

                 <div className="movieDetails__mainContent">
                     < div className="mevieDetails__tepDetails"> 
                        <span className="movieDetails__title movieDetails__common">{currentMovieDetail ? currentMovieDetail.original_title : ""}{currentMovieDetail ? ": " + currentMovieDetail.tagline : ""}</span>
                        <span className="movieDetails__dot movieDetails__common">•</span>
                        <span className="movieDetails__common">{currentMovieDetail ? currentMovieDetail.release_date : ""}</span>
                        <span className="movieDetails__dot movieDetails__common">•</span>
                        <span className="movieDetails__common"> PG-13</span>
                        <span className="movieDetails__dot movieDetails__common">•</span>
                        <span className="movieDetails__common">{currentMovieDetail ? formatRuntime(currentMovieDetail.runtime) : ""}</span>
                        <span className="movieDetails__genre">{
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }</span>
                       </div>

                       <div className="mevieDetails__moreDetails">

                        <div className="moreDetails__right">
                            <span className="movieDetails__overview">{currentMovieDetail ? currentMovieDetail.overview : ""}</span>
                            <div>
                                <div className="producers">Director : <span>eyrtrwt6y</span></div>
                                <div className="producers">Writers : <span>yrtttttyw</span></div>
                                <div className="producers">Stars : <span>trertwer</span></div>
                            </div>

                            <div className="rated__cantainer">
                                <span className="top__Rated">Top rated movie #65</span>
                                <span className="awards__nominations"> Awards 9 nominations</span>
                            </div>

                        </div>
                        <div className="moreDetails__left">
                        <div className="show__times">See Showtimes</div>
                        <div className="more__watch">More watch options</div>
                        <div className="more__content">
                        <div className="movie__poster_container">
                        <img className="movie__poster_image" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                        <img className="movie__poster_image" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                        <img className="movie__poster_image" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                      
                        </div>
                        <div className="best__movies">The Best Movies and Shows in September</div>
                        </div>
                        </div>

                       </div>

                     
                   </div>

              </div>
            
            
        </div>
    )
}

export default MovieDetails