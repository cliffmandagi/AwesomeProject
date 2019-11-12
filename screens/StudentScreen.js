import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

const students = [
    { name: 'Student #1', fakultas: 'FIK'},
    { name: 'Student #2', fakultas: 'FEB'},
    { name: 'Student #3', fakultas: 'FIK'},
    { name: 'Student #4', fakultas: 'FIK'},
    { name: 'Student #5', fakultas: 'FIK'},
    { name: 'Student #6', fakultas: 'FIK'},
    { name: 'Student #7', fakultas: 'FIK'},
    { name: 'Student #8', fakultas: 'FIK'},
    { name: 'Student #9', fakultas: 'FIK'},
    { name: 'Student #10', fakultas: 'FIK'}
];

const StudentScreen = () => {
    return (
        <FlatList
            data={students}
            renderItem={(student) => <Text style={styles.textStyle}>{student.item.name}</Text>}
            keyExtractor={item => item.id}
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default StudentScreen;