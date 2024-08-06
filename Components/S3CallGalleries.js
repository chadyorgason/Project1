// loops through folders in bucket, calls getFirstImageUrl from GetFirstImage.js
// to get the first image from the folder and passes the folders object 
// to renderGalleries in Galleries.js which creates a clickable gallery
// for each folder in our s3 bucket

import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { fetchFolders } from './FetchFolders';
import Galleries from './Galleries'

const Gallery = ({ styles, navigation }) => {
  const [folderNames, setFolderNames] = useState([]);

  useEffect(() => {
    const loadFolders = async () => {
      try {
        const folders = await fetchFolders();
        setFolderNames(folders);
      } catch (error) {
        console.error('Error loading folders:', error);
      }
    };

    loadFolders();
  }, []);

  return (
    <View>
      <Galleries folderNames={folderNames} styles={styles} navigation={navigation}/>
    </View>
  );
};

export default Gallery;