import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  Button,
  Pressable,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import bitcoinData from '../Local_Articles/bitcoinData';
import coinData from '../ExploreScreenData/data';

const ExploreScreen = ({ navigation }) => {
  return (
    <FlatList
      data={coinData}
      renderItem={(item) => {
        return (
          <ScrollView>
            <View style={styles.optionContainer}>
              <Text style={styles.title}>{item.item.title}</Text>
              <Text style={styles.subTitle}>Add To News</Text>
              <TouchableOpacity>
                <Icon
                  name="email-newsletter"
                  color="#000"
                  size={26}
                  style={styles.icon}
                  onPress={() =>
                    navigation.navigate('News', {
                      title: item.item.title,
                      data: bitcoinData,
                    })
                  }
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    height: 60,
    alignItems: 'center',
    margin: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    cursor: 'pointer',
  },
  subTitle: {},
  icon: {},
});

export default ExploreScreen;
