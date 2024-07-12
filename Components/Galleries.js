// Loops through folders object and creates the clickable gallery display
// using the first image in the folder. Puts galleries into the 'rows' variable
// When you click a gallery, it does a stack navigation to show the contents of
// the gallery by pointing to the Photos.js in navigation/webscreens

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const renderGalleries = (folderNames, styles, navigation) => {

  const folderNamesHere = folderNames;
  const rows = [];

    for (let i = 0; i < folderNamesHere.length; i += 4) {
      const rowPhotos = folderNamesHere.slice(i, i + 4);

      const row = (
        <View key={i} style={styles.imageContainer}>
          {rowPhotos.map((folder, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('Photos', { folderName: folder.folder })}>
              {folder.firstUrl.endsWith('None') ? (
                <View style={styles.imageWrapper}>
                  <Image source={{ uri: folder.firstUrl }} style={styles.greyImage} />
                  <View style={styles.shine} />
                  <Text style={styles.imgTitle}>{folder.folder}</Text>
                  <Text style={styles.noImagesText}>No Images</Text>
                </View>
              ) : (
                <View style={styles.imageWrapper}>
                  <Image source={{ uri: folder.firstUrl }} style={styles.image} />
                  <View style={styles.shine} />
                  <Text style={styles.imgTitle}>{folder.folder}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      );

      rows.push(row);

    }


  const titleComponent = (
    <View style={styles.content}>
      <Text style={styles.title}>Galleries</Text>
    </View>
);

  return (
    <View>
      {titleComponent}
      {rows}
    </View>
  );
};