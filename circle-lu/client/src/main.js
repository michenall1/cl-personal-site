import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './app/reducers';

import AppRouter from './router';
import './styles/main.scss';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  var errorData = error.data;
  if (error.status === 400 && _.has(errorData, 'errorType')) {
    console.log('getting interceptor response error');
    if (_.get(errorData, 'errorType') === 'Redirect' && _.has(errorData, 'location')) {
      window.location.href = _.get(errorData, 'location');
    }
  } else {
    return Promise.reject(error);
  }
});

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <AppRouter />
  </Provider>,
  document.getElementById('app'));
