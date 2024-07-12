// Takes in variables to create new folder in s3

import { s3Client } from '../Client';
import { PutObjectCommand } from '@aws-sdk/client-s3';

// Function to create a new folder in S3
// Function to create a new folder in S3
const CreateNewGallery = async (folderName) => {
    const bucketName = 'users1';
    
    const params = {
      Bucket: bucketName,
      Key: `${folderName}/`, // Note the trailing slash to indicate a folder
      Body: '', // Empty content body for folder creation
    };
  
    const command = new PutObjectCommand(params);
  
    try {
      await s3Client.send(command);
      console.log(`Successfully created folder ${folderName} in bucket ${bucketName}`);
    } catch (error) {
      console.error(`Error creating folder ${folderName} in bucket ${bucketName}:`, error);
    }
  };

export default CreateNewGallery;