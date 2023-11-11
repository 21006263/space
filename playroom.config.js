const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  components: './src/components/index.tsx',
  outputPath: './storybook-static/playroom',
  exampleCode: `
  <PlayroomMain></PlayroomMain>
  `,
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: path.resolve(__dirname, 'src'),
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, 'src'),
          use: ['style-loader', 'css-loader',],
        },
        {
          test: /\.(svg|png|jpg)$/,
          use: ['file-loader'],
        },
        // Regla para los archivos CSS de Semantic UI
        {
          test: /\.css$/,
          include: path.resolve(__dirname, 'node_modules/semantic-ui-css'),
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
          ],
        },
      ],
    },
    plugins: [
      // Plugin para extraer CSS en archivos separados
      new MiniCssExtractPlugin(),
    ],
  }),
};

