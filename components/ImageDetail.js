import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageDetail = ({imageSource, title, rating}) => {
    return (
        <View>
            <Image
                source={imageSource}
                style={{ height: 150, width: 150}}
            />
            <Text>{title}</Text>
            <Text>Rating : {rating} stars</Text>
        </View>
    )
}

export default ImageDetail;