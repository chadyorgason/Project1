import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "./Client";

const createPresignedUrlWithClient = ({ region, bucket, key }) => {
  const client = s3Client
  const command = new GetObjectCommand({ Bucket: bucket, Key: key });
  return getSignedUrl(client, command, { expiresIn: 3600 });
};

export const DownloadImage = async ({ photoUrl, folder, fileName, photoID }) => {
  const REGION = "us-east-2";
  const BUCKET = "users1";
  const KEY = `${folder}/${fileName}`;

  try {
    const clientUrl = await createPresignedUrlWithClient({
      region: REGION,
      bucket: BUCKET,
      key: KEY,
    });

    // Download image using fetch
    const response = await fetch(clientUrl);
    if (!response.ok) {
        throw new Error(`Failed to download image: ${response.statusText}`);
    }

    // For web, convert blob to ArrayBuffer and save using FileSaver.js or other method
    const blob = await response.blob();
    console.log('blob', blob)
    const url = window.URL.createObjectURL(blob);
    console.log('url', url)
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = fileName|| `photo-${photoID}`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    console.log("Image downloaded successfully.");

  } catch (err) {
    console.error("Error downloading image:", err);
  }

};

