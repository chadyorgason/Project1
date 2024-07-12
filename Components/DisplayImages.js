import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import SharedLink from './SharedLink';
import ReturnURL from './ReturnURL';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      currentFolder: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.preparePhotos();
  }

  preparePhotos = async () => {
    const { imageUrls, styles } = this.props;
    const rows = [];
    let row = <View />;
    let currentFolder = '';

    for (let i = 0; i < imageUrls.length; i += 4) {
      const rowPhotos = imageUrls.slice(i + 1, i + 5);
      const checkPhotos = rowPhotos.map((imageUrl) => imageUrl);
      console.log('Check Photos: ', checkPhotos)

      if (checkPhotos[0]) {
        row = (
          <View key={i} style={styles.imageContainer}>
            {rowPhotos.map((imageUrl, index) => (
              <TouchableOpacity key={index} onPress={() => console.log(imageUrl.folder)}>
                <View style={styles.imageWrapper}>
                  <Image source={{ uri: imageUrl.url }} style={styles.image} />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        );
      } else {
        row = (
          <View key={i} style={styles.content}>
            <Text style={styles.noImageText}>No Images</Text>
          </View>
        );
      }

      currentFolder = imageUrls[0].folder;
      rows.push(row);
    }

    this.setState({ rows, currentFolder, loading: false });
    console.log('Photos prepared and state updated');
  };

  render() {
    const { styles } = this.props;
    const { rows, currentFolder, loading } = this.state;

    if (loading) {
      return <ActivityIndicator />;
    }

    const titleComponent = (
      <View style={styles.content}>
        <Text style={styles.title}>{currentFolder}</Text>
      </View>
    );

    return (
      <View>
        <ReturnURL titleComponent={titleComponent} rows={rows} currentFolder={{ currentFolder }} />
      </View>
    );
  }
}

export default PhotoGallery;