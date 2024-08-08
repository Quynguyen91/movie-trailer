import { TRAILER_URL } from "./movieDetailAction";

// initail state
      const initailState = {
            trailer_url: '',
      }
// create movieDetail reducer
const movieDetailReducer = (state = initailState, action) => {
      switch (action.type) {
            case TRAILER_URL:
                  return {...state, trailer_url: action.payload};
            default:
                  return state;
      }
}

export default movieDetailReducer;