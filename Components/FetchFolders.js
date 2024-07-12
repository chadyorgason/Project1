// folderService.js
import { ListObjectsCommand } from '@aws-sdk/client-s3';
import { s3Client } from './Client';
import { getFirstImageUrl } from './GetFirstImage';

export const fetchFolders = async () => {
  const command = new ListObjectsCommand({
    Bucket: 'users1',
    Delimiter: '/',
  });
  console.log(command)

  try {
    console.log('before')
    const response = await s3Client.send(command);
    console.log('after')
    console.log(response)
    const folders = response.CommonPrefixes || [];
    console.log(folders)
    const folderData = await Promise.all(folders.map(async ({ Prefix }, index) => {
      const folderName = Prefix.split('/')[0];
      const folderUrl = `https://users1.s3.us-east-2.amazonaws.com/${Prefix}`;
      const firstImageUrl = await getFirstImageUrl(folderUrl, s3Client);
      return {
        folder: folderName,
        key: `folder-${index}`,
        firstUrl: firstImageUrl
      };
    }));

    return folderData;
  } catch (error) {
    console.error('Error listing folders:', error);
    throw error;
  }
};