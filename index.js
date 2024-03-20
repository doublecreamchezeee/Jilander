/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import TaskInfo from './screens/Firebase';
import HomeScreenWithDaytimeProvider from './screens/HomeScreen'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomeScreenWithDaytimeProvider);
