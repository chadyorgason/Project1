// import * as React from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
//import ListLoads from '../../Components/ListLoads';

import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function MediaScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Cover Photo */}
      <Image
        source={require('../../assets/img/Photo2.jpg')}
        style={styles.coverPhoto}
      />

      {/* Profile Picture and User Info */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/img/Photo2.jpg')}
          style={styles.profilePicture}
        />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userBio}>Photographer | Explorer | Creator</Text>
      </View>

      {/* User Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>500</Text>
          <Text style={styles.statLabel}>Pictures</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>1.5GB</Text>
          <Text style={styles.statLabel}>Remaining Storage </Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>300</Text>
          <Text style={styles.statLabel}>Videos</Text>
        </View>
      </View>

      {/* User Posts */}
      {/* You can render user posts here using a FlatList or any other suitable component */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  coverPhoto: {
    height: 200,
    resizeMode: 'cover',
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: -50,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userBio: {
    color: '#666',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666',
  },
});



//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text
//         onPress={() => navigation.naviate('Home')}
//         style={{ fontSize: 26, fontWeight: 'bold' }}>Media Screen</Text>    
//     </View>
//   );
// };