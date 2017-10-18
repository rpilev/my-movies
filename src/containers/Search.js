import React, { Component } from 'react';
import '../assets/styles/Search.css';
import { searchMovies } from '../actions';
import { connect } from 'react-redux';
import {DebounceInput} from 'react-debounce-input';
import MovieThumbnail from '../components/movie_thumbnail';
import { CONFIG_REQUEST_URL } from '../API_CONFIG';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
  }
  onFormSubmit(e) {
    e.preventDefault();
  }

  renderResults() {
    const moviesList = this.props.moviesList;
    if(moviesList == null){
      return <div>Initial state</div>
    }

    return moviesList.map((result) => {
      return (
        <MovieThumbnail key={result.id} data={result} />
      )
    })
  }
  onInputChange(e) {
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
            debounceTimeout={250}
            value={this.state.searchTerm}
            onChange={this.onInputChange.bind(this)}
            type='text'
            className='form-control'
          />
        </form>
        <div>
          {this.renderResults.bind(this)()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ moviesList }) {
  return {
    moviesList
  }
}

export default connect(mapStateToProps, { searchMovies })(Search);