require('ignore-styles');

require('@babel/register')({
    plugins: ["babel-plugin-file-loader"]
});

require('./index');