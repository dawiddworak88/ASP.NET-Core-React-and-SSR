require('ignore-styles');

require('@babel/register')({
    plugins: [
        [
            "file-loader",
            {
				"name": "[name].[ext]",
				"publicPath": "/dist/images",
				"outputPath": "./dist"
            }
        ]
	]
});

require('./index');