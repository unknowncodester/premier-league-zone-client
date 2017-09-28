import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { createStore, applyMiddleware } from 'redux';
import appReducers from './reducers/reducers';
import promise from 'redux-promise';
import {Provider} from "react-redux";

const store = createStore(appReducers, applyMiddleware(promise));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();