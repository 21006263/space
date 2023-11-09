const path = require('path');
module.exports = {
  components: './src/components/index.tsx',
  outputPath: './storybook-static/playroom',
  widths: [
    ['Playroom1', 320],
    ['Playroom1', 576],
    ['Playroom3', 768],
    ['Playroom4', 768],
    ['Playroom5', 1200],
  ],
  exampleCode: `
  <CompleteComponent
  primary={true}
  size="large"
  headerText="Main Header"
  contentText="This is the content of the component."
  footerText="Footer"
  textAreaValue="Example text in text area."
  onButtonClick={() => alert("¡You have pressed botón!")}
  onTextAreaChange={(e) => console.log(e.target.value)}
  onHomeButtonClick={() => alert('You have pressed "Home"')}
  onAboutButtonClick={() => alert('You have pressed "About"')}
  onContactButtonClick={() => alert('You have pressed botón "Contact"')}
  onAlertAboutClick={() => alert('You have pressed "About"')}
  onAlertContactClick={() => alert('You have pressed "Contact"')}
/>
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
      ],
    },
  }),
};
