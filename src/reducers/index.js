import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';

export default combineReducers({
  moviesList: SearchReducer
});