// create action types
export const SELECT_MOVIE = 'SELECT MOVIE';
export const CLOSE_MOVIE = 'CLOSE MOVIE';

// actions
export const selectMovie = (movie) => ({
      type: SELECT_MOVIE,
      payload: movie,
})

export const closeMovie = () => ({
      type: CLOSE_MOVIE,
})