import React, { useContext } from 'react';
import './BannerMovie.css';
import MovieList from '../MovieList/MovieList';
import MovieContext from '../../../MovieContext/MovieContext';
import { IMAGE_BASE_URL } from '../../API';

function BannerMovie() {
      const {bannerMovie, movieLists} = useContext(MovieContext);     
      
      // using custom hook Categories
     
      return(
            <>
                  {bannerMovie ? 
                  <>
                        <div className='BannerMovie_container'>
                        
                              <div className='BannerMovie_title'>
                                    {bannerMovie.title} 
                              </div>
                              <img src={`${IMAGE_BASE_URL}${bannerMovie.backdrop_path}`} alt={bannerMovie.title} />
                              <div className='BannerMovie_buttons'>
                                    {/* <button> Play </button>
                                    <button> Mylist </button> */}
                              </div>
                              <p className='bannerMovie_overview'>{bannerMovie.overview}</p>
                        </div>
                        {movieLists && <MovieList/>}
                  </>
                  : ''
                  }
            </>
      )
}
export default BannerMovie;