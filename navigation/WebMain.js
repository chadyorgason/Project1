// Author: Chad Yorgason
// This is view that will be the base structure of the web pages.
// We plan to have all the navigation controlled by this view.
// We use stack navigation and a top navigation bar for now
// We'll probably implement sidebar navigation too

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Screens
import LibraryScreen from './webscreens/Library';
import HomeScreen from './webscreens/Home';
import MediaScreen from './webscreens/Media';
import PhotosScreen from './webscreens/Photos';
// import ViewOnlyPage from '../Components/ViewOnlyGallery';

export default function WebMain() {


  return (

    <NavigationContainer>
        
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={{headerShown: false}}
            BottomTabNavigationOptions={{
                tabBarInactiveTintColor: "grey",
                tabBarLabelStyle: {
                  fontSize: 10
                },
                tabBarStyle: [
                  {
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    paddingTop: 0,
                  },
                  null
                ]
              }}>

            <Tab.Screen name={homeName} component={HomeStack}/>
            <Tab.Screen name={libraryName} component={LibraryStack}/>
            <Tab.Screen name={MediaName} component={MediaScreen}/>
            {/* <Tab.Screen name="DisplayPage" component={ViewStack} /> */}

        </Tab.Navigator>
    </NavigationContainer>


  );
}


// Screen Names
const homeName = 'Home';
const libraryName = 'Library';
const MediaName = 'Media';

//const Tab = createBottomTabNavigator();

//const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


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

const HomeStack = () => (
  <Stack.Navigator screenOptions={{
      headerShown: true,
      headerTitleStyle: {
          color: '#000000',
        },
    }}>
      <Stack.Screen name="Galleries" component={HomeScreen} 
        options={{ headerShown: false}} />
      <Stack.Screen name="Photos" component={PhotosScreen} 
        options={{ headerShown: false}} />
  </Stack.Navigator>
);

const LibraryStack = () => (
  <Stack.Navigator screenOptions={{
      headerShown: true,
      headerTitleStyle: {
          color: '#000000',
        },
    }}>
      <Stack.Screen name="Library" component={LibraryScreen} 
        options={{ headerShown: false}} />
      <Stack.Screen name="ViewOnlyGallery" component={HomeScreen} 
        options={{ headerShown: false}} />
  </Stack.Navigator>
);
