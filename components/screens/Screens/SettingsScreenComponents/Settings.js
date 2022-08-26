import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const s1 = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (searched) => {
    setSearch(searched);
  };

  return (
    <View>
      <SearchBar
        placeholder="Search Settings..."
        onChangeText={updateSearch}
        value={search}
        style={styles.serachSettings}
      />
      <View style={styles.settingOptionContainer}>
      <Text style={styles.text}>Kindly Note: This Is a Dummy Settings UI</Text>
      </View>
      
      <TouchableOpacity>
        <View style={styles.settingOptionContainer}>
          <MaterialCommunityIcons
            name="account-outline"
            color="#000"
            size={40}
          />
          <Text style={styles.text}>Account</Text>
          <MaterialCommunityIcons name="chevron-right" color="#000" size={40} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.settingOptionContainer}>
          <MaterialCommunityIcons
            name="minus-circle-multiple-outline"
            color="#000"
            size={40}
          />
          <Text style={styles.text}>Notification</Text>
          <MaterialCommunityIcons name="chevron-right" color="#000" size={40} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.settingOptionContainer}>
          <MaterialCommunityIcons
            name="eye-circle-outline"
            color="#000"
            size={40}
          />
          <Text style={styles.text}>Appearance</Text>
          <MaterialCommunityIcons name="chevron-right" color="#000" size={40} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.settingOptionContainer}>
          <MaterialCommunityIcons name="security" color="#000" size={40} />
          <Text style={styles.text}>Privacy & Security</Text>
          <MaterialCommunityIcons name="chevron-right" color="#000" size={40} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.settingOptionContainer}>
          <MaterialCommunityIcons name="headset" color="#000" size={40} />
          <Text style={styles.text}>Help and Support</Text>
          <MaterialCommunityIcons name="chevron-right" color="#000" size={40} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.settingOptionContainer}>
          <MaterialCommunityIcons
            name="help-circle-outline"
            color="#000"
            size={40}
          />
          <Text style={styles.text}>About</Text>
          <MaterialCommunityIcons name="chevron-right" color="#000" size={40} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default s1;

const styles = StyleSheet.create({
  serachSettings: {},
  settingOptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginHorizontal: 20,
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
