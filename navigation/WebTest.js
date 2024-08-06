import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import SideBar from '../Components/SideBar';

// Screens
import LibraryScreen from './webscreens/Library';
import HomeScreen from './webscreens/Home';
import PhotosScreen from './webscreens/Photos';
import MediaScreen from './webscreens/Media';
import { styles } from '../assets/styles/styles';
// import { HeaderBar } from '../Components/HeaderBar';

export default function WebTest() {
  return (
    <View style={styles.container}>
      {/* <Text>hello</Text> */}
      {/* <HeaderBar /> */}
      <SideBar />
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false, headerLeft: () => null }}>
              <Stack.Screen name="Home" component={HomeStack} />
              <Stack.Screen name="Library" component={LibraryStack} />
              <Stack.Screen name="Profile" component={MediaScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Galleries" component={HomeScreen} />
        <Stack.Screen name="Photos" component={PhotosScreen} />
    </Stack.Navigator>
);

const LibraryStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Library" component={LibraryScreen} />
    {/* Add more screens for Library stack */}
  </Stack.Navigator>
);
