import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';

ReactDOM.hydrate(<HomePage {...window.data} />, document.getElementById('root'));