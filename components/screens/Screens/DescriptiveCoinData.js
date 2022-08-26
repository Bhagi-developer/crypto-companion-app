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
  TouchableHighlight,
  Card,
  ScrollView,
  Linking,
} from 'react-native';
import ArrowUpDown from './DescriptiveCoinDataComponents/ArrowUpDown';

const DescriptiveCoinData = ({ route, navigation }) => {
  //getting props
  // const { title, description, author, urlToImage } = route.params;

  //to move back
  const moveTOOverall = () => {
    //clicking on Home
    navigation.navigate('Home');
  };

  const formatValue = (value) => {
    const formattedValue = `${parseFloat(value)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
    return formattedValue;
  };

  return (
    <ScrollView>
      <TouchableOpacity style={styles.test}>
        <Image
          source={{
            uri: route.params
              ? route.params.urlToImage
                ? route.params.urlToImage
                : 'https://etimg.etb2bimg.com/photo/89296073.cms'
              : 'https://etimg.etb2bimg.com/photo/89296073.cms',
            width: 200,
            height: 200,
          }}
          style={styles.image}
        />

        <Text style={styles.title}>
          {route.params
            ? route.params.title
              ? route.params.title
              : 'No Title Found'
            : 'Check Home Tab '}
        </Text>
      </TouchableOpacity>

      <Text style={styles.description}>
        Current Price :
        <Text style={{ color: 'green' }}>
          {route.params
            ? ' $' + formatValue(route.params.currentPrice)
              ? ' $' + formatValue(route.params.currentPrice)
              : ' No currentPrice Found'
            : ' No currentPrice Found'}
        </Text>
      </Text>

      <Text style={styles.description}>
        Market Capitalization :
        <Text style={{ color: 'green' }}>
          {route.params
            ? ' $' + formatValue(route.params.marketCap)
              ? ' $' + formatValue(route.params.marketCap)
              : ' No marketCap Found'
            : ' No marketCap Found'}
        </Text>
      </Text>

      <Text style={styles.description}>
        Market Capitalization Rank :
        <Text style={{ color: 'blue' }}>
          {route.params
            ? ' $' + route.params.marketCapRank
              ? ' $' + route.params.marketCapRank
              : ' No marketCapRank Found'
            : ' No marketCapRank Found'}
        </Text>
      </Text>

      <Text style={styles.description}>
        Total Supply :
        <Text style={{ color: 'blue' }}>
          {route.params
            ? ' $' + formatValue(route.params.totalSupply)
              ? ' $' + formatValue(route.params.totalSupply)
              : ' No totalSupply Found'
            : ' No totalSupply Found'}
        </Text>
      </Text>

      <View style={styles.CoinStatistics}>
        <View style={styles.CoinStatisticsSection}>
          <Text>
            Market Capitalization Change Percentage In 24 H :
            <Text
              style={{
                color:
                  route?.params?.marketCapChangePercentageIn24H > 0
                    ? 'green'
                    : 'red',
              }}>
              {route.params
                ? ' ' +
                  route.params.marketCapChangePercentageIn24H.toFixed(2) +
                  ' %'
                  ? ' ' +
                    route.params.marketCapChangePercentageIn24H.toFixed(2) +
                    ' %'
                  : ' No marketCapChangePercentageIn24H Found'
                : ' No marketCapChangePercentageIn24H Found'}
              {route?.params?.marketCapChangePercentageIn24H > 0 ? (
                <ArrowUpDown up="true" />
              ) : (
                <ArrowUpDown up="false" />
              )}
            </Text>
          </Text>
        </View>

        <View style={styles.CoinStatisticsSection}>
          <Text>
            Price Change Percentage 7d In Currency :
            <Text
              style={{
                color:
                  route?.params?.priceChangePercentage7dInCurrency > 0
                    ? 'green'
                    : 'red',
              }}>
              {route.params
                ? ' ' +
                  route.params.priceChangePercentage7dInCurrency.toFixed(2) +
                  ' %'
                  ? ' ' +
                    route.params.priceChangePercentage7dInCurrency.toFixed(2) +
                    ' %'
                  : ' No priceChangePercentage7dInCurrency Found'
                : ' No priceChangePercentage7dInCurrency Found'}
              {route?.params?.priceChangePercentage7dInCurrency > 0 ? (
                <ArrowUpDown up="true" />
              ) : (
                <ArrowUpDown up="false" />
              )}
            </Text>
          </Text>
        </View>
      </View>

      <Text style={styles.description}>Press Back Button To Go Back</Text>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => moveTOOverall()}
          underlayColor="#fff">
          <Text style={styles.buttonText}>Go Back To Home </Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    margin: 20,
  },
  test: { alignItems: 'center' },
  image: {
    width: Dimensions.get('window').width,
    marginTop: 20,
    borderRadius: 10,
  },
  description: {
    textAlign: 'left',
    marginHorizontal: 20,
    backgroundColor: '#E9E8E8',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    marginHorizontal: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  buttonContainer: {
    margin: 20,
  },
  CoinStatistics: {
    marginVertical: 20,
    backgroundColor: 'rgba(184, 220, 234, 0.4)',
    textAlign: 'left',
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  CoinStatisticsSection: {
    marginVertical: 10,
  },
});

export default DescriptiveCoinData;
