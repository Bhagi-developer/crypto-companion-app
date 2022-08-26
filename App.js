// In App.js in a new project
// ---------------
// passing stack navigator to Drawer Navigator as component
//HomeStack to Home and DetailStack to Detail
// this stack navigators are HomeStack and DetailStack
//Both are treated as Stack itself
//HomeStack has Home component and
//DetailStack has Detail component
// Above structure is for Drawer and Stack Navigator combine screen
//......................
//stack can be used as a component in drawer and tab also
// ..........................
//drawer -->tab-->stack screen this is order of navigators in which we can use next as component

import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import { SearchBar } from 'react-native-elements';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//////////
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './components/screens/MainScreen';

import { createStackNavigator } from '@react-navigation/stack';
import DrawerContent from './components/screens/DrawerContent';
import Descriptive_News from './components/screens/Screens/Descriptive_News';
import DescriptiveCoinData from './components/screens/Screens/DescriptiveCoinData';
import SettingsScreen from './components/screens/Screens/SettingsScreen';
import OnBoardScreen from './components/screens/OnBoardScreen';
const Drawer = createDrawerNavigator();

function App() {
  const [isIntroduced, setIntroduced] = React.useState(false);

  const handleIntro = () => {
    setIntroduced(true);
  };

  return isIntroduced ? (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Crypto-Companion App" component={MainScreen} />
        <Drawer.Screen name="Descriptive_News" component={Descriptive_News} />
        <Drawer.Screen
          name="DescriptiveCoinData"
          component={DescriptiveCoinData}
        />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <OnBoardScreen handleIntro={handleIntro} />
  );
}

export default App;

const styles = StyleSheet.create({});
