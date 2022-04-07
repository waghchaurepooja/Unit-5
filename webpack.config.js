
const path = require("path");
const BundleMake = 
{
    entry : "./src/index.js",
    output :
    {
        path : path.resolve(".", "build"),
        
        filename : "bundle.js",
    },
    mode : "development",

    module : 
    {
        rules : 
        [
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    }
}

module.exports = BundleMake;