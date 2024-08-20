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
      dimensions: Dimensions.get('window'),
      galleries: props.galleries
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  lastClick = 0;
  
  componentDidMount() {
    Dimensions.addEventListener('change', this.handleResize);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.galleries !== this.props.galleries) {
      this.setState({ galleries: this.props.galleries });
    }
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.handleResize);
  }

  handleResize = () => {
    this.setState({ dimensions: Dimensions.get('window') });
  };

  handleClick(galleryName) {
    const clickTime = new Date().getTime();
    const doubleClick = clickTime - this.lastClick;

    if (doubleClick < 300) {
      // Double-click detected
      this.props.navigation.navigate('Photos', { folderName: galleryName });
      this.setState(prevState => {
        const updatedGallery = { ...prevState.galleries };
        updatedGallery[galleryName].selected = false; // Toggle the selected state
        return { updatedGallery };
      })
    } else {
      this.setState(prevState => {
        const updatedGallery = { ...prevState.galleries };
        updatedGallery[galleryName].selected = !updatedGallery[galleryName].selected; // Toggle the selected state
        return { updatedGallery };
      });
    }

    // Update the last press time
    this.lastClick = clickTime;
  };

  renderGalleries = () => {
    const { galleries, styles } = this.props;
    const { dimensions } = this.state;

    const numberOfColumns = 4; // Adjust this to the desired number of columns
    const imageMargin = 20;
    const imageWidth = (dimensions.width * 0.75 - (numberOfColumns + 1) * imageMargin) / numberOfColumns;

    return Object.entries(galleries).map(([galleryName, galleryInfo], index) => (
      <TouchableOpacity
        key={index}
        onPress={() => this.handleClick(galleryName)}
        style={{ width: imageWidth, height: imageWidth, margin: imageMargin / 2 }}
      >
        {galleryInfo.firstUrl.endsWith('None') ? (
          <View style={{ ...styles.imageWrapper, width: '100%', height: '100%', borderWidth: galleryInfo.selected ? imageWidth / 40 : 0 }}>
            <Image source={{ uri: galleryInfo.firstUrl }} style={styles.greyImage} />
            <View style={styles.shine} />
            <Text style={{ ...styles.imgTitle, fontSize: imageWidth / 15 }}>{galleryName}</Text>
            <Text style={{ ...styles.noImagesText, fontSize: imageWidth / 12 }}>No Images</Text>
          </View>
        ) : (
          <View style={{ ...styles.imageWrapper,  width: '100%', height: '100%', borderWidth: galleryInfo.selected ? imageWidth / 40 : 0 }}>
            <Image source={{ uri: galleryInfo.firstUrl }} style={styles.image} />
            <View style={styles.shine} />
            <Text style={{ ...styles.imgTitle, fontSize: imageWidth / 15 }}>{galleryName}</Text>
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
