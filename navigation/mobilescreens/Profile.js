import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
//import ListLoads from '../../Components/ListLoads';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen({ navigation }) {
  // const route = useRoute();
  // const navigation = useNavigation();

  // const changeScreen = () => {
  //   navigation.naviate('Home')
  // }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
        onPress={() => navigation.navigate('Home')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>Profile Screen</Text>    
    </View>
  );
};