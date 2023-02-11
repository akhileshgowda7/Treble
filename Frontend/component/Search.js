import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';



const SwitchComponent = () => {
const [search, setSearch] = useState("");

const updateSearch = (search) => {
  setSearch(search);
};

return (
  <View style={styles.view}>
    <SearchBar
      placeholder="What are you looking for ..."
      onChangeText={updateSearch}
      value={search}
      placeholderTextColor='white'
      // containerStyle={{backgroundColor:'white'}}
      // lightTheme='false'
    />
  </View>
);
};

const styles = StyleSheet.create({
view: {
  margin: 10,
},
});

export default SwitchComponent;