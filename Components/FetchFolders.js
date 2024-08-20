// folderService.js
import { ListObjectsCommand } from '@aws-sdk/client-s3';
import { s3Client } from './Client';
import { getFirstImageUrl } from './GetFirstImage';

export const fetchFolders = async () => {
  const command = new ListObjectsCommand({
    Bucket: 'users1',
    Delimiter: '/',
  });

  try {
    const response = await s3Client.send(command);
    const folders = response.CommonPrefixes || [];
    const folderData = await Promise.all(folders.map(async ({ Prefix }, index) => {
      const folderName = Prefix.split('/')[0];
      const folderUrl = `https://users1.s3.us-east-2.amazonaws.com/${Prefix}`;
      const firstImageUrl = await getFirstImageUrl(folderUrl, s3Client);
      return {
        [folderName]: {
          id: index,
          firstUrl: firstImageUrl,
          selected: false
        }
      };
    }));

    // change array of objects into object of objects
    const foldersObject = folderData.reduce((acc, curr) => {
      return { ...acc, ...curr };
    }, {});

    return foldersObject;
  } catch (error) {
    console.error('Error listing folders:', error);
    throw error;
  }
};