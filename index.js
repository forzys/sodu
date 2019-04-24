/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from './src/core/base/index';
import {name as appName} from './app.json';

console.disableYellowBox = true//关闭警告
AppRegistry.registerComponent(appName, () => App);
