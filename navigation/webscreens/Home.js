// Calls Sidebar and Gallery components to show sidebar and all galleries

import React from 'react';
import { View, ScrollView } from 'react-native';
import Gallery from '../../Components/S3CallGalleries';
import { styles } from '../../assets/styles/styles';

export default function HomeScreen({ navigation }) {

  return (

      <View style={styles.content}>
        <ScrollView>
          <Gallery styles={styles} navigation={navigation}/>
        </ScrollView>
      </View>
    
  );
}