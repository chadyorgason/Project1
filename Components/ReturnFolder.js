// Import necessary libraries
import { FindFolder } from "./FindFolder";

// Refactor ReturnFolder to be a regular function that returns a promise
export const ReturnFolder = async (folderToken) => {
    const thisToken = folderToken.folderToken;

    try {
        const folder = await FindFolder(thisToken);
        return folder;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};





// import { useState, useEffect } from 'react';
// import { View, Text, ActivityIndicator } from 'react-native';
// // import AWS from 'aws-sdk';
// import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from '@env';
// import { CallImages } from './S3CallImages';
// import FindFolder from './FindFolder';
// import { styles } from '../assets/styles/styles';

// export const ReturnFolder = (folderToken) => {

//     const between = folderToken;  
//     const thisToken = between.folderToken

//     const [foundFolder, setFoundFolder] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         FindFolder( thisToken )
//             .then((folder) => {
//                 setFoundFolder(folder);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//                 setLoading(false);
//             });
//     }, [thisToken]);

//     if (loading) {
//         return "Loading"; // Render loading indicator while fetching the URL
//     }

//     const { folderName } = foundFolder;

//     const shareLinkComponent = (
//         <View style={styles.content}>
//             <Text style={styles.title}>{foundFolder}</Text>
//             <Text>{foundFolder}</Text>
//         </View>
//     );

//     console.log(foundFolder)
//     return foundFolder;
// };