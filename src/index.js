import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { createStore } from 'redux';
import appReducers from './reducers/reducers';
import { getTeams } from './actions/actions'

let store = createStore(appReducers);
console.log(store.getState())
store.dispatch(getTeams());
console.log(store.getState())


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();