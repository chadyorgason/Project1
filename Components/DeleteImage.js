import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from './Client';

export const DeleteImage = async ({ folder, fileName }) => {
    const bucketName = 'users1';
    
    const params = {
      Bucket: bucketName,
      Key: `${folder}/${fileName}`
    };
  
    const command = new DeleteObjectCommand(params);
    console.log(params)
    console.log(command)
  
    try {
      const resp = await s3Client.send(command);
      console.log(resp)
      console.log(`Successfully deleted ${fileName} in folder ${folder}`);
    } catch (error) {
      console.error(`Error deleting ${fileName} in folder ${folder}:`, error);
    }
}


