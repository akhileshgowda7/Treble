import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const Cards = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card containerStyle={{ padding:'10%',flexGrow:1, backgroundColor:'black' }}>
            <Card.Title style={{color:'#FFFFFF'}}>ARTISTS</Card.Title>
          </Card>
          <Card containerStyle={{ padding:'10%',backgroundColor:'black'}}>
            <Card.Title style={{color:'#FFFFFF'}}>VOCALISTS</Card.Title>
          </Card>
          <Card containerStyle={{ padding:'10%',flexGrow:1,backgroundColor:'black' }}>
            <Card.Title style={{color:'#FFFFFF'}}>PRODUCER</Card.Title>
          </Card>
          <Card containerStyle={{ padding:'10%',flexGrow:1 ,backgroundColor:'black'}}>
            <Card.Title style={{color:'#FFFFFF'}}>COMPOSER</Card.Title>
          </Card>
          <Card containerStyle={{ padding:'10%',flexGrow:1,backgroundColor:'black' }}>
            <Card.Title style={{color:'#FFFFFF'}}>MANAGER</Card.Title>
          </Card>
          <Card containerStyle={{ padding:'10%' ,flexGrow:1,backgroundColor:'black'}}>
            <Card.Title style={{color:'#FFFFFF'}}>STUDIO</Card.Title>
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
