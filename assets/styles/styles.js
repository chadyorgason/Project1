// Used by most screens and components

import { StyleSheet,Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const numberOfColumns = 5;
const imageMargin = 20;
const imageWidth = (windowWidth * 0.75 - (numberOfColumns + 1) * imageMargin) / numberOfColumns;

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f0f0f0'
    },
    content: {
        flex: 4,
        alignItems: 'center',
        padding: 0,
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
        marginTop: 20,
        textAlign: 'center',
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start', // Align items to the start of the row
        padding: 20, // Adjust if needed for spacing within the container
      },
      imageWrapper: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5, // Adjust this to control the spacing between images
      },
      image: {
        width: '100%', // Make the image take the full width of the wrapper
        height: '100%', // Maintain the aspect ratio by making height equal to width
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        overflow: 'hidden',
      },
      greyImage: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ccc',
        borderRadius: 20,
      },
    // imageContainer: {
    //     flexDirection: 'row',
    //     flexWrap: 'wrap', // Enable wrapping
    //     // justifyContent: 'center', // Center items horizontally
    // },
    // imageWrapper: {
    //     position: 'relative',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: imageWidth, // Width based on the number of columns
    //     margin: imageMargin, // Adjust this to control the spacing between images
    // },
    // image: {
    //     width: '100%', // Make the image take the full width of the wrapper
    //     height: imageWidth, // Maintain the aspect ratio by making height equal to width
    //     borderRadius: 20,
    //     shadowColor: '#000',
    //     shadowOffset: {
    //         width: 2,
    //         height: 2,
    //     },
    //     shadowOpacity: 0.5,
    //     shadowRadius: 5,
    //     elevation: 5,
    //     overflow: 'hidden',
    // },
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
        fontSize: imageWidth / 15
    },  
    // greyImage: {
    //     backgroundColor: '#ccc', // Grey background color
    //     width: '100%',
    //     height: imageWidth,
    //     marginLeft: 10,
    //     marginRight: 10,
    //     borderRadius: 20,
    //     shadowColor: '#000',
    //     shadowOffset: {
    //         width: 2, // Shadow to the right
    //         height: 2, // Shadow below
    //     },
    //     shadowOpacity: 0.5, // Adjust the opacity of the shadow
    //     shadowRadius: 5, // Adjust the radius of the shadow
    //     elevation: 5, // Android elevation for shadow effect
    //     overflow: 'hidden',
    // },
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
    // noImageText: {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    //     textAlign: 'center',
    //     color: 'grey',
    //     //fontWeight: 'bold',
    //     fontSize: 14,
    //     paddingTop: 300,
    // },
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
    backButton: {
        justifyContent: 'flex-start',
    },
    backContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    photosTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 12,
    },
    copybutton: {
        backgroundColor: '#f0f0f0',
        padding: 0,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
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
    alert: {
        backgroundColor: '#c1e8c4',
        padding: 20,
        borderRadius: 5,
        minWidth: 250,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 10, // For Android
    },
    alertText: {
        color: 'black',
        fontSize: 12,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start', // Center the logo horizontally
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10, // Adjust padding to reduce header height
        backgroundColor: '#ffffff', // Corrected background color
        elevation: 4, // For Android shadow
        shadowColor: '#000', // For iOS shadow
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        width: '100%',
        height: 60, // Slightly increase height for better fit
      },
      logo: {
        height: 40, // Set a specific height for the logo
        width: 150, // Set a width that keeps the aspect ratio
        resizeMode: 'contain', // Ensure the image scales properly
      },
    main: {
        flex: 1,
        flexDirection: 'column'
    }
});