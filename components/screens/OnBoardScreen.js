import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import Swiper from 'react-native-swiper';
const OnBoardScreen = ({ handleIntro }) => {
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide1}>
        <Image
          source={require('../../assets/image1.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Welcome To Crypto-Companion App</Text>
        <Text style={styles.subTitile}>
          Get Latest News And Updates On Cryptocurrencies
        </Text>
      </View>
      <View style={styles.slide2}>
        <Image
          source={require('../../assets/image2.png')}
          style={styles.image}
        />
        <Text style={styles.title2}>
          All Most Popular Cryptocurrencies At One Place
        </Text>
        <Text style={styles.subTitile2}>
          App Contains All Popular Cryptocurrencies
        </Text>
      </View>
      <View style={styles.slide3}>
        <Image
          source={require('../../assets/image3-2.png')}
          style={styles.image}
        />
        <Text style={styles.title3}>Crypto-Companion App</Text>
        <Text style={styles.subTitile2}>
          Start Your Crypto Journey With Crypto-Companion App
        </Text>
        <Button
          title="Let's Start"
          onPress={() => {
            handleIntro();
          }}
        />
      </View>
    </Swiper>
  );
};

export default OnBoardScreen;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  title2: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
  },
  title3: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 30,
  },
  subTitile: {
    textAlign: 'center',
    fontSize: 17,
    marginTop: 20,
    color: '#fff',
    margin: 20,
  },
  subTitile2: {
    textAlign: 'center',
    fontSize: 17,
    margin: 20,
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7A337',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  image: {
    height: Dimensions.get('window').height / 1.7,
    marginTop: -250,
    width: Dimensions.get('window').width,
  },
});
