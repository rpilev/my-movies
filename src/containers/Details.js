import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieDetails, addToFavorites } from '../actions';
import MovieDetailsBox from '../components/movie_details_box';
import { Link } from 'react-router-dom';

class Details extends Component {
  componentDidMount() {
    this.props.getMovieDetails(this.props.match.params.id);
  }
  renderDetails() {

    if(!this.props.movieDetails){
      return (<div>Loading...</div>)
    }
    return (
      <MovieDetailsBox data={this.props.movieDetails} />
    )
  }
  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <Link to='/' className='btn btn-primary'>
          Back
        </Link>
        {this.renderDetails()}
      </div>
    );
  }
}

function mapStateToProps({ movieDetails }) {
  return {
    movieDetails
  }
}

export default connect(mapStateToProps, { getMovieDetails, addToFavorites })(Details);