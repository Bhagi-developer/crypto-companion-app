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
import Constants from 'expo-constants';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Descriptive_News = ({ route, navigation }) => {
  //getting props
  // const { title, description, author, urlToImage } = route.params;

  //to move back
  const moveTOOverall = () => {
    //clicking on Home
    navigation.navigate('News');
  };

  return (
    <ScrollView>
      <TouchableOpacity style={styles.test}>
        <Image
          source={{
            uri: route.params
              ? route.params.urlToImage
                ? route.params.urlToImage
                : 'https://cdn.pixabay.com/photo/2017/06/10/07/16/folder-2389217__480.png'
              : 'https://cdn.pixabay.com/photo/2017/06/10/07/16/folder-2389217__480.png',
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
            : 'Check News Tab For News'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.description}>
        {route.params
          ? route.params.description
            ? route.params.description
            : 'No Description Found'
          : 'No Description Found'}
      </Text>

      <Text style={styles.description}>
        {route.params ? (
          route.params.urlToRead ? (
            <Text
              style={{ color: 'blue' }}
              onPress={() => Linking.openURL(route.params.urlToRead)}>
              Read More
            </Text>
          ) : (
            'No URL Found'
          )
        ) : (
          'No URL Found'
        )}
      </Text>

      <Text style={styles.description}>Press Back Button To Go Back</Text>
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => moveTOOverall()}
          underlayColor="#fff">
          <Text style={styles.buttonText}>Go Back To News </Text>
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
});

// <TouchableOpacity>
//         <Card>
// <Image
//   source={{
//     uri: 'https://blogger.googleusercontent.com/img/a/AVvXsEhiFZua2TKlWOHoZ5qipQ8zBVpSMbXNdxOFJmwNkddvji4GqJRO4SonCCmwV_IBrxtHCb2UlJ850RuZPY75s54QZkedzrYthaQqoo4tuOD3zUbMhTGxJ2T-rFtSu8I1vRJY9RtH8dWw7_5XtGfoeUvJuAWZU-U9XLsHKTKffBSWD6G9su34rjkO0sYD-w=w1200-h630-p-k-no-nu',
//     width: 200,
//     height: 200,
//   }}
//   style={styles.image}
// />

//           <Text style={styles.title}>
//             {route.params ? route.params.title : 'title'}
//           </Text>
//         </Card>
//       </TouchableOpacity>
// <Text style={styles.description}>
//   {route.params ? route.params.description : 'description'}
// </Text>

// <View style={styles.buttonContainer}>
//   <TouchableHighlight
//     style={styles.button}
//     onPress={() => moveTOOverall()}
//     underlayColor="#fff">
//     <Text style={styles.buttonText}>Home</Text>
//   </TouchableHighlight>
// </View>

export default Descriptive_News;
