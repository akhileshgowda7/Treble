import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login';
import { ThemeProvider, Button, createTheme } from '@rneui/themed';
import HomeScreen from './screens/homeScreen';
import { NavigationContainer } from '@react-navigation/native';
import SwitchComponent from './component/Search';
import BrowseScreen from './screens/browseScreen';
import Tabs from './component/Tabs';


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <BrowseScreen/>
        <Tabs style={styles.tabs}/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
