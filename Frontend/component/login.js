import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from '@rneui/themed';

export default function Login() {
  return (
    <View style={styles.layout}>
      <View style={styles.header}>
        <Text style={styles.indigo}>Treble</Text>
      </View>
      <View style={styles.input}>
        <Input placeholder="username" />
        <Input placeholder="Password" secureTextEntry={true} />
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
  input: { width: 350, marginTop: 50 },
  loginButton: { flexDirection: 'row', justifyContent: 'space-around' },
  header: { marginTop: 200, flexDirection: 'row', justifyContent: 'center' },
  indigo: { color: 'indigo', fontSize: 100 },
});
