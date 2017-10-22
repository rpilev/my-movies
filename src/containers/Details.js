import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
          getMovieDetails,
          getMovieReviews,
          addToFavorites,
          submitReview,
          deletetReview
        } from '../actions';
import MovieDetailsBox from '../components/movie_details_box';
import MovieReviews from '../components/movie_reviews';
import ReactStars from 'react-stars'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Details extends Component {
  constructor(state) {
    super(state);
    this.state = { 
      reviewText: ' ',
      reviewRating: 0,
      editRevew: false
    };
  }

  componentDidMount() {
    this.props.getMovieDetails(this.props.match.params.id);
    this.props.getMovieReviews(this.props.match.params.id);
  }

  onReviewFormSubmit(e) {
    e.preventDefault();
    this.setState({ 
      reviewText: '',
      reviewRating: 0,
      editRevew: false
    });
    this.props.submitReview(this.props.movieDetails.id, this.state.reviewText, this.state.reviewRating);
  }

  onReviewInput(e) {
    this.setState({ reviewText: e.target.value });
  }

  ratingChanged(newRating) {
    this.setState({ reviewRating: newRating });
  }

  editReview() {
    this.setState({
      reviewText: this.props.userReviews[this.props.movieDetails.id].reviewText,
      reviewRating: this.props.userReviews[this.props.movieDetails.id].reviewRating,
      editRevew: true
    });
  }
  deleteReview() {
    this.props.deletetReview(this.props.movieDetails.id);
    this.setState({
      reviewText: ' ',
      reviewRating: 0
    });
  }
  renderDetails() {

    if(!this.props.movieDetails){
      return (<div>Loading...</div>)
    }
    return (
      <div>
        <MovieDetailsBox data={this.props.movieDetails} />

        { this.props.movieReviews.length !== 0 ?
          <h3>Reviews:</h3>
          :
          ''
        }
        {
          this.props.movieReviews.map(function(review) {
            return <MovieReviews key={review.id} data={review} />
          })
        }

        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {
            //show review if it exists and if not editing
            this.props.userReviews[this.props.movieDetails.id] &&
            this.props.userReviews[this.props.movieDetails.id].reviewText &&
            !this.state.editRevew
             ?
            <div className='user-review'>
              <h4>Personal Review:</h4>
              <ReactStars
                className='details-rating'
                count={10}
                value={parseFloat(this.props.userReviews[this.props.movieDetails.id].reviewRating, 10)}
                edit={false}
                size={24}
                color2={'#ffd700'}
              />
              <p style={{whiteSpace: 'pre-line'}} className='details-overview'>
                {this.props.userReviews[this.props.movieDetails.id].reviewText}
              </p>
              <button onClick={this.editReview.bind(this)} className='btn btn-secondary'>Edit Review</button>
              <button style={{ marginLeft: 10 + 'px' }} onClick={this.deleteReview.bind(this)} className='btn btn-danger'>Delete Review</button>
            </div> :
            ''
          }
          {
            //show add review box and no review exists or if editing currect review
            ((
              !this.props.userReviews[this.props.movieDetails.id]) ||
              this.state.editRevew
              ) ? 
            <form onSubmit={this.onReviewFormSubmit.bind(this)} className="input-form review-form">
              <label>Personal Review:</label><br />
              <ReactStars
                className='details-rating'
                count={10}
                onChange={this.ratingChanged.bind(this)}
                value={parseFloat(this.state.reviewRating, 10)}
                size={24}
                color2={'#ffd700'}
              />
              <textarea
                onInput={this.onReviewInput.bind(this)}
                type='text'
                defaultValue={this.state.reviewText}
                className='form-control'
              />
              <br />
              <input type="submit" value="Ok" className="btn btn-default" />
            </form> :
            ''
          }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        {this.renderDetails()}
      </div>
    );
  }
}

function mapStateToProps({ movieDetails, favorites, userReviews, movieReviews }) {
  return {
    movieDetails,
    favorites,
    userReviews,
    movieReviews
  }
}

export default connect(mapStateToProps,
  { 
    getMovieDetails,
    getMovieReviews,
    addToFavorites,
    submitReview,
    deletetReview
  })(Details);