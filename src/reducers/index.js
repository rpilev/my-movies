import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';
import DetailsReducer from './reducer_details';
import FavoritesReducer from './reducer_favorites';
import UserReviewsReducer from './reducer_user_reviews';

export default combineReducers({
  moviesList: SearchReducer,
  movieDetails: DetailsReducer,
  favorites: FavoritesReducer,
  userReviews: UserReviewsReducer
});