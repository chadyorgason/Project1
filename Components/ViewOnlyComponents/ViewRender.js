// Similar to the Galleries, it uses imageUrls object to loop through all
// photos in current gallery and put them in the 'rows' variable. It returns
// the formatted rows variable to display images.

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RandomUrl } from '../ReturnFolder';
import SharedLink from '../SharedLink';
import ReturnURL from '../ReturnURL';

export const ViewRender = (imageUrls, styles) => {

  console.log(imageUrls)

  const rows = [];
  let row = <View/>
  let currentFolder = '';


  for (let i = 0; i < imageUrls.length; i += 4) {
    const rowPhotos = imageUrls.slice(i + 1, i + 5);
    const checkPhotos = rowPhotos.map((imageUrl) => imageUrl);

    if (checkPhotos[0]) {

      row = (
        <View key={i} style={styles.imageContainer}>
          {rowPhotos.map((imageUrl, index) => (
            <TouchableOpacity key={index} onPress={() => console.log(imageUrl.folder)}>
              <View style={styles.imageWrapper}>
                <Image source={{ uri: imageUrl.url }} style={styles.image} />
                {/* <View style={styles.shine} /> */}
                {/* <Text style={styles.imgTitle}>{imageUrl.folder}</Text> */}
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
    )}
    
    currentFolder = imageUrls[0].folder;
    // {currentFolder}

    rows.push(row);
  }

  const titleComponent = (
      <View style={styles.content}>
        <Text style={styles.title}>{currentFolder}</Text>
      </View>
  );

  console.log("thisforlsldfer")
  console.log(currentFolder)

  return (
    <View>
      {titleComponent}
      {rows}
    </View>

);

  
};