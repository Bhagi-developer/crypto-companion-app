import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableHighlight,
} from 'react-native';

const NewsScreen = ({ route, navigation }) => {
  const [selectedData, setSelectedData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //clicking on any news
  const webViewOfNewsInstruction = {
    title: "This App is Using newsapi.org's API for News Rendering",
    description:
      'As per limitations of this api, we cannot render data received from api on an online platform without a subcription. Click on "My Devie" From Upper Tabs To Use This App Properly.',
    author: 'Bhagirath Makwana',
    urlToImage:
      'https://blog.bit.ai/wp-content/uploads/2018/12/Instruction-Manual-Asset-bit.ai_.png',
    url: 'https://newsapi.org/',
  };

  const moveToPrecise = (item) => {
    navigation.navigate('Descriptive_News', {
      title: item.title,
      description: item.description,
      author: item.author,
      urlToImage: item.urlToImage,
      urlToRead: item.url,
    });
  };

  //getting props
  // const { title,data } = route.params ? route.params : 'none';
  let { title, data } = route.params
    ? route.params
    : { title: 'title', data: [] };

  //url for api
  const apiURL = `https://newsapi.org/v2/everything?q=${title}&apiKey=033d86f76ecb4cd79d5d6c9ae3a816af&pageSize=30`;

  //api data
  const [DATA, setDATA] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(apiURL);

      const resultJson = await result.json();
      setLoading(false);

      setDATA(resultJson.articles);

      setSelectedData(DATA);
    };
    fetchData();
  }, [DATA, apiURL]);

  //function returns item component
  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity
        onPress={() => {
          moveToPrecise(item);
        }}>
        <Image
          source={{
            uri: item.urlToImage
              ? item.urlToImage
              : 'https://images2.markets.businessinsider.com/60eead35a8d8c00019b030b2?format=jpeg',
            height: 200,
          }}
          style={styles.image}
        />

        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {isLoading ? (
        <View>
          <Text> Loading </Text>
        </View>
      ) : route.params ? (
        <SafeAreaView style={{ flex: 1 }}>
          <View>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.source.id}
              extraData={selectedData}
            />
          </View>
          <View style={styles.instructionContainer}>
            <Text style={styles.ignoreTitle}>
              Ignore Following Post Only If You Are Using This App On "Expo Go"
              Application
            </Text>
            <View style={styles.instructionPostContainer}>
              <TouchableOpacity
                onPress={() => {
                  moveToPrecise(webViewOfNewsInstruction);
                }}>
                <Image
                  source={{
                    uri: 'https://media.istockphoto.com/vectors/suspecting-emoticon-vector-id167222529?k=20&m=167222529&s=612x612&w=0&h=kMuBz1m6gvcS9r5soJ21Vm1fFImt34lHHPim625ITuo=',
                    height: 200,
                  }}
                  style={styles.image}
                />

                <Text style={styles.title}>
                  Hmmmm.... Probably You Are Using The App From "snack.expo.dev"
                  Website. Click On This Post To See Further Instructions.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      ) : (
        <Text style={styles.text}>
          Go To Explore Page And Click On One Of The Coin Icon On Right Side To
          View News On This Page
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  ignoreTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  text: {
    textAlign: 'center',
  },
  image: {
    // width: Dimensions.get('window').width,
    width: '100%',
  },
  // instructionPostContainer: {
  //   display: {instructionDisplay},
  // },
  buttonContainer: {
    margin: 20,
  },
});

export default NewsScreen;
