import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Favorites from './containers/Favorites';
import Search from './containers/Search';
import Details from './containers/Details';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Route render={({ location }) => (
            <div className='main-container'>
              <div className='nav-col'>
                <NavBar />
              </div>
              <div className='content-col'>
                <ReactCSSTransitionGroup
                    transitionName="routefade"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >
                  <Switch key={location.key} location={location}>
                    <Route path='/details/:id' component={Details} />
                    <Route path='/favorites' component={Favorites} />
                    <Route path='/' component={Search} />
                  </Switch>
                </ReactCSSTransitionGroup>
              </div>
            </div>
          )}
        />
        </BrowserRouter>
        <footer>
          <p>This product uses the TMDb API but is not endorsed or certified by TMDb. GUI by Raul Špilev &copy; 2017</p>
          <img src='https://www.themoviedb.org/assets/static_cache/9b3f9c24d9fd5f297ae433eb33d93514/images/v4/logos/408x161-powered-by-rectangle-green.png' alt='' />
        </footer>
      </div>
    );
  }
}

export default App;
