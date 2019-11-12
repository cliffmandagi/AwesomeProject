import React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 20 }}> Home Screen </Text>
            <Button
                title="Go to Component Screen"
                onPress={() => navigation.navigate('Component')}
            />
            <Button
                title="Go to Friend Screen"
                onPress={() => navigation.navigate('Friend')}
            />
            <Button
                title="Go to Image Screen"
                onPress={() => navigation.navigate('Image')}
            />
            <Button
                title="Go to Counter Screen"
                onPress={() => navigation.navigate('Counter')}
            />
        </View>
    );
};

export default HomeScreen;