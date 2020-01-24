require('ignore-styles');

require('babel-register')({
    ignore: [ /(node_modules)/ ],
    presets: ['env', 'react-app']
});

require('./index');