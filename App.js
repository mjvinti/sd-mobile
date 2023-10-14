import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EventsScreen from './screens/EventsScreen';
import HomeScreen from './screens/HomeScreen';
import MessagesScreen from './screens/MessagesScreen';
import UsersScreen from './screens/UsersScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen component={HomeScreen} name='Home' />
          <Tab.Screen component={MessagesScreen} name='Messages' />
          <Tab.Screen component={UsersScreen} name='People' />
          <Tab.Screen component={EventsScreen} name='Events' />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
