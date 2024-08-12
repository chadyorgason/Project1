import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import SideBar from '../Components/SideBar';

// Screens
import LibraryScreen from './webscreens/Library';
import HomeScreen from './webscreens/Home';
import PhotosScreen from './webscreens/Photos';
import ProfileScreen from './webscreens/Profile';
import { styles } from '../assets/styles/styles';
import HeaderBar from '../Components/HeaderBar';

export default function WebTest({stack}) {
  return (
    <View style={styles.main}>
      <HeaderBar navigation={navigation}/>
      <View style={styles.container}>
        <SideBar navigation={navigation}/>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, headerLeft: () => null }}>
                <Stack.Screen name="home" component={stack} />
                {/* <Stack.Screen name="library" component={libraryStack} />
                <Stack.Screen name="profile" component={profileStack} /> */}
            </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export const HomeStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Galleries" component={HomeScreen} />
        <Stack.Screen name="Photos" component={PhotosScreen} />
    </Stack.Navigator>
);

export const LibraryStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Library" component={LibraryScreen} />
    {/* Add more screens for Library stack */}
  </Stack.Navigator>
);

export const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Profile" component={ProfileScreen} />
    {/* Add more screens for Library stack */}
  </Stack.Navigator>
);