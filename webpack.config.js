const path = require( 'path' );
const webpack = require('webpack');

module.exports = {
  name: 'react-setting',
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./src/index'],
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['>1% in KR','last 2 chrome versions'],
            },
            debug:true,
          }],
          '@babel/preset-react',
        ],
        plugins: ['@babel/plugin-proposal-class-properties',
        'react-hot-loader/babel'],
      }
    },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true } ),
  ],

  output: {
    //실제경로
    path: path.join( __dirname, 'dist' ),
    filename: 'app.js',
    publicPath: "dist/",
  },

};
