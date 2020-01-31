import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../../src/pages/App/App';

const Components = {
    App
  };

export default (req, res, next) => {

    let Component = Components[req.body.moduleName];

    return res.send(ReactDOMServer.renderToString(<Component {...req.body.parameters} />));
}