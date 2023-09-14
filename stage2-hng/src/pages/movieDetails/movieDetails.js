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
                            </div>

                        </div>
                        <div className="moreDetails__left">
                        {currentMovieDetail ? currentMovieDetail.overview : ""}
                        </div>

                       </div>

                     
                   </div>

              </div>
            
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    {/* <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div> */}
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            {/* <div className="movie__heading">Production companies</div> */}
            {/* <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div> */}
        </div>
    )
}

export default MovieDetails