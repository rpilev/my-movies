import React, { Component } from 'react';
import '../assets/styles/Search.css';
import { searchMovies, addToFavorites, removeFromFavorites } from '../actions';
import { connect } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import MovieThumbnail from '../components/movie_thumbnail';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }
  onFormSubmit(e) {
    e.preventDefault();
  }

  addToFavorites(id) {
    this.props.addToFavorites(id);
  }
  removeFromFavorites(id) {
    this.props.removeFromFavorites(id);
  }
  checkIfInFavorites(id) {
    for(let i = 0; i < this.props.favorites.length; i++){
      if(this.props.favorites[i].id === id) {
        return false;
      }    
    }
    return true;
  }

  renderResults() {
    const moviesList = this.props.moviesList;
    if(moviesList === []){
      return <div>Loading...</div>
    }

    return moviesList.map((result) => {
      return (
        <MovieThumbnail 
          addToFavorites={ this.checkIfInFavorites(result.id) ? this.addToFavorites.bind(this) : false}
          removeFromFavorites={ this.removeFromFavorites.bind(this) }
          key={result.id}
          data={result}
        />
      )
    })
  }
  onInputChange(e) {
    if(e.target.value === ''){
      return;
    }
    this.setState({ searchTerm: e.target.value }, (() => {
      this.props.searchMovies(this.state.searchTerm);
    }));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit.bind(this)} className='input-form'>
          <label>Search for movies</label>
          <DebounceInput 
            debounceTimeout={400}
            value={this.state.searchTerm}
            onChange={this.onInputChange.bind(this)}
            type='text'
            className='form-control'
          />
        </form>
        <div>
          <ReactCSSTransitionGroup
            transitionName="slidefade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {this.renderResults.bind(this)()}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ moviesList, favorites }) {
  return {
    moviesList,
    favorites
  }
}

export default connect(mapStateToProps, { searchMovies, addToFavorites, removeFromFavorites })(Search);