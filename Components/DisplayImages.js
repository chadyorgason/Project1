import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, Button, Dimensions, StyleSheet } from 'react-native';
import SharedLink from './SharedLink';
import ReturnURL from './ReturnURL';
import DownloadPhotoButton from './DownloadPhotoButton';
import DeletePhotoButton from './DeletePhotoButton';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFolder: '',
      loading: true,
      dimensions: Dimensions.get('window')
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
  };

  render() {
    const { dimensions, currentFolder, loading } = this.state;
    const { imageUrls, styles } = this.props;

    const numberOfColumns = 5;
    const imageMargin = 20;
    const imageWidth = (dimensions.width * 0.75 - (numberOfColumns + 1) * imageMargin) / numberOfColumns;

    const rows = (
      <View style={styles.imageContainer}>
        {imageUrls.slice(1).map((imageUrl, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => console.log(imageUrl.folder)}
              style={{ ...styles.imageWrapper, width: imageWidth, height: imageWidth, margin: imageMargin / 2 }}
            >
              <View style={{ ...styles.imageWrapper,  width: '100%', height: '100%' }}>
                <Image source={{ uri: imageUrl.url }} style={styles.image} />
              </View>
            </TouchableOpacity>
            <DownloadPhotoButton folder={imageUrl.folder} fileName={imageUrl.name} photoID={`photo_${index}`} />
            <DeletePhotoButton folder={imageUrl.folder} fileName={imageUrl.name} />
          </View>
        ))}
      </View>
    );

    if (loading) {
      return <ActivityIndicator />;
    }

    const noImagesComponent = (
      <View style={styles.noImages}>
        <Text>No Images</Text>
      </View>
    );

    const titleComponent = (
      <View style={{...styles.backContainer, minWidth: dimensions.width * 0.75 }}>
        <Button style={styles.backButton} title="Back" onPress={() => this.props.navigation.goBack()} />
        <Text style={styles.photosTitle}>{currentFolder}</Text>
        <View style={{ flex: 1 }} />
      </View>
    );

    if (imageUrls.length < 2) {
      return (
        <View>
          {titleComponent}
          {noImagesComponent}
        </View>
      );
    }

    return (
      <View>
        <ReturnURL titleComponent={titleComponent} rows={rows} currentFolder={currentFolder} />
      </View>
    );
  }
}

export default PhotoGallery;