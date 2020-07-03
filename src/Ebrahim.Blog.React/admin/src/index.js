import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import 'perfect-scrollbar/dist/perfect-scrollbar.js';
import '../src/venders/flaticon/flaticon.css';
import '../src/venders/line-awesome/css/line-awesome.css';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
