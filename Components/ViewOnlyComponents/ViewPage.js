import { Platform, Text, View, StyleSheet } from 'react-native';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ReturnFolder } from '../ReturnFolder';
import ViewImages from './ViewImages'
import { styles } from '../../assets/styles/styles';
import HeaderBar from '../HeaderBar';

export default function ViewPage() {
    const { parameter1 } = useParams();
    let folderToken = parameter1
    const [folderName, setFolderName] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFolderName = async () => {
            try {
                const result = await ReturnFolder({folderToken}, true);
                setFolderName(result);
            } catch (error) {
                console.error('Error fetching folder:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFolderName();
    }, [parameter1]);
    
    console.log('folderName yep yep')
    console.log(folderName)

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.main}>
            <HeaderBar navigation={navigation} viewOnly={true}/>
            <View style={styles.content}>
                <ViewImages galleryName={folderName} />
            </View>
        </View>
    );
}

