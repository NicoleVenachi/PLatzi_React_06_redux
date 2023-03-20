import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import { Provider } from 'react-redux';
import {reducer} from './reducers'

import {App} from './routes/App';

//traigo info inicial que le pasaré al estado
import { initalState } from '../initialState.json';

//creo Store
const store = createStore(reducer, initalState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

