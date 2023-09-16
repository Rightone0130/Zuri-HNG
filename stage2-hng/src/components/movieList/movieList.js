import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
      const apiKey = process.env.REACT_APP_API_KEY;
    
      if (!apiKey) {
        console.error("API key not found.");
        return;
      }
    
      fetch(`https://api.themoviedb.org/3/movie/${type ? type : "top_rated"}?api_key=${apiKey}&language=en-US`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          setMovieList(data.results);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          window.location.href = "/asasi";
        });
    };
    
    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "Featured Movie")}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    )).slice(0, 10)
                }
            </div>
        </div>
    )
}

export default MovieList