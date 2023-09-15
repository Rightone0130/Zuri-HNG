import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=16bd8644502d24eb918b4b9975ade1f1&language=en-US")
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            setPopularMovies(data.results);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            window.location.href = "/error";
          });
      }, []);
      
    return (
        <>
            <div className="poster">
            <Header />
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                    
                >
                    
                    {
                        
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                   <div className="home__topContainer">
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                       <Link to={`/movies/${movie.id}`} style={{textDecoration:"none", color:"white", marginTop:"2rem"}}> 
                                           <span className="callToAction">WATCH TRAILER</span>
                                      </Link>
                                </div>
                                </div>
                                
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
                <Footer/>
            </div>
        </>
    )
}

export default Home