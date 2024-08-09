import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { styles } from '../assets/styles/styles';

class HeaderBar extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Image source={require('../assets/img/LongLogoWhiteBackgroundMinimal.png')} style={styles.logo} resizeMode="contain" />
      </View>
    );
  }
}

export default HeaderBar;
