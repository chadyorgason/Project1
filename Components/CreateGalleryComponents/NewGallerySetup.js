// Code for the actual model, input box for collecting name of new gallery
// Sends name of gallery to CreateGallery.js 

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';

const CreateGalleryModal = ({ visible, onClose, onCreate }) => {
  const [galleryName, setGalleryName] = useState('');

  const handleCreateGallery = () => {
    onCreate(galleryName);
    setGalleryName(''); // Clear input after creating gallery
    onClose(); // Close the modal after creating gallery
  };

  return (
    <Modal visible={visible} animationType='fade'>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Create New Gallery</Text>
        <TextInput
          style={styles.input}
          placeholder="Gallery Name"
          value={galleryName}
          onChangeText={setGalleryName}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={onClose} color="red" />
          <Button title="Create" onPress={handleCreateGallery} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: '30%', // Adjust as needed
    left: '35%', // Adjust as needed
    width: '30%', // Adjust as needed
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    width: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default CreateGalleryModal;