import React from 'react';
import AWS from 'aws-sdk';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from '@env';

const SharedLink = async (folder) => {
  const generateRandomToken = () => {
    // Generate a random string using characters from 0-9, a-z, A-Z
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 20; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  };

  const thisFolder = folder;

  if (thisFolder != '') {
    AWS.config.update({
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
        region: 'us-east-2', // Set your desired region
    });

    const dynamodb = new AWS.DynamoDB();

    const scanParams = {
        TableName: 'SharedGalleryLinks',
        ExpressionAttributeNames: {
        '#Data': 'Data'
        },
        FilterExpression: '#Data = :dataValue',
        ExpressionAttributeValues: {
        ':dataValue': { S: thisFolder }
        }
    };

    try {
        const data = await dynamodb.scan(scanParams).promise();
        if (data.Items.length > 0) {
            console.log('Gallery already exists in the table');
            const randomToken = data.Items[0].PicPortal.S;
            const shareableURL = `http://localhost:19006/view-photos/${randomToken}`;
            console.log(shareableURL);
            return shareableURL;
        } else {
            console.log('Gallery does not exist in the table');
            const randomToken = generateRandomToken();
            const params = {
                TableName: 'SharedGalleryLinks',
                Item: {
                'PicPortal': { S: randomToken },
                'Data': { S: thisFolder },
                },
            };
            const shareableURL = `http://localhost:19006/view-photos/${randomToken}`;
            await dynamodb.putItem(params).promise();
            console.log('Item added to DynamoDB:', params.Item);
            return shareableURL;
        }
    } catch (error) {
        console.error('Error:', error);
        return 'Error';
    }
  } else {
        console.error('No images to pass');
  }
};

export default SharedLink;