import React from 'react';
import { IMAGE_ROOT_URL } from '../API_CONFIG';
import '../assets/styles/MovieThumbnail.css';
import Truncate from 'react-truncate';
import { Link } from 'react-router-dom';

export default(props) => {
  const release_year = props.data.release_date.substr(0, 4);

  return (
    <div className="card">
      { 
        props.data.poster_path 
          ?
          <img className="card-img-top" src={`${IMAGE_ROOT_URL}${props.data.poster_path}`} alt="" />
          :
          <img className="card-img-top" src='' alt="" />
      }
      <div className="card-body">
        <Truncate 
          className="card-title"
          lines={2}
          ellipsis={<span>...</span>}
        >
          {props.data.title}
        </Truncate> <br />
        <span>({release_year})</span>
        <Truncate 
          className="card-text"
          lines={2}
          ellipsis={<span>...</span>}
        >
          {props.data.overview}
        </Truncate>

        { 
          //show remove from favorites if already in favorites
          props.addToFavorites ? 
            <button 
              onClick={() => { props.addToFavorites(props.data.id) }}
              className="btn btn-danger"
            >
              Add to Favorites
            </button> :
            <button 
              onClick={() => { props.removeFromFavorites(props.data.id) }}
              className="btn btn-secondary"
            >
              Remove Favorite
            </button> 
        }
        

        <Link to={`/details/${props.data.id}`} className="btn btn-primary">Details</Link>
      </div>
    </div>
  );
}