// Client object with creds for aws account. Takes it from .env

// import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, bubs } from '@env'
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from "@env"
import { S3Client } from '@aws-sdk/client-s3';

export const s3Client = new S3Client({
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    },
    region: 'us-east-2',
  });