import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const Cards = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card containerStyle={{ backgroundColor:'orange', borderRadius:'11px',paddingVertical:'10%',paddingHorizontal:'14%' }}>
            <Card.Title style={{color:'#FFFFFF',fontWeight: 'bold'}}>Artists</Card.Title>
          </Card>
          <Card containerStyle={{ padding:'10%',backgroundColor:'blue', borderRadius:'25px',paddingVertical:'10%',paddingHorizontal:'12%' }}>
            <Card.Title style={{color:'#FFFFFF',fontWeight: 'bold'}}>Vocalists</Card.Title>
          </Card>
          <Card containerStyle={{ backgroundColor:'green', borderRadius:'11px',paddingVertical:'10%',paddingHorizontal:'12%' }}>
            <Card.Title style={{color:'#FFFFFF',fontWeight: 'bold'}}>Producer</Card.Title>
          </Card>
          <Card containerStyle={{  backgroundColor:'indigo', borderRadius:'11px',paddingVertical:'10%',paddingHorizontal:'11%'}}>
            <Card.Title style={{color:'#FFFFFF',fontWeight: 'bold'}}>Composer</Card.Title>
          </Card>
          <Card containerStyle={{backgroundColor:'red', borderRadius:'11px' ,paddingVertical:'10%',paddingHorizontal:'13%'}}>
            <Card.Title style={{color:'#FFFFFF',fontWeight: 'bold'}}>Manager</Card.Title>
          </Card>
          <Card containerStyle={{ backgroundColor:'violet', borderRadius:'11px',paddingVertical:'10%',paddingHorizontal:'14%'}}>
            <Card.Title style={{color:'#FFFFFF',fontWeight: 'bold'}}>Studio</Card.Title>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    flexGrow:1,
    justifyContent:'space-between',
    
  }

});

export default Cards;
