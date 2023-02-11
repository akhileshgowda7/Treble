import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Header = (props) => {
  const docsNavigate = () => {
    Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`);
  };

  const playgroundNavigate = () => {
    Linking.openURL(`https://@rneui/themed.js.org/#/${props.view}`);
  };

  return (
    <SafeAreaProvider>
      <HeaderRNE
        leftComponent={{
          icon: 'menu',
          color: '#fff',
        }}
        rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={docsNavigate}>
              <Icon type="ionicons" name="notifications" color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={playgroundNavigate}
            >
              <Icon type="ionicons" name="settings" color="white" />
            </TouchableOpacity>
          </View>
        }
        centerComponent={{ text: props.name, style: styles.heading }}
      />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    // marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;
