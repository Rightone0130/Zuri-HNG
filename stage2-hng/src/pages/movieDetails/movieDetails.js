import React, {useEffect, useState} from "react"
import "./movieDetails.css"
import { useParams } from "react-router-dom"
import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from "react-router-dom"
import Footer from '../../components/footer/Footer';

const MovieDetails = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);

  // Declare apiKey using const
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
      // Debug statement to check API key
      console.log("API Key:", apiKey);

      getData();
      window.scrollTo(0, 0);
  }, []);

  const getData = () => {
      // Debug statement to check API URL
      const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
      console.log("API URL:", apiUrl);

      fetch(apiUrl)
          .then((res) => {
              if (!res.ok) {
                  throw new Error("Network response was not ok");
              }
              return res.json();
          })
          .then((data) => {
              setMovie(data);
          })
          .catch((error) => {
              console.error("Error fetching data:", error);
              // You can handle errors differently here, e.g., display an error message.
          });
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
                        <span data-testid="movie-title" className="movieDetails__title movieDetails__common">{currentMovieDetail ? currentMovieDetail.original_title : ""}{currentMovieDetail ? ": " + currentMovieDetail.tagline : ""}</span>
                        <span className="movieDetails__dot movieDetails__common">•</span>
                                          <span data-testid="movie-release-date" className="movieDetails__common">
                                       {currentMovieDetail ? 
                                          new Date(currentMovieDetail.release_date).toLocaleString('en-US', { timeZone: 'UTC' }) 
                                             : ""}
                                                  </span>

                        <span className="movieDetails__dot movieDetails__common">•</span>
                        <span className="movieDetails__common"> PG-13</span>
                        <span className="movieDetails__dot movieDetails__common">•</span>
                        <span data-testid="movie-runtime" className="movieDetails__common">{currentMovieDetail ? /*formatRuntime(currentMovieDetail.runtime)*/ currentMovieDetail.runtime : ""}</span>
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
                            <span data-testid="movie-overview" className="movieDetails__overview">{currentMovieDetail ? currentMovieDetail.overview : ""}</span>
                            <div>
                                <div className="producers">Director : <span>eyrtrwt6y</span></div>
                                <div className="producers">Writers : <span>yrtttttyw</span></div>
                                <div className="producers">Stars : <span>trertwer</span></div>
                            </div>
                            <Link to="/movies/type/top_rated" style={{textDecoration: "none"}}>
                            <div className="rated__cantainer">
                          
                                <span className="top__Rated">Top rated movie #65</span>
                                <span className="awards__nominations"> Awards 9 nominations</span>
                            </div>
                            </Link>

                        </div>
                        <div className="moreDetails__left">
                        <div className="show__times">See Showtimes</div>
                        <Link to="/movies/type/popular" style={{textDecoration: "none"}}>
                        <div className="more__watch">More watch options</div>
                        </Link>
                        <div className="more__content">
                        <Link to="/movies/type/upcoming" style={{textDecoration: "none"}}>
                        <div className="movie__poster_container">
                        <img className="movie__poster_image" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                        <img className="movie__poster_image" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                        <img className="movie__poster_image" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                      
                        </div>
                        </Link>
                        <div className="best__movies">The Best Movies and Shows in September</div>
                        </div>
                        </div>

                       </div>

                     
                   </div>

              </div>
            
        <div className="movieDetails__footer">
        <Footer/>
        </div>
        </div>
    )
}

export default MovieDetails