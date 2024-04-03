/**
 * @format
 */

import {AppRegistry} from 'react-native';
import DetailTask from './screens/DetailTask';
import {name as appName} from './app.json';
import HomeScreen from './screens/HomeScreen';
import Account from './screens/Account';
import Setting from './screens/Setting';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createNativeStackNavigator();
const MyTask = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'transparentModal',
          headerShown: true,
          animation: 'slide_from_bottom',
        }}>
        <Stack.Screen name="DetailTask" component={DetailTask} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Tab = createMaterialBottomTabNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        barStyle={{
          position: 'absolute',
          // bottom: 25,
          left: 20,
          right: 20,
          // elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 20,
          // height: 70
        }}>
        <Tab.Screen
          name="MyTask"
          component={MyTask}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={26}
                style={{marginBottom: -3}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="target-account"
                color={color}
                size={26}
                style={{marginBottom: -3}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="table-settings"
                color={color}
                size={26}
                style={{marginBottom: -3}}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => AppContainer);
