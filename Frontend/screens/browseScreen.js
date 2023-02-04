import React from 'react';
import { StyleSheet, View,  } from 'react-native';
import { Input, Button,Text } from '@rneui/themed';
import SwitchComponent from '../component/Search';
import Cards from '../component/Cards';

export default function BrowseScreen() {
  return (
    <View style={styles.layout}>
      <View style={styles.heading}>
        <Text h4 style={{color:'#FFFFFF',marginTop:'5%'}}>What are you Looking For?</Text>
      </View>
      <SwitchComponent style={styles.searchBar} />
      <View>
        <Cards/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: { flex: 1, marginTop: '20%', width: '100%',backgroundColor:'#9619B2' },
  searchBar: { width: '100%' },
  heading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color:'black',
  },
});
