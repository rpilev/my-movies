import React, { Component } from 'react';
import '../assets/styles/Search.css';

class Search extends Component {
  render() {
    return (
      <form className='input-form'>
        <label>Search for movies</label>
        <input type='text' className='form-control' />
      </form>
    );
  }
}

export default Search;