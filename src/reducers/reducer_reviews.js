import { GET_MOVIE_REVIEWS } from '../actions';

export default function(state=[], action) {
  switch (action.type) {
    case GET_MOVIE_REVIEWS:
     return action.payload.data.results;
    default:
      return state;
  }
}