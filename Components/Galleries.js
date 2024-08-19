// Loops through folders object and creates the clickable gallery display
// using the first image in the folder. Puts galleries into the 'rows' variable
// When you click a gallery, it does a stack navigation to show the contents of
// the gallery by pointing to the Photos.js in navigation/webscreens

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

class Galleries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: Dimensions.get('window')
    };
  }

  lastPress = 0;
  mounted = false;

  componentDidMount() {
    Dimensions.addEventListener('change', this.handleResize);
    this.mounted = true
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.handleResize);
  }

  handleResize = () => {
    this.setState({ dimensions: Dimensions.get('window') });
  };

  handleDoubleClick = (folder) => {
    if (this.mounted) {
      const time = new Date().getTime();
      const delta = time - this.lastPress;
      console.log(time, delta);

      if (delta < 300) {
        // Double-click detected
        console.log('Double-click detected');
        this.props.navigation.navigate('Photos', { folderName: folder });
      }

      // Update the last press time
      this.lastPress = time;
    }
  };

  renderGalleries = () => {
    const { folderNames, styles, navigation } = this.props;
    const { dimensions } = this.state;

    const numberOfColumns = 4; // Adjust this to the desired number of columns
    const imageMargin = 20;
    const imageWidth = (dimensions.width * 0.75 - (numberOfColumns + 1) * imageMargin) / numberOfColumns;

    return folderNames.map((folder, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => this.handleDoubleClick(folder.folder)}
        style={{ ...styles.imageWrapper, width: imageWidth, height: imageWidth, margin: imageMargin / 2 }}
      >
        {folder.firstUrl.endsWith('None') ? (
          <View style={{ ...styles.imageWrapper, width: '100%', height: '100%' }}>
            <Image source={{ uri: folder.firstUrl }} style={styles.greyImage} />
            <View style={styles.shine} />
            <Text style={{ ...styles.imgTitle, fontSize: imageWidth / 15 }}>{folder.folder}</Text>
            <Text style={{ ...styles.noImagesText, fontSize: imageWidth / 12 }}>No Images</Text>
          </View>
        ) : (
          <View style={{ ...styles.imageWrapper,  width: '100%', height: '100%' }}>
            <Image source={{ uri: folder.firstUrl }} style={styles.image} />
            <View style={styles.shine} />
            <Text style={{ ...styles.imgTitle, fontSize: imageWidth / 15 }}>{folder.folder}</Text>
          </View>
        )}
      </TouchableOpacity>
    ));
  };

  render() {
    const { styles } = this.props;

    return (
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Galleries</Text>
        </View>
        <View style={styles.imageContainer}>
          {this.renderGalleries()}
        </View>
      </View>
    );
  }
}

export default Galleries;
