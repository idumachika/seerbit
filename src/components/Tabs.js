import React from 'react';
import { TouchableOpacity, Text } from 'react-native'
// import { fonts } from '../styles/variables.styles';

const TabButton = ({ active, title, onPress }) => {

    const style = {
        button: {
            alignSelf: 'stretch',
            borderRadius: 5,
            backgroundColor: active ? "rgba(84, 142, 78, 0.08)" : null,

        },
        text: {
            alignSelf: 'center',
            fontSize: 14,
            fontWeight: '600',
            paddingTop: 10,
            paddingBottom: 10,
            color: active ? "#548E4E" : "#000000",
            // fontFamily: fonts.family._NORMAL
        },
    };
    return (
        <TouchableOpacity style={style.button} onPress={onPress}>
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export default
    TabButton



