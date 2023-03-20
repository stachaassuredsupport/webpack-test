const path = require ('path')

module.exports = {
    mode: 'development', 
    entry: {
       bundle_custom: path.resolve(__dirname, 'src/index.js'),
       //there can be multiple entry sources
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
         //[name] is reffering to the name in the entry part. Right now it is "bundle_custom" see line 6" 
        filename: '[name].js',
    },
}