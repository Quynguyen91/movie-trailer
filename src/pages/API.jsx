export const API_KEY = '3152693dc53afc973e326322c9f36951';
export const BASE_URL = 'https://api.themoviedb.org/3'; // Base URL for the API
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'; // Base URL for the image paths

export const request  = {
      fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
      fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
      fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
      fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
      fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
      fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
      fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
      fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
      fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};


export async function fetchData(endpoint) {
            try{
                  const response = await fetch(`${BASE_URL}${endpoint}`);
                  const data = await response.json();
                  // random a movie to show up for Banner
                  return data.results;
            }
            catch (error) {
                  console.error('Error fetching data', error);
                  return [];
            }
      }
   
