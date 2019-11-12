import React from 'react';
import { Text, View, Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="Mountain"
                imageSource={require('../assets/mountain.jpg')}
                rating="5"
            />
            <ImageDetail
                title="Forest"
                imageSource={require('../assets/forest.jpeg')}
                rating="4"
            />
            <ImageDetail
                title="Beach"
                imageSource={require('../assets/beach.jpg')}
                rating="5"
            />
        </View>
    )
}

export default ImageScreen;