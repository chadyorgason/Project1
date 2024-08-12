// Similar to the Galleries, it uses imageUrls object to loop through all
// photos in current gallery and put them in the 'rows' variable. It returns
// the formatted rows variable to display images.

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';

class ViewRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFolder: '',
      loading: true,
      dimensions: Dimensions.get('window'),
    };
  }

  componentDidMount() {
    Dimensions.addEventListener('change', this.handleResize);
    this.preparePhotos();
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.handleResize);
  }

  handleResize = () => {
    this.setState({ dimensions: Dimensions.get('window') });
  };

  preparePhotos = () => {
    const { imageUrls } = this.props;
    const currentFolder = imageUrls[0]?.folder || '';
    this.setState({ currentFolder, loading: false });
    console.log('folderrrrr', currentFolder)
  };

  render() {
    const { dimensions, currentFolder, loading } = this.state;
    const { imageUrls, styles } = this.props;

    const numberOfColumns = 6; // Adjust the number of columns as needed
    const imageMargin = 10;
    const imageWidth = (dimensions.width * 0.9 - (numberOfColumns + 1) * imageMargin) / numberOfColumns;

    const rows = (
      <View style={styles.imageContainer}>
        {imageUrls.slice(1).map((imageUrl, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => console.log(imageUrl.folder)}
              style={{ ...styles.imageWrapper, width: imageWidth, height: imageWidth, margin: imageMargin / 2 }}
            >
              <View style={{ ...styles.imageWrapper, width: '100%', height: '100%' }}>
                <Image source={{ uri: imageUrl.url }} style={styles.image} />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );

    if (loading) {
      return <ActivityIndicator />;
    }

    if (imageUrls.length === 0) {
      return (
        <View style={styles.content}>
          <Text style={styles.noImagesText}>No Images</Text>
        </View>
      );
    }

    const titleComponent = (
      <View>
        <Text style={styles.title}>{currentFolder}</Text>
      </View>
    );

    return (
      <View>
        {titleComponent}
        {rows}
      </View>
    );
  }
}

export default ViewRender;
