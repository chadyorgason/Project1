// Shows a button used for creating new gallery, opens the new gallery name modal

import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import CreateGalleryModal from './NewGallerySetup';
import { styles } from '../../assets/styles/styles';
import { sidebarStyles } from '../../assets/styles/sidebarStyles';
import CreateNewGallery from './CreateGallery';

const Modal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleCreateGallery = (galleryName) => {
    // Logic to handle gallery creation
    CreateNewGallery(galleryName);
    console.log('Creating gallery:', galleryName);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Button title="Open Modal" onPress={handleOpenModal} /> */}
      <CreateGalleryModal
        visible={isModalVisible}
        onClose={handleCloseModal}
        onCreate={handleCreateGallery}
      />

        <TouchableOpacity onPress={handleOpenModal} style={sidebarStyles.newGalleryButton}>
          <Text style={sidebarStyles.newGalleryButtonText}>New Gallery</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Modal;