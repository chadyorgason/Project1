// Shows the sidebar including the Modal component which shows the new gallery button

import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from './CreateGalleryComponents/Modal';
import { sidebarStyles } from '../assets/styles/sidebarStyles';

const SideBar = ({ navigation }) => {
  return (
    // <SafeAreaView style={sidebarStyles.container}>
      <View style={sidebarStyles.sidebar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={sidebarStyles.sidebarItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Library')}>
          <Text style={sidebarStyles.sidebarItem}>Library</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={sidebarStyles.sidebarItem}>Profile</Text>
        </TouchableOpacity>

        <Modal/>

      </View>
    // </SafeAreaView>
  );
};


export default SideBar;