// // imageService.js
// import { ListObjectsCommand } from '@aws-sdk/client-s3';
// import { s3Client } from './ViewOnlyClient';

// export const fetchImages = async (galleryName) => {
//     const command = new ListObjectsCommand({
//         Bucket: 'users1',
//         Prefix: `${galleryName}/`,
//     });
//     console.log("Fetching images with command:", command);

//     try {
//         const response = await s3Client.send(command);
//         console.log("S3 Response:", response);

//         const objects = response.Contents || [];
//         const urls = objects.map((object, index) => {
//             const parts = object.Key.split('/');
//             const folderName = parts[parts.length - 2]; // Get the second-to-last part as the folder name
//             return {
//                 url: `https://users1.s3.us-east-2.amazonaws.com/${object.Key}`,
//                 key: `image-${index}`,
//                 folder: folderName,
//                 name: parts.pop(),
//             };
//         });
//         console.log("Image URLs:", urls);
//         return urls;
//     } catch (error) {
//         console.error('Error listing objects:', error);
//         throw error;
//     }
// };