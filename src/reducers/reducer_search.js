import { SEARCH_MOVIE } from '../actions';

export default function(state=[], action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      // Upon empty input from user return an emptry array
      if(action.payload == null){
        return [];
      }else{
        return action.payload.data.results;
      }
    default:
      return state;
  }
}