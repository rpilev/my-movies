import { SEARCH_MOVIE } from '../actions';

export default function(state=[], action) {
  switch (action.type) {
    case SEARCH_MOVIE:

      if(action.payload == null || action.error){
        return [];
      }else{
        return action.payload.data.results;
      }
    default:
      return state;
  }
}