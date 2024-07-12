// Author: Ryan Pinkney
// This is view that will be the base structure of the web pages.
// We plan to have all the navigation controlled by this view.

import { StyleSheet, Text, FlatList, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { createDrawerNavigator } from '@react-navigation/drawer';

//import { createStackNavigator } from '@react-navigation/stack';

// Screens
//import WebHomeScreen from '../navigation/webscreens/WebHomeScreen';
//import WebProfileScreen from '../navigation/webscreens/WebProfileScreen';
//import WebSearchScreen from './webscreens/WebSearchScreen';
//import SingleLoadDetails from '../Components/SingleLoadDetails';
//import WebLogIn from './webscreens/WebLogIn'

import SettingsScreen from '../navigation/mobilescreens/Settings';
import HomeScreen from './mobilescreens/Home';
import ProfileScreen from './mobilescreens/Profile';

const Stack = createStackNavigator();

export default function MobileMain() {


  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{
    //   headerShown: false,
    //   headerBackTitleVisible: false}}>
    //       <Stack.Screen name="Login" component={HomeScreen} />
    //       <Stack.Screen name="TopTapsNavigator" component={TopTabsNavigator} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === settingsName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (rn === profileName) {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>

                },
            })}
            BottomTabNavigationOptions={{
                "tabBarInactiveTintColor": "grey",
                "tabBarLabelStyle": {
                  "paddingBottom": 5,
                  "fontSize": 10
                },
                "tabBarStyle": [
                  {
                    "display": "flex"
                  },
                  null
                ]
              }}

            >

            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={settingsName} component={SettingsScreen}/>
            <Tab.Screen name={profileName} component={ProfileScreen}/>

        </Tab.Navigator>
    </NavigationContainer>
  );
}

// Screen Names
const homeName = 'Home';
const settingsName = 'Settings';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

//const Stack = createStackNavigator();

//const Tab = createMaterialTopTabNavigator();

const Tab1 = () => (
  // Your content for Tab 1
   <HomeScreen />
);

const Tab2 = () => (
  // Your content for Tab 2
  <ProfileScreen />
);

const TopTabsNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Settings" component={SearchStack} />
    <Tab.Screen name="Home" component={Tab1} />
    <Tab.Screen name="Profile" component={Tab2} />
  </Tab.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator screenOptions={{
      headerShown: true,
      headerTitleStyle: {
          color: '#000000',
        },
    }}>
      <Stack.Screen name="Loads" component={SettingsScreen} options={{ headerShown: false}} />
      <Stack.Screen name="Details" component={HomeScreen} />
  </Stack.Navigator>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: 100,
  },
});