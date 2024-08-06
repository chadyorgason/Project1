import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SideBar from '../../Components/SideBar';
//import ListLoads from '../../Components/ListLoads';

export default function LibraryScreen({ navigation }) {
  return (
    <View style={styles.container}>

        {/* <SideBar navigation={navigation}/> */}

        <View style={styles.content}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={styles.title}>Library Screen
            </Text>

        </View>
    </View>

    
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f0f0f0', // Background color for the whole screen
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
    content: {
        flex: 4,
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
  });