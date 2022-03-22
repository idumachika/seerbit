import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const FilledButton = ({ onPress, title }) => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.buttonContainer}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>


    )
}

export default FilledButton

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        height: 60,
        justifyContent: 'center',
        backgroundColor: "#C0D73E",
        borderRadius: 15,

    },

    text: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },



})