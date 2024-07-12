import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
//import ListLoads from '../../Components/ListLoads';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text
        onPress={() => navigation.naviate('Home')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>    
    </View>
  );
};