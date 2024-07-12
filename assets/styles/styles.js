// Used by most screens and components

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f0f0f0'
    },
    content: {
        flex: 4,
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    imageContainer: {
        flexDirection: 'row', // Display images side by side
        marginVertical: 10,
    },
    imageWrapper: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
  },
  image: {
      width: 200,
      height: 200,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
          width: 2, // Shadow to the right
          height: 2, // Shadow below
      },
      shadowOpacity: 0.5, // Adjust the opacity of the shadow
      shadowRadius: 5, // Adjust the radius of the shadow
      elevation: 5, // Android elevation for shadow effect
      overflow: 'hidden',
  },
  shine: {
      position: 'absolute',
      width: '80%',
      height: '8%',
      top: 10,
      left: 0,
      right: 0,
      marginHorizontal: 'auto',
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      zIndex: 1,
      borderRadius: 20,
  },
  imgTitle: {
      position: 'absolute',
      top: 10,
      textAlign: 'center',
      zIndex: 1,
  },  
  greyImage: {
    backgroundColor: '#ccc', // Grey background color
    width: 200,
      height: 200,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
          width: 2, // Shadow to the right
          height: 2, // Shadow below
      },
      shadowOpacity: 0.5, // Adjust the opacity of the shadow
      shadowRadius: 5, // Adjust the radius of the shadow
      elevation: 5, // Android elevation for shadow effect
      overflow: 'hidden',
  },
  noImagesText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    textAlign: 'center',
    color: 'grey',
    //fontWeight: 'bold',
    fontSize: 16,
  },
  noImageText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    textAlign: 'center',
    color: 'grey',
    //fontWeight: 'bold',
    fontSize: 14,
    paddingTop: 300,
  },
    description: {
        textAlign: 'center',
        marginBottom: 20,
    },
    featuresTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
    },
    feature: {
        marginBottom: 10,
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
    leftColumn: {
        position: 'absolute',
        top: 5,
        left: 10,
        height: '10%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        //backgroundColor: '#28a745', // Use your chosen color here
    },
    rightColumn: {
        position: 'absolute',
        bottom: 5,
        right: 10,
        height: '10%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        //backgroundColor: '#28a745', // Use your chosen color here
    },
    backButton: {
        alignItems: 'left',
    },
    copybutton: {
        backgroundColor: '#f0f0f0',
        padding: 0,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    alertContainer: {
        position: 'absolute',
        bottom: '80%',
        left: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
    },
    alert: {
        backgroundColor: '#ADEBB3',
        padding: 10,
        borderRadius: 5,
    },
    alertText: {
        color: 'black',
        fontSize: 12,
    },
});