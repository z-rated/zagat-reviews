module.exports = {
  entry: {
    main: __dirname + '/client/src/index.jsx',
},
  
  module: {
    rules: [
      {
        test: [/\.js?x$/], 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader', options: {
            presets: ['@babel/preset-react',
            '@babel/preset-env']
          }
        }
      },
      {
        test: [/\.css$/], 
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]--[local]--[hash:base64:8]'
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: [/\.(woff|woff2|eot|tff|ptf)$/],
        use: [
          'file-loader'
        ]
      }
    ]
  },

   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },

};

