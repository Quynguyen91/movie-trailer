import { SELECT_MOVIE, CLOSE_MOVIE } from "./movieListAction";

// create initial state
const initialState = {
      selectedMovie : null,
};

const movieListReducer = (state=initialState, action) => {
      switch (action.type) {
            case SELECT_MOVIE:
                  return {...state, selectedMovie: action.payload};
            case CLOSE_MOVIE: 
            return {...state, selectedMovie: null};
            default:
                  return state;
      }
};

export default movieListReducer;