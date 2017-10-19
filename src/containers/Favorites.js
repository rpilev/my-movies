import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieThumbnail from '../components/movie_thumbnail';
import { getMovieDetails, removeFromFavorites } from '../actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Favorites extends Component {
  removeFromFavorites(id) {
    this.props.removeFromFavorites(id);
  }
  render() {
    let favoriteThumbnails = this.props.favorites.map((result) => {
      return (
        <MovieThumbnail 
          addToFavorites={false}
          removeFromFavorites={() => this.removeFromFavorites(result.id)}
          key={result.id}
          data={result}
        />
      );
    });
    return (
      <ReactCSSTransitionGroup
          transitionName="slidefade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
      >
        {favoriteThumbnails}
      </ReactCSSTransitionGroup>
    )
  }
}

function mapStateToProps({ favorites }) {
  return {
    favorites
  }
}

export default connect(mapStateToProps, { getMovieDetails, removeFromFavorites })(Favorites);