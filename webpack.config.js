const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './index.js',
  mode: isDevelopment ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index_bundle.js',
    publicPath: isDevelopment ? '/' : '/portfolio/',
  },
  target: 'web',
  devServer: {
    port: '5000',
    static: {
      // Serve from the root directory (or 'public' if your assets are there) in development
      directory: path.join(__dirname)
    },
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
    client: {
      overlay: {
        runtimeErrors: error => {
          const ignoreErrors = [
            'ResizeObserver loop completed with undelivered notifications.'
          ]
          return !ignoreErrors.includes(error.message)
        }
      }
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match both .js and .jsx files
        exclude: /node_modules/, // Exclude dependencies in node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|mp4)$/i, // Add more extensions as needed
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // This preserves the file's original name and path
            },
          },
        ],
      },
      {
        test: /\.(glb|gltf)$/, // Match both .glb and .gltf files if needed
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // Keep original path and name
            },
          },
        ],
      },
      {
        test: /\.stl$/, // Match .stl files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // Keep original path and name
            },
          },
        ],
      },
      {
        test: /\.ico$/, // Match .ico files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // Keep original path and name
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // This will clear out the build folder before each new build
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets/images/favicon.ico', to: isDevelopment ? '' : 'src/assets/images/' },
      ],
    }),
  ]
};