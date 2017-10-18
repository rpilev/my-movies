import axios from 'axios';
import API_KEY from '../API_KEY';
import { SEARCH_ROOT_URL } from '../API_CONFIG';

const ROOT_URL = `${SEARCH_ROOT_URL}?api_key=${API_KEY}`;

export const SEARCH_MOVIE = 'SEARCH_MOVIE';

export function searchMovies(search) {
  //Check for empty input from user
  if(search == ''){
    return {
      type: SEARCH_MOVIE,
      payload: null
    }
  }
  const url = `${ROOT_URL}&query=${search}`;
  const response = axios.get(url);
  return {
    type: SEARCH_MOVIE,
    payload: response
  }
}