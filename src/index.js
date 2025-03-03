import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'

import { createStore } from 'redux';
import { Provider } from 'react-redux';


// add imports and code
const store = createStore(manageUsers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

//This will give your components access to the store.
