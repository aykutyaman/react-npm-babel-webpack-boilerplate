# react-npm-babel-webpack-boilerplate

## Installation
```
$ git clone git@github.com:aykutyaman/react-npm-babel-webpack-boilerplate.git
$ cd react-npm-babel-webpack-boilerplate
$ npm install
```
## For development
Run webpack in watch mode with the webpack.config.dev.js config file
```
$ npm run dev
```
Now edit [index.jsx](https://github.com/aykutyaman/react-npm-babel-webpack-boilerplate/blob/master/lib/index.jsx) file:
```
import React from 'react';

const Hello = React.createClass({
  render: function() {
    return (<div>Hello World!</div>)
  }
});

export default Hello;
```
After that open [index.html](https://github.com/aykutyaman/react-npm-babel-webpack-boilerplate/blob/master/examples/index.html)
in browser to see the result.

## For npm deploy with travis.ci
add these to .travis.ci file
```
deploy:
  provider: npm
  on:
    branch: master
```
After that, execute travis cli command, which encrypt your api_key and add it to the .travis.ci file.
```
$ travis encrypt YOUR_API_KEY --add deploy.api_key
```
Your api_key will be in the form of ```//registry.npmjs.org/:_authToken=API_KEY``` under the ~/.npmrc file if you use ``` npm login ``` command
