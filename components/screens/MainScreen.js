import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './Screens/HomeScreen';
import NewsScreen from './Screens/NewsScreen';
import ExploreScreen from './Screens/ExploreScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#000',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarStyle: {
            backgroundColor: '#FFA6A6',
          },
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="#000" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarStyle: {
            backgroundColor: '#FDFDBF',
          },
          tabBarIcon: () => (
            <MaterialCommunityIcons name="newspaper" color="#000" size={24} />
          ),
        }}
      />

      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: 'News',
          tabBarStyle: {
            backgroundColor: '#C6C6C7',
          },
          tabBarIcon: () => (
            <MaterialCommunityIcons name="email-newsletter" color="#000" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
