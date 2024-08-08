import React, { useContext } from "react";
import SearchSVG from "../../SearchSVG";
import MovieSearchContext from "../../../MovieSearchContext/MovieSearchContext";
import './searchForm.css';

function SearchForm() {
// get variable in MovieSearchContext
      const {inputData, handleInputChange, handleReset, searchClickHandle} = useContext(MovieSearchContext);

      return (
            <form className="SearchForm" onSubmit={searchClickHandle}>
                  <div className="SearchForm_input">
                        <input 
                        type="text" 
                        value={inputData}
                        placeholder="Search for a movie..."
                        onChange={handleInputChange} />
                        
                        <SearchSVG className='searchIcon'/>
                  </div>
                  <div className="SearchForm_btn">
                        <button type= 'button' className="btnReset" onClick={handleReset}> RESET </button>
                        <button type="submit" className="btnSearch" onClick={searchClickHandle}> SEARCH </button>
                  </div>
            </form>
      )
}

export default SearchForm;