import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, Text } from '@rneui/themed';
import SwitchComponent from '../component/Search';
import Cards from '../component/Cards';
import Header from '../component/header';
import ProfileSelf from '../component/ProfileSelf';

export default function Profile() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Header name="Treble" /> */}
      <ProfileSelf name="Gabe" username="@Gabe" numberOfSongs="1,234" />
    </View>
  );
}

const styles = StyleSheet.create({});
