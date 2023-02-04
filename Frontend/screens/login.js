import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from '@rneui/themed';

export default function Login() {
  return (
    <View style={styles.layout}>
      <View style={styles.header}>
        <Text style={styles.indigo}>Treble</Text>
        {/* <Text style={styles.black}>Login</Text> */}
      </View>
      <View style={styles.input}>
        <Input placeholder="username" style={styles.username} />
        <Input
          placeholder="Password"
          style={styles.password}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.loginButton}>
        <Button
          title="Log in"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
            backgroundColor: '#4B0082',
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
          containerStyle={{
            marginHorizontal: 50,
            height: 50,
            width: 125,
            marginVertical: 10,
          }}
          onPress={() => console.log('aye')}
        />
        <Button
          title="Sign Up"
          loading={false}
          loadingProps={{ size: 'small', color: 'white' }}
          buttonStyle={{
            backgroundColor: '#4B0082',
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
          containerStyle={{
            marginHorizontal: 50,
            height: 50,
            width: 125,
            marginVertical: 10,
          }}
          onPress={() => console.log('signup')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: { flex: 1 },
  header: {
    height: 110,
    width: 335,
    top: 200,
    left: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: { width: 283, Height: 40, marginTop: 220, marginLeft: 46 },
  password: { width: 283, height: 40, marginTop: 5, marginLeft: 46 },
  indigo: { color: 'indigo', fontSize: 100 },
  label: { width: 279, height: 47, top: 295, left: 144 },
  black: { fontSize: 30, marginTop: 20 },
  loginButton:{flexDirection:'row', justifyContent:'space-around'}
});
