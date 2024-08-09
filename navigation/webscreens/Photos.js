// Calls the Sidebar and CallImages from S3CallImages.js to display all 
//images in the gallery. Has back button to get to galleries

import * as React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import SideBar from '../../Components/SideBar';
import { styles } from '../../assets/styles/styles';
import { CallImages } from '../../Components/S3CallImages';

export default function PhotosScreen({ navigation, route }) {
    const { folderName } = route.params;
    
  return (
    <View style={styles.container}>
        
          <View style={styles.content}>
            <ScrollView>
              {CallImages(folderName, navigation)}
            </ScrollView>
          </View>
    </View>

    
  );
};