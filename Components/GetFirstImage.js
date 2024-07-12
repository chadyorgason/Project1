import { ListObjectsCommand } from '@aws-sdk/client-s3';


export const getFirstImageUrl = async (folderUrl, s3Client) => {
    try {
      const command = new ListObjectsCommand({
        Bucket: 'users1',
        Prefix: folderUrl.substring('https://users1.s3.us-east-2.amazonaws.com/'.length), // Extract folder prefix
      });
  
      const response = await s3Client.send(command);
      const objects = response.Contents || [];
  
      // Find the first image URL
      const imageUrl = objects.find(obj => obj.Key.match(/\.(jpeg|jpg|gif|png)$/i));
      if (imageUrl) {
        return `https://users1.s3.us-east-2.amazonaws.com/${imageUrl.Key}`;
      } else {
        return 'None'; // No image found in the folder
      }
    } catch (error) {
      console.error('Error fetching first image URL:', error);
      return ''; // Return empty string in case of error
    }
  };
  