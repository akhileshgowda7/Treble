import React from 'react';
import { StyleSheet, View,  } from 'react-native';
import { Input, Button,Text } from '@rneui/themed';
import SwitchComponent from '../component/Search';
import Cards from '../component/Cards';

export default function BrowseScreen() {
  return (
    <View style={styles.layout}>
      <View style={styles.searchBar}>
        <Text h4 style={{color:'white',marginLeft:'3%',fontWeight: 'bold'}}>Search</Text>
      <SwitchComponent  />
      </View>
      <View>
        <Text h4 style={{color:'white',marginLeft:'3%', marginTop:'10%',fontWeight: 'bold'}}>Browse all</Text>
      </View>
      <View>
        <Cards/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: { flex: 1, width: '100%',backgroundColor:'black' },
  searchBar: { width: '100%',marginTop:'5%'},
  heading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color:'black',
  },
});
