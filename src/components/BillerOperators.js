import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { COLORS, PRIMARY_FONT } from '../assets/config';

const BillerOperators = ({ billers }) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.billers}>
        <View>
            <Image source={billers.logo} style={styles.billerslogo} />
            <Text style={styles.billersText}>{billers.title}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    billerslogo: {
        height: wp('16.8%'),
        width: wp('16.8%'),
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    billers: {
        justifyContent: 'center',
    },
    billersText: {
        marginTop: 10,
        fontSize: 12,
        // fontFamily: PRIMARY_FONT.medium,
        textAlign: 'center',
        color: "#636363",
    },
});

export default BillerOperators;