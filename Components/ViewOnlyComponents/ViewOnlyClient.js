// Client object with creds to only view the gallery aws account. 
// Takes it from .env

import { AWS_VIEWONLY_ACCESS_KEY_ID, AWS_VIEWONLY_SECRET_ACCESS_KEY } from '@env';
import { S3Client } from '@aws-sdk/client-s3';

export const s3Client = new S3Client({
    credentials: {
      accessKeyId: AWS_VIEWONLY_ACCESS_KEY_ID,
      secretAccessKey: AWS_VIEWONLY_SECRET_ACCESS_KEY,
    },
    region: 'us-east-2',
  });