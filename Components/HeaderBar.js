import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../assets/styles/styles';

class HeaderBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => 
          {
            if (this.props.viewOnly) {
              Linking.openURL('https://picportal.co/')
            } else {
              this.props.navigation.navigate('home')
            }
          }
        }>
          <Image 
            source={require('../assets/img/LongLogoWhiteBackgroundMinimal.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default HeaderBar;
