import React, { Component } from 'react';
import { IMAGE_ROOT_URL } from '../API_CONFIG';
import '../assets/styles/DetailsBox.css';
import ReactStars from 'react-stars'

export default(props) => {
  const release_year = props.data.release_date.substr(0, 4);
  return (
    <div className="details">
      <img className='details-img' src={`${IMAGE_ROOT_URL}${props.data.backdrop_path}`} alt="" />

      <h4 className='details-heading'>{props.data.title} ({release_year})</h4>
      <i className='details-tagline'>{props.data.tagline}</i><br />
      <ReactStars
        className='details-rating'
        count={10}
        size={24}
        value={props.data.vote_average}
        edit={false}
        color2={'#ffd700'} 
      /> <br />
      <span>({`${props.data.vote_average}/10 ${props.data.vote_count}`} votes)</span>
      <p className='details-overview'>
        {props.data.overview}
      </p>

      <table className="table table-inverse details-table">
        <thead>
          <tr>
            <th>Details</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Original Title</th>
            <td>{props.data.original_title}</td>
          </tr>
          <tr>
            <th scope="row">Original Language</th>
            <td>{props.data.original_language}</td>
          </tr>
          <tr>
            <th scope="row">Spoken Langauge</th>
            <td>
              <ul className='details-list'>
                {props.data.spoken_languages.map((language) =>{
                  return (
                    <li key={language.iso_639_1}>{language.name}</li>
                  );
                })}
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Genres</th>
            <td>
              <ul className='details-list'>
                {props.data.genres.map((genre) =>{
                  return (
                    <li key={genre.id}>{genre.name}</li>
                  );
                })}
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Production Companies</th>
            <td>
              <ul className='details-list'>
                {props.data.production_companies.map((company) =>{
                  return (
                    <li key={company.id}>{company.name}</li>
                  );
                })}
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Production Countries</th>
            <td>
              <ul className='details-list'>
                {props.data.production_countries.map((country) =>{
                  return (
                    <li key={country.iso_3166_1}>{country.name}</li>
                  );
                })}
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Runtime</th>
            <td>{props.data.runtime} min</td>
          </tr>
          <tr>
            <th scope="row">Adult</th>
            <td>{props.data.adult ? 'True' : 'False'}</td>
          </tr>
          <tr>
            <th scope="row">Homepage</th>
            <td><a href={props.data.homepage}>{props.data.homepage}</a></td>
          </tr>
          <tr>
            <th scope="row">Release Date</th>
            <td>{props.data.release_date}</td>
          </tr>
          <tr>
            <th scope="row">Status</th>
            <td>{props.data.status}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}