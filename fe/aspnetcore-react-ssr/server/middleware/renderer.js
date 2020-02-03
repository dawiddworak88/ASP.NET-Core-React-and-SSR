import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../../src/pages/App/App';

const Components = {
    App
  };

export default (req, res, next) => {

    let Component = Components[req.body.moduleName];
	
	if (Component) {
		return res.send(ReactDOMServer.renderToString(<Component {...req.body.parameters} />));
	}
	
	res.status(400).end();
}