import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../../src/pages/App/App';

export default (req, res, next) => {

    return res.send(ReactDOMServer.renderToString(<App {...req.body.parameters} />));
}