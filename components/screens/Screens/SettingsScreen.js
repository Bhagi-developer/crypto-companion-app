import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Button,
} from 'react-native';
import s1 from './SettingsScreenComponents/Settings';
import s2 from './SettingsScreenComponents/Account';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function SettingsScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={s1} />
      <Tab.Screen name="Account" component={s2} />
    </Tab.Navigator>
  );
}

export default SettingsScreen;
