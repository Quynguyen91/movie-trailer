import React, { useCallback, useContext, useState } from "react";
import MovieSearchContext from "../../../MovieSearchContext/MovieSearchContext";
import MovieDetail from "../../browse/MovieList/MovieDetail/MovieDetail";
import { IMAGE_BASE_URL } from "../../API";
import './resultList.css';

function ResultList() {
      const {resultSearch} = useContext(MovieSearchContext);
      const [selectMovie, setSelectMovie] = useState(null);
      // handle when click the movie
      const handleSelectMovie = useCallback((item)=> {
           setSelectMovie((preMovieSelect) => (preMovieSelect && preMovieSelect.id === item.id) ? null : item);
            
      }, []);

      // handle close button
      const handleCloseBtn = ()=> {
            setSelectMovie(null)
      }

      // display item's image if the search list show an item which doesn't have an image
      const getBackdropFrom_Know_for = (knowFor) => {
            if(knowFor && knowFor.length > 0 ) {

                  // if the backdrop_path property is true, then return the image
                  if (knowFor[0].backdrop_path )
                        return `${IMAGE_BASE_URL}${knowFor[0].backdrop_path}`;
                  else if (knowFor[0].poster_path) {
                        return `${IMAGE_BASE_URL}${knowFor[0].poster_path}`;
                  }
            }
            return 'https://via.placeholder.com/150'; // Fallback image URL
      }

      // pick image for an item
      const img_search_item = (item) => {
            const poster_patth = item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : '';
            const backdrop_path = item.backdrop_path ? `${IMAGE_BASE_URL}${item.backdrop_path}` : '';
            const img_path = poster_patth || backdrop_path;
            return img_path;
      }
      return (
             <div className="resultList_container">
                  <h4 className="mb-5">Search Result</h4>
                  <div className="SearchMovieList_grid">
                        {
                              resultSearch.map((item, index) => (
                                    <div key={index} className="SearchMovie_item" onClick={() => handleSelectMovie(item)}>
                                          <img 
                                                src= {img_search_item(item) || getBackdropFrom_Know_for(item.known_for)}
                                                alt={item.title || item.name}
                                                className="searchMovieList_item"
                                          />
                                          <p className="SearchMovieItem_title">{item.title || item.name}</p>
                                    </div>
                              ))
                        }
                  </div>
                  {selectMovie &&
                        <MovieDetail movie= {selectMovie} onClose = {handleCloseBtn} />
                  }

      </div>
      )
}

export default ResultList;