import React, { Component } from 'react';
import { IMAGE_ROOT_URL } from '../API_CONFIG';
import '../assets/styles/MovieThumbnail.css';
import Truncate from 'react-truncate';

export default(props) => {

  return (
    <div className="card" style={{width: 20 + 'rem'}}>
      <img className="card-img-top" src={`${IMAGE_ROOT_URL}${props.data.poster_path}`} alt="" />
      <div className="card-body">
        <h4 className="card-title">{props.data.title}</h4>
        <Truncate 
          className="card-text"
          lines={3}
          ellipsis={<span>...</span>}
        >
          {props.data.overview}
        </Truncate>
        <a href="#" className="btn btn-danger">Add to Favorites</a>
        <a href="#" className="btn btn-primary">Details</a>
      </div>
    </div>
  );
}