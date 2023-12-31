import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Footer from './components/footer/Footer';
import MovieDetails from './pages/movieDetails/movieDetails';
import ErrorPage from './pages/errorPage/errorPage';

function App() {
  return (
    <div className="App">
        <Router>
       
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:id" element={<MovieDetails />}></Route>
                <Route path="movies/type/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<ErrorPage/>}></Route>
            </Routes>
           
        </Router> 
    </div>
  );
}

export default App;
