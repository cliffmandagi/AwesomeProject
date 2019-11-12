import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ComponentScreen = (props) => {

    const name = 'John Doe';
    const showMe = <Text> Hello World </Text>

    return (
        <View>
            <Image 
            style={{width: 50, height: 50}}
            source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}/>
            <Text style={styles.textStyle}>
                This is component Screen
            </Text>
            <Text style={{fontSize: 22, color:'red'}}>
                Hello {name}
            </Text>
            {showMe}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 26
    }
});

export default ComponentScreen;

// Dalam Image
// style={{width: }}
// source={{uri: ''}}