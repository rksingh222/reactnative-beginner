// when moving the js files like App.js, customButton.js and Header.js in src folder go to in react native directory
// index.js  should be changed and App.js was my main file from where the application is starting

/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import App from './src/App';  // here is the change
 import {name as appName} from './app.json';
 
 AppRegistry.registerComponent(appName, () => App);
 
 
 