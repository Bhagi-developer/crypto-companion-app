import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDark = () => {
    setIsDarkMode(!isDarkMode);
    if (iconName == 'emoticon-sad-outline') {
      setIconName('emoticon-happy-outline');
    } else {
      setIconName('emoticon-sad-outline');
    }
  };

  const [iconName, setIconName] = useState('emoticon-sad-outline');

  return (
    <View style={{ flex: 1 }}>
      <Title style={styles.title}>
        Please Note: I Have Used Dummy Data For Account UI
      </Title>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/83909096?s=400&u=5192b2c138d0ab37c851174cd84424b9b8bc5068&v=4',
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Bhagi Makwana</Title>
                <Caption style={styles.caption}>@b_Makwana</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Acoount and Settings"
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="book-open-outline" color={color} size={size} />
              )}
              label="Descriptive_News"
              onPress={() => {
                props.navigation.navigate('Descriptive_News');
              }}
            />

             <DrawerItem
              icon={({ color, size }) => (
                <Icon name="book-open-outline" color={color} size={size} />
              )}
              label="DescriptiveCoinData"
              onPress={() => {
                props.navigation.navigate('DescriptiveCoinData');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Make Below Emoji Happy">
            <TouchableRipple
              onPress={() => {
                toggleDark();
              }}>
              <View style={styles.preference}>
                <Text>I Like The App</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkMode} />
                </View>
              </View>
            </TouchableRipple>
            <View style={styles.emojiIconContainer}>
              <Icon name={iconName} style={styles.emojiIcon} />
            </View>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  emojiIconContainer: {
    textAlign: 'center',
  },
  emojiIcon: {
    fontSize: 50,
  },
});

export default DrawerContent;
