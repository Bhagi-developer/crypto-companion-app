import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ArrowUpDown = (props) => {
  if (props?.up=="true") {
      return (
        <Icon name="arrow-up" color="green" size={24}  />
      );
    } else {
      return (
        <Icon name="arrow-down" color="red" size={24}  />
      );
    }
};

export default ArrowUpDown;
