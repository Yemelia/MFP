module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_moudles/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
            sourceType: "unambiguous",
          },
        },
      },
    ],
  },
};