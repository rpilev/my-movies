import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Favorites from './containers/Favorites';
import Search from './containers/Search';
import Details from './containers/Details';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className="container">
          <BrowserRouter>
              <div className="row">
                <div className="col-md-3">
                  <NavBar />
                </div>
                <div className="col-md-9">
                  <Switch>
                    <Route path='/details/:id' component={Details} />
                    <Route path='/favorites' component={Favorites} />
                    <Route path='/' component={Search} />
                  </Switch>
                </div>
              </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
