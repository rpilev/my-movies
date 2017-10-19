import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SUBMIT_REVIEW } from '../actions';

export default function(state=[], action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [ ...state, action.payload.data ];
    case REMOVE_FROM_FAVORITES:
      return state.filter(function( obj ) {
        return obj.id !== action.payload;
      });
    default:
      return state;
  }
}