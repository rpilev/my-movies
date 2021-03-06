<p align="center">
  <img width="160" src="https://www.themoviedb.org/assets/static_cache/dd25a8d6d44072f1be5a9daf03470526/images/v4/logos/293x302-powered-by-square-green.png">
    <img width="250" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg">
</p>

# My Movies
Front-end demo of a movie search and management system.

**Features include:**

* Searching for movies by title
* Viewing movie details and reviews
* Adding movies to favorites list
* Giving movies personal reviews

## Getting Started

### Prerequisites

Requirements to install and test this application:

    npm package-manager

### Installing

In your terminal clone the repository using

_HTTPS:_

    git clone https://github.com/rpilev/my-movies.git
or

_SSH:_

    git clone git@github.com:rpilev/my-movies.git

Install the dependencies

    npm install

Get an API key from [https://developers.themoviedb.org/](https://developers.themoviedb.org/)

Rename the file 'API_KEY_FILE.js' in 'src\' to 'API_KEY.js' and edit the contents such that the const 'API_KEY' is equal to your API key

    const API_KEY = 'YOUR API KEY HERE';
    export default API_KEY;

Run webpack-dev-server

    npm run start

If no other development servers are currently running on the local machine then the application should now be available for testing at:

[http://localhost:3000](http://localhost:3000)

## Built With

* [React](https://github.com/facebook/react) (Bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app))
  * [axios](https://github.com/axios/axios)
  * [react-addons-css-transition-group](https://www.npmjs.com/package/react-addons-css-transition-group)
  * [react-debounce-input](https://github.com/nkbt/react-debounce-input)
  * [redux](https://github.com/reactjs/redux)
  * [redux-promise](https://github.com/acdlite/redux-promise)
  * [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
  * [react-stars](https://github.com/n49/react-stars)
  * [react-truncate](https://github.com/One-com/react-truncate)
* [Bootstrap](https://github.com/twbs/bootstrap)
* [TMDb API](https://www.themoviedb.org/)

## Authors
* Raul Špilev

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/rpilev/school-system/blob/master/LICENSE) file for details

## External links

Deployed preview available at:
[http://my-movies.surge.sh/](http://my-movies.surge.sh/)