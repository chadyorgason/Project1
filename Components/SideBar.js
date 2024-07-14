// Shows the sidebar including the Modal component which shows the new gallery button

import React from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import Card from './DisplayImages';
import CreateNewGallery from './CreateGalleryComponents/CreateGallery';
import CreateGalleryModal from './CreateGalleryComponents/NewGallerySetup';
import Modal from './CreateGalleryComponents/Modal';
import { sidebarStyles } from '../assets/styles/sidebarStyles';

const SideBar = () => {
  return (
    <SafeAreaView style={sidebarStyles.container}>
      <View style={sidebarStyles.sidebar}>
        <TouchableOpacity onPress={() => console.log('Navigate to Dashboard')}>
          <Text style={sidebarStyles.sidebarItem}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Navigate to Profile')}>
          <Text style={sidebarStyles.sidebarItem}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Navigate to Settings')}>
          <Text style={sidebarStyles.sidebarItem}>Settings</Text>
        </TouchableOpacity>

        <Modal/>

      </View>
    </SafeAreaView>
  );
};


export default SideBar;