import React from 'react';
import '../assets/styles/MovieReviews.css';

export default(props) => {
  return (
    <div className='movie-review'>
      <p style={{whiteSpace: 'pre-line'}} className='details-overview'>
        {props.data.content}
        <span className='author-span'>-{props.data.author}</span>
      </p>
    </div>
  );
}