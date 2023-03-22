import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, compose} from 'redux';
import { Provider } from 'react-redux';
import {reducer} from './reducers'

import {App} from './routes/App';

//traigo info inicial que le pasaré al estado
import { initalState } from '../initialState.json';


//debugger

//veo si está la extension, sino paso el compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//creo Store
const store = createStore(reducer, initalState, composeEnhancers());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

