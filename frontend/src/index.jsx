import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import i18n from './translation';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import * as serviceWorker from './serviceWorker';


const output = <Provider store={store}><Router><App/></Router></Provider>;

ReactDOM.render(output, document.getElementById('root'));

serviceWorker.unregister();
