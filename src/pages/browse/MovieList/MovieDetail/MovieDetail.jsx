import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { API_KEY, IMAGE_BASE_URL } from "../../../API";
import { setTrailerUrl } from "../../../../redux/movieDetail_redux/movieDetailAction";
import './MovieDetail.css';

function MovieDetail({movie, onClose}) {
      const dispatch = useDispatch();
      const trailerUrl = useSelector((state) => state.movieDetail.trailer_url);
      
      // use useEffect to get api for trailer movie
      useEffect(()=> {
            async function fetchTrailer() {
                  try {
                        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`);
                        const data = await response.json();
                        // find the trailer movie that was clicked
                        const trailerMovie = data.results.find(movie => (movie.site === 'YouTube' && movie.type === 'Trailer'));
                        if (trailerMovie) 
                              dispatch(setTrailerUrl(`https://www.youtube.com/embed/${trailerMovie.key}`));
                        else dispatch(setTrailerUrl(''));
                  }
                  catch (error) {
                        console.error('Error fetching trailer', error);
                  }
            }
            fetchTrailer();

      }, [movie.id])

      return (    
            
            <div className="MovieDetail_grid_container">
                  <button className="MovieDetail_close" onClick={onClose}>X</button>
                  <div className="MovieDetail_item_infor">
                        <h3 className="MovieDetail_item_infor-title">
                              {movie.title ? movie.title : movie.name}
                        </h3>
                        <p className="m-0 MovieDetail_item_infor-relaseDate">
                            Release Date:   {movie.release_date ? movie.release_date : movie.first_air_date}
                        </p>
                        <p className="m-0 MovieDetail_item_infor-vote">
                              Vote: {movie.vote_average}
                        </p>
                        <p className="MovieDetail_item_infor-vote--count">
                              Vote count: {movie.vote_count}
                        </p>
                        <p>{movie.overview ? movie.overview : ""}</p>

                  </div>
                  {trailerUrl ? (
                        <div className="MovieDetail-trailer">
                              <iframe 
                              width='100%'
                            height="400"
                              src= {trailerUrl ? trailerUrl : `${IMAGE_BASE_URL}${movie.backdrop_path}`}
                              frameborder="0"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title="Movie Trailer"
                              ></iframe>

                        </div>
                  )
                  : (
                        <img 
                        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                        alt={movie.title}
                        width="100%"
                        height="400"
                        />
                  )

                  }

            </div>
      )
}

export default MovieDetail;