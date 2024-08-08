import { useContext } from "react";
import MovieContext from "../MovieContext/MovieContext";


function MovieCategories() {
      const {movieLists} = useContext(MovieContext);

      if(!movieLists) {
            return [];
      }
      // create categories for movieList
  const categories = [
            { title: 'Originals', items: movieLists.Originals},
            { title: 'Trending', items: movieLists.Trending},
            { title: 'Top Rated', items: movieLists.TopRated}, 
            { title: 'Action Movies', items: movieLists.ActionMovies}, 
            { title: 'Comedy Movies', items: movieLists.ComedyMovies},
            { title: 'Horror Movies', items: movieLists.HorrorMovies}, 
            { title: 'Romance Movies', items: movieLists.RomanceMovies}, 
            { title: 'Documentaries', items: movieLists.Documentaries},
      ];
      return categories;
}

export default MovieCategories;

