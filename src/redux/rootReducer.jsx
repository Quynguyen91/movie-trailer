import { combineReducers } from "redux";
import movieListReducer from "./movieList_redux/movieListReducer";
import movieDetailReducer from "./movieDetail_redux/movieDetailReducer";

// combine reducers
const rootReducer = combineReducers({
      movieList: movieListReducer,
      movieDetail: movieDetailReducer,
})

export default rootReducer;