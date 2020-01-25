import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../../src/App';

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
	
    return res.send(ReactDOMServer.renderToString(<App />));
}