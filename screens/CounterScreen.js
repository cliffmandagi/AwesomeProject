import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class CounterScreen extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        };
    }
    render(){
        return (
            <View>
                <Text> Counter Screen </Text>
                <Button
                    title="Increase"
                    onPress={()=> this.setState({ counter: this.state.counter+1 })}
                />
                <Button
                    title="Decrease"
                    onPress={()=> this.setState({ counter: this.state.counter-1 })}
                />
                <Text> Current Counter :{this.state.counter}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({});

export default CounterScreen;