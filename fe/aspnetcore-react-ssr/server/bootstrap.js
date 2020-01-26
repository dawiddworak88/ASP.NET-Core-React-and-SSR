require('ignore-styles');

require('@babel/register')({
    plugins: [
        [
            "file-loader",
            {
				"name": "[name].[ext]",
				"publicPath": "/dist/images",
				"outputPath": "../server/public/dist/images"
            }
        ]
	]
});

require('./index');