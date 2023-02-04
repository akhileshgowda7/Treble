import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
import BrowseScreen from '../screens/browseScreen';
import Login from '../screens/login';

const Tabs = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
        }}
        variant="default"
        backgroundColor="black"
        containerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 75,
        }}
        // scrollable="True"
      >
        <Tab.Item
          title="Home"
          titleStyle={{ fontSize: 11, color: 'white' }}
          icon={{ name: 'home', type: 'font-awesome', color: 'white' }}
          containerStyle={{}}
        />
        <Tab.Item
          title="Search"
          titleStyle={{
            fontSize: 11,
            color: 'white',
          }}
          icon={{ name: 'search', type: 'font-awesome', color: 'white' }}
          onPress={() => {
            <BrowseScreen />;
          }}
        />
        <Tab.Item
          title="Post"
          titleStyle={{ fontSize: 11, color: 'white' }}
          icon={{ name: 'plus', type: 'font-awesome', color: 'white' }}
        />
        <Tab.Item
          title="Chat"
          titleStyle={{ fontSize: 11, color: 'white' }}
          icon={{ name: 'comment', type: 'font-awesome', color: 'white' }}
        />
        <Tab.Item
          title="Profile"
          titleStyle={{ fontSize: 11, color: 'white' }}
          icon={{ name: 'user', type: 'font-awesome', color: 'white' }}
          onPress={() => {
            <Login />;
          }}
        />
      </Tab>

      {/* <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
        <Text h1>Recent</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
        <Text h1>Favorite</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
        <Text h1>Cart</Text>
      </TabView.Item>
    </TabView> */}
    </>
  );
};

export default Tabs;
