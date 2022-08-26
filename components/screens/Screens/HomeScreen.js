import React, { useRef, useMemo, useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ListItem from './cryptoChart/ListItem';

import { getMarketData } from './Services/cryptoServices';

const ListHeader = () => (
  <>
    <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Markets</Text>
    </View>
    <View style={styles.divider} />
  </>
);

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      const marketData = await getMarketData();
      setData(marketData);
    };

    fetchMarketData();
  }, []);

  const moveToPrecise = (item) => {
    navigation.navigate('DescriptiveCoinData', {
      title: item.name,
      urlToImage: item.image,
      currentPrice: item.current_price,
      marketCap: item.market_cap,
      marketCapRank: item.market_cap_rank,
      marketCapChangePercentageIn24H:item.market_cap_change_percentage_24h,
      totalSupply:item.total_supply,
      lastUpdated: item.last_updated,
      priceChangePercentage7dInCurrency:item.price_change_percentage_7d_in_currency
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            symbol={item.symbol}
            currentPrice={item.current_price}
            priceChangePercentage7d={
              item.price_change_percentage_7d_in_currency
                ? item.price_change_percentage_7d_in_currency
                : 0.0
            }
            logoUrl={item.image}
            onPress={() => {
              moveToPrecise(item);
            }}
          />
        )}
        ListHeaderComponent={<ListHeader />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  },
});
