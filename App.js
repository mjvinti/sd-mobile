import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import MessagesScreen from './screens/MessagesScreen';
import UsersScreen from './screens/UsersScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            component={HomeScreen}
            name='Home'
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons color={color} name='home' size={size} />
              )
            }}
          />
          <Tab.Screen
            component={MessagesScreen}
            name='Messages'
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons color={color} name='chatbox' size={size} />
              )
            }}
          />
          <Tab.Screen
            component={UsersScreen}
            name='Users'
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons color={color} name='people' size={size} />
              )
            }}
          />
          <Tab.Screen
            component={EventsScreen}
            name='Events'
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons color={color} name='calendar' size={size} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
