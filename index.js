/**
 * @format
 */

import {AppRegistry} from 'react-native';
import DetailTask from './screens/DetailTask';
import {name as appName} from './app.json';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const MainStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailTask" component={DetailTask} />
      </Stack.Navigator>
    );
  };

const AppContainer = () => {
    return (
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
    );
};

AppRegistry.registerComponent(appName, () => AppContainer);
