import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import drugs from './data/drugs'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';



ReactDOM.render(
    <App drugs={drugs}/>
, document.getElementById('root'));
//registerServiceWorker();
