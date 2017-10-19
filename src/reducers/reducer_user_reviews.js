import { SUBMIT_REVIEW, DELETE_REVIEW } from '../actions';

export default function(state=[], action) {
  switch (action.type) {
    case SUBMIT_REVIEW:
      let newState = state;
      newState[action.payload.id] = action.payload;
      return newState;
    case DELETE_REVIEW:
      return state.filter(function( obj ) {
          return obj.id !== action.payload.id;
      });
    default:
      return state;
  }
}