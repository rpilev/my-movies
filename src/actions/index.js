import axios from 'axios';
import API_KEY from '../API_KEY';
import { SEARCH_ROOT_URL, DETAILS_ROOT_URL } from '../API_CONFIG';

const ROOT_URL = `${SEARCH_ROOT_URL}?api_key=${API_KEY}`;

export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const SUBMIT_REVIEW = 'SUBMIT_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

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

export function getMovieDetails(id) {
  const url = `${DETAILS_ROOT_URL}${id}?api_key=${API_KEY}`;

  const response = axios.get(url);
  return {
    type: GET_MOVIE_DETAILS,
    payload: response
  }
}

export function addToFavorites(id){

  const url = `${DETAILS_ROOT_URL}${id}?api_key=${API_KEY}`;
  const response = axios.get(url); 

  return {
    type: ADD_TO_FAVORITES,
    payload: response
  }
}

export function removeFromFavorites(id) {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: id
  }
}

export function submitReview(id, reviewText, reviewRating) {

  const review = {
    id,
    reviewText,
    reviewRating
  }

  return {
    type: SUBMIT_REVIEW,
    payload: review
  }

}

export function deletetReview(id) {

  return {
    type: DELETE_REVIEW,
    payload: id
  }

}