import React, { createContext, useState, useEffect } from "react";
import { request, fetchData } from "../pages/API";

const MovieContext = createContext();

export const MovieProvider = ({children}) => {
      const [movieLists, setMovieLists] = useState({
            Trending: [],
            Originals: [], 
            TopRated: [], 
            ActionMovies: [], 
            ComedyMovies: [], 
            HorrorMovies: [], 
            RomanceMovies: [], 
            Documentaries: [],
      })
      
      // create a random movie for banner
      const [bannerMovie, setBannerMovie] = useState(null);

   

// useEffect to call API for each section movie
useEffect(()=> {
      async function initiallizeData() {
            const Trending = await fetchData(request.fetchTrending);
            const Originals = await fetchData(request.fetchNetflixOriginals);
            const TopRated = await fetchData(request.fetchTopRated);
            const ActionMovies = await fetchData(request.fetchActionMovies);
            const ComedyMovies = await fetchData(request.fetchComedyMovies);
            const HorrorMovies = await fetchData(request.fetchHorrorMovies);
            const RomanceMovies = await fetchData(request.fetchRomanceMovies);
            const Documentaries = await fetchData(request.fetchDocumentaries);
            setMovieLists({Trending, Originals, TopRated, ActionMovies, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries,

      })

      // put all movies into an array
      const allMovies = [...Trending, ...Originals, ...TopRated, ...ActionMovies, ...ComedyMovies, ...HorrorMovies, ...RomanceMovies, ...Documentaries];
      const randomIndex = Math.floor(Math.random() * allMovies.length);
      setBannerMovie(allMovies[randomIndex]);
      }
      initiallizeData();
      
}, []);

return (
      <MovieContext.Provider value={{movieLists, bannerMovie}}>
            {children}
      </MovieContext.Provider>
)
}

export default MovieContext;