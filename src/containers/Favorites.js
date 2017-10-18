import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieThumbnail from '../components/movie_thumbnail';
import { getMovieDetails, removeFromFavorites } from '../actions';

class Favorites extends Component {
  removeFromFavorites(id) {
    this.props.removeFromFavorites(id);
  }
  render() {
    return this.props.favorites.map((result) => {
      return (
        <MovieThumbnail 
          addToFavorites={false}
          removeFromFavorites={() => this.removeFromFavorites(result.id)}
          key={result.id}
          data={result}
        />
      )
    })
  }
}

function mapStateToProps({ favorites }) {
  return {
    favorites
  }
}

export default connect(mapStateToProps, { getMovieDetails, removeFromFavorites })(Favorites);