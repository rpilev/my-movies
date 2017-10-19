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
        <div className="container">
          <BrowserRouter>
            <Route render={({ location }) => (
              <div className="row">
                <div className="col-md-3">
                  <NavBar />
                </div>
                <div className="col-md-9">
                  <ReactCSSTransitionGroup
                      transitionName="fade"
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
        </div>
      </div>
    );
  }
}

export default App;
