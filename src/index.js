import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './redux/store';
import registerServiceWorker from "./registerServiceWorker";
import { CALL_API } from 'redux-api-middleware'

const initialState = {
  shops: [
    {
      id: 1,
      name: "App Store"
    },
    {
      id: 2,
      name: "Google Play"
    },
    {
      id: 3,
      name: "Microsoft Store"
    },
    {
      id: 4,
      name: "SymbianOS"
    }
  ]
};

const store = configureStore(initialState);

const getProjectsList = () => ({
  [CALL_API]: {
    endpoint: '/api/projects',
    method: 'GET',
    types: [
      'FETCH_PROJECTS_REQUEST',
      'FETCH_PROJECTS_SUCCESS',
      'FETCH_PROJECTS_FAILURE'
    ]
  }
})

store.dispatch({type: 'APP_INIT'});
store.dispatch(getProjectsList());

ReactDOM.render(

    <App store={store} />

  , document.getElementById('root'));
registerServiceWorker();
