const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const PATHS = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist')
};

const filename = ext => isDev ? `[name]${ext}` : `[name].[hash].${ext}`;

const optimization = () => {
  const config = {
    splitChunks:{
      chunks: 'all'
    }
  };

  if( isProd ){
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config;
}

const imagesLoaders = [
  {
    loader: 'file-loader',
    options: {
      name: 'img/[name].[hash].[ext]'
    }
  }
];

if(isProd){
  imagesLoaders.push({
    loader: 'image-webpack-loader',
    options: {
      mozjpeg: {
        progressive: true,
      },
      optipng: {
        enabled: false,
      },
      pngquant: {
        quality: [0.65, 0.90],
        speed: 4
      },
      gifsicle: {
        interlaced: false,
      },
      webp: {
        quality: 75
      }
    }
  });
}

module.exports = {
  context: PATHS.src,
  mode: 'development',
  entry: {
    'script': `${PATHS.src}/page/entry.js`
  },
  output:{
    filename: '[name].js',
    path: PATHS.dist,
    publicPath: '',
  },
  resolve:{
    alias:{
      '@': PATHS.src
    }
  },
  devServer:{
    port: 4200,
    hot: isDev,
    open: true,
    contentBase: PATHS.dist,
  },
  devtool: isDev ? 'source-map' : '',
  optimization: optimization(),
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin( filename('css') ),
    new MomentLocalesPlugin({
      localesToKeep: ['es-us', 'ru'],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${PATHS.src}/page/index.html`,
      chunks: 'index',
      alwaysWriteToDisk: true,
      hash: true,
      minify:{
        collapseWHiteSpace: isProd
      },
      getPaths: () => {
        return PATHS;
      }
    }),
  ],
  module:{
    rules:[
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hrm: isDev,
              reloadAll: true
            },
          },
          {
            loader: "css-loader",
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        loaders: imagesLoaders,
      },
      {
        test: /\.(scss|sass)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hrm: isDev,
              reloadAll: true
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "resolve-url-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          },
        ]
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options:{
            presets:[
              [
                '@babel/preset-env',
                {
                  'targets': 'defaults',
                }
              ]
            ],
          }
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ]
  }
};