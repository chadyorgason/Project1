// Used primarily for the sidebar

import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
console.log('width', windowWidth)

export const sidebarStyles = StyleSheet.create({
    container: {
      flex: 1,
      width: windowWidth * 0.3, // 20% of the window width
    },
    sidebar: {
      flex: 1,
      backgroundColor: '#333', // Sidebar background color
      paddingVertical: 20,
      paddingHorizontal: 10,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    sidebarItem: {
      color: '#fff', // Text color for sidebar items
      fontSize: 18,
      marginBottom: 15,
    },
    newGalleryButton: {
      backgroundColor: '#fff', // Button background color
      padding: 7.5,
      borderRadius: 5,
      alignSelf: 'center',
      marginTop: 'auto', // Push button to the bottom
      alignItems: 'center',
    },
    newGalleryButtonText: {
      color: 'black', // Button text color
      fontSize: 14,
    },
  });