import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
// import MediaScreen from './Media';
// import LibraryScreen from './Library';
// import CardGrid from '../../Components/CardGrid';
// import PhotoGrid from '../../Components/Photos';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import sideBar from '../../Components/SideBar';

const photos = [
  require('../../assets/img/Photo2.jpg'),
  // require('../../assets/img/Photo3.jpg'),
  // require('../../assets/img/Photo5.jpg'),
  // Add more photo paths as needed
];

export default function HomeScreen({ navigation }) {
  const renderPhotos = () => {
    const rows = [];
    for (let i = 0; i < photos.length; i += 2) {
      const rowPhotos = photos.slice(i, i + 2);

      const row = (
        <View key={i} style={styles.imageContainer}>
          {rowPhotos.map((photo, index) => (
            <TouchableOpacity key={index} onPress={() => console.log('Navigate to Dashboard')}>
              <View style={styles.imageWrapper}>
                <Image source={photo} style={styles.image} />
                <View style={styles.shine} />
              </View>
            </TouchableOpacity>
          ))}
      </View>
      );

      rows.push(row);
    }

    return rows;
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => alert('This is the "Home" screen.')}
        style={{ fontSize: 26, fontWeight: 'bold' }}
      >
        Gallery
      </Text>

      {renderPhotos()}
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
      flexDirection: 'row', // Display images side by side
      marginVertical: 10,
  },
  imageWrapper: {
      position: 'relative',
  },
  image: {
      width: 150, // Adjust the width as needed
      height: 150, // Adjust the height as needed
      marginRight: 20, // Add margin between images
      borderRadius: 20, // Rounded corners to make it look like a folder or frame
      borderWidth: 1, // Add a border to the image
      borderColor: '#fff', // Border color
      backgroundColor: '#f9f9f9', // Background color to make it look like a folder or frame
      shadowColor: '#000', // Shadow color
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.5, // Adjust the opacity of the shadow
      shadowRadius: 5, // Adjust the radius of the shadow
      elevation: 5, // Android elevation for shadow effect
      overflow: 'hidden', // Ensure that the shadow doesn't overflow
  },
  shine: {
      position: 'absolute',
      width: '75%',
      height: '8%',
      top: 10,
      left: 12,
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white color for shine effect
      zIndex: 1, // Ensure that shine appears above the image
      borderRadius: 20, // Rounded corners to match the image
      //transform: [{ rotate: '5deg' }], // Rotate the shine diagonally
  },
});