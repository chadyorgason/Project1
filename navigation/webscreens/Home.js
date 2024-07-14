// Calls Sidebar and Gallery components to show sidebar and all galleries

import React from 'react';
import { View, ScrollView } from 'react-native';
import SideBar from '../../Components/SideBar';
import Gallery from '../../Components/S3CallGalleries';
import { styles } from '../../assets/styles/styles';

export default function HomeScreen({ navigation }) {

  return (

    <View style={styles.container}>
        
      <SideBar/>

      <View style={styles.content}>
        <ScrollView>
          <Gallery styles={styles} navigation={navigation}/>
        </ScrollView>
        
      </View>
    </View>
    
  );
}