import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

export const DrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerContent}>
        {/* Your custom sidebar items */}
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate('Library')}
        >
          <Text>Library</Text>
        </TouchableOpacity>
        {/* Add more items as needed */}
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  drawerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});