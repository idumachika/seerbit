import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const TopBar = ({ headerText }) => {
    // const navigation = useNavigation();

    return (
        <View style={styles.Header}>
            <MaterialIcons name="arrow-back" color={"black"} size={20}
                style={styles.Icon} />
            <Text style={styles.headerText}>{headerText}</Text>
        </View>
    )
}
export default TopBar


const styles = StyleSheet.create({

    Header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
    },

    headerText: {
        // fontFamily: fonts.family._SEMI_BOLD,
        color: '#212121',
        fontSize: 16,
        textAlign: 'center',
        paddingLeft: 100,
        lineHeight: 30
    },



});