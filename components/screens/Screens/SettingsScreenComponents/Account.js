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

const s2 = () => {
  return (
    <View style={styles.userInfoSection}>  <View style={styles.optionContainer}>
      <Text style={styles.text}>Kindly Note: This Is a Dummy Account UI</Text>
      </View>
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
          <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
          <Caption style={styles.caption}>Following</Caption>
        </View>
        <View style={styles.section}>
          <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
          <Caption style={styles.caption}>Followers</Caption>
        </View>
      </View>
    </View>
  );
};

export default s2;
const styles = StyleSheet.create({
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
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
    optionContainer: {
    paddingTop: 10,
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    cursor: 'pointer',
    paddingBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 'auto',
  },
});
