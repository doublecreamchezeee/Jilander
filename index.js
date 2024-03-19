/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomeScreenWithDaytimeProvider from './screens/HomeScreen'
import Firestore from './screens/Firebase';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Firestore);
