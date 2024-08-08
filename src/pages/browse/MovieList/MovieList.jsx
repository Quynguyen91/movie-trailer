import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieDetail from "./MovieDetail/MovieDetail";
import MovieCategories from "../../../Categories/MovieCategories";
import { IMAGE_BASE_URL } from "../../API";
import { selectMovie, closeMovie } from "../../../redux/movieList_redux/movieListAction";
import './MovieList.css';


function MovieList() {
      const categories = MovieCategories();
      const dispatch = useDispatch();
      const selectedMovie = useSelector((state) => state.movieList.selectedMovie)
      // handle when user click a movie's picture
      const clickImgMovieDetailHandle = (movie)=> {
            (selectedMovie && selectedMovie.id === movie.id) ?
            dispatch(closeMovie()) : dispatch(selectMovie(movie));
      }

      // handle close button
      const handleCloseBtn = ()=> {
            dispatch(closeMovie());
      }

      // return for MovieList
      return ( 
            <div>
                  {categories.map((categorie) => {
                        return (
                   <div key = {categorie.title} className="MovieList_container">
                  <h3 className="mt-3">{categorie.title}</h3>
                  <div className="MovieList_grid">
                  {/* create list of movies */}
                  {categorie.items.map((item, index)=>( 
                        
                        <div key={index}  onClick={() => clickImgMovieDetailHandle(item)}>
                              <img  
                              src={item.title === 'Originals' ? `${IMAGE_BASE_URL}${item.poster_path}` : `${IMAGE_BASE_URL}${item.backdrop_path }`} 
                              alt={item.title} 
                              className="MovieList_item"
                             onError={(e) => {
                                 e.target.onerror = null; // Prevent infinite loop in case fallback image also fails
                                 e.target.src = 'https://via.placeholder.com/150'; // Fallback image URL
                             }}
                              /> 
                              <p className="MovieItem-title text-center mb-5">{item.title ? item.title : item.name}</p>                  
                        </div>)
                        )
                  }
                  </div>
            </div>              
                  )
                  })}

                  {selectedMovie &&
                        <MovieDetail movie= {selectedMovie} onClose = {handleCloseBtn} />
                  }
            </div>
      )
}
export default MovieList;
