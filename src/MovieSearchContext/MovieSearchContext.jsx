import React, { createContext, useState, useCallback } from "react";
import { fetchData, API_KEY } from '../pages/API'


// create context
const MovieSearchContext = createContext();

export function MovieSearchProvider({children}) {
      // useState for input 
      const [inputData, setInputData] = useState('');
      const [resultSearch, setResultSearch] = useState([]);

      // handle for input
      const handleInputChange = useCallback((e) => {
            setInputData(e.target.value);
      }, []);

      //   handle for reset button
      const handleReset = useCallback(() => {
            setInputData('');
            setResultSearch([]);
      })

      // handle for click search button
      const searchClickHandle = useCallback(async(e) => {
            e.preventDefault();
            if(inputData.trim()) {
                  try{
                        const searchData = await fetchData(`/search/multi?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&query=${inputData}`);
                        setResultSearch(searchData);      
                  }
                  catch (error){
                        console.error('Error fetching search results:', error);
                  }
            }
      }
      )
      return (
            <MovieSearchContext.Provider value={{inputData, resultSearch, handleInputChange, handleReset, searchClickHandle}}>
                  {children}
            </MovieSearchContext.Provider>
      )
}

export default MovieSearchContext;