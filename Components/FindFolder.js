import AWS from 'aws-sdk';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from '@env';

export const FindFolder = (token) => {
    const thisToken = token;

    return new Promise((resolve, reject) => {
        if (thisToken !== '') {
            AWS.config.update({
                accessKeyId: AWS_ACCESS_KEY_ID,
                secretAccessKey: AWS_SECRET_ACCESS_KEY,
                region: 'us-east-2',
            });

            const dynamodb = new AWS.DynamoDB();
            const scanParams = {
                TableName: 'SharedGalleryLinks',
                FilterExpression: 'PicPortal = :picPortalValue',
                ExpressionAttributeValues: {
                    ':picPortalValue': { S: thisToken }
                }
            };

            dynamodb.scan(scanParams, (err, data) => {
                if (err) {
                    console.error('Error scanning DynamoDB:', err);
                    reject(err); // Reject the Promise if there's an error
                } else {
                    if (data.Items.length > 0) {
                        const thisName = data.Items[0].Data.S;
                        console.log('Gallery already exists in the table');
                        console.log('Data:', thisName);
                        resolve(thisName); // Resolve the Promise with the folder name
                    } else {
                        console.log('Gallery does not exist in the table');
                        resolve(null); // Resolve the Promise with null if folder not found
                    }
                }
            });
        } else {
            console.error('No images to pass');
            resolve(null); // Resolve the Promise with null if no token provided
        }
    });
};

// export default FindFolder;