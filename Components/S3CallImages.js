// Uses galleryName (folder name) to loop through folder and add all photos
// to the imageUrls object. Calls renderPhotos in DisplayImages.js with 
// imageUrls to actually show photos

import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { fetchImages } from './GetImages';
import PhotoGallery from './DisplayImages';
import { styles } from '../assets/styles/styles';

export const CallImages = ( galleryName ) => {
    const [imageUrls, setImageUrls] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const urls = await fetchImages(galleryName);
                setImageUrls(urls);
                setLoading(false);
            } catch (error) {
                console.error('Error loading images:', error);
                setLoading(false);
            }
        };

        loadImages();
    }, [galleryName]);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading images...</Text>
            </View>
        );
    }

    return (
        <View>
            <PhotoGallery imageUrls={imageUrls} styles={styles} />
        </View>
    );
};

// export default CallImages;





// import React, { useState, useEffect } from 'react';
// import { S3Client, ListObjectsCommand } from '@aws-sdk/client-s3';
// import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
// import { renderPhotos } from './DisplayImages';
// import PhotoGallery from './DisplayImages';
// import { styles } from '../assets/styles/styles';
// import { s3Client } from './Client';

// export const CallImages = (galleryName) => {
//     const [imageUrls, setImageUrls] = useState([]);
//     const [loading, setLoading] = useState(true);
//     {console.log("galleryName")}
//     {console.log(galleryName)}
//     {console.log("galleryName")}

//     useEffect(() => {
//         const fetchImages = async () => {
//         const command = new ListObjectsCommand({
//             Bucket: 'users1',
//             Prefix: `${galleryName}/`,
//         });
//         console.log(command)

//         try {
//             const response = await s3Client.send(command);
//             const objects = response.Contents || [];
//             const urls = objects.map((object, index) => {
//                 const parts = object.Key.split('/');
//                 const folderName = parts[parts.length - 2]; // Get the second-to-last part as the folder name
//                 return {
//                     url: `https://users1.s3.us-east-2.amazonaws.com/${object.Key}`,
//                     key: `image-${index}`,
//                     folder: folderName,
//                     name: parts.pop(),
//                 }
//             });
//             setImageUrls(urls);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error listing objects:', error);
//             setLoading(false);
//         }
//         };

//         fetchImages();
//     }, []);
//     {console.log({imageUrls})}

//       if (loading) {
//         return (
//           <View style={styles.container}>
//             <ActivityIndicator size="large" color="#0000ff" />
//             <Text>Loading images...</Text>
//           </View>
//         );
//       }

//     return (
//         <View>
//             <PhotoGallery imageUrls={imageUrls} styles={styles} />
//         </View>
//     );
// }