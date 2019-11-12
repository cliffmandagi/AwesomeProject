import React from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const friends = [
    {name: 'Friend#1', alamat: 'Unklab'},
    {name: 'Friend#2', alamat: 'Unklab'},
    {name: 'Friend#3', alamat: 'Unklab'},
    {name: 'Friend#4', alamat: 'Unklab'},
    {name: 'Friend#5', alamat: 'Unklab'},
    {name: 'Friend#6', alamat: 'Unklab'},
    {name: 'Friend#7', alamat: 'Unklab'},
    {name: 'Friend#8', alamat: 'Unklab'},
    {name: 'Friend#9', alamat: 'Unklab'}
]

    const styles = StyleSheet.create({
    textstyle: {
        marginVertical: 30,
        marginHorizontal: 90
    }
});

export default function FriendScreen() {
    return (
        <FlatList 
            data={friends}
            renderItem={({item}) => 
                <View style={styles.textstyle}>
                    <ImageDetail
                        title="Beach"
                        imageSource={require('../assets/beach.jpg')}
                    />
                </View>
            }
            keyExtractor={item => item.name} 
        />
    );
}
