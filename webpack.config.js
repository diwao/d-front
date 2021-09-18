module.exports = {
  mode: 'development',
  entry: {
    app: ['./app/src/ts/app.ts'],
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: ['web', 'es5'],
};

if (process.env.NODE_ENV !== 'production') {
  module.exports.devtool = 'inline-source-map';
}
