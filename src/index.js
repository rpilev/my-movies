import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import './assets/styles/Transitions.css';
import './assets/styles/Mobile.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
