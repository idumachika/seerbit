import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from './styles';
import TopBar from '../../../components/TopBar'
import SearchInput from '../../../components/SearchInput';
import BillersOperator from '../../../components/BillerOperators'

export const billersOperators = [
    {
        logo: require('../../../assests/img/mtn.png'),
        title: "MTN",

    },
    {
        logo: require('../../../assests/img/airtel.png'),
        title: 'Airtel',

    },
    {
        logo: require('../../../assests/img/9mobile.png'),
        title: '9Mobile',

    },
    {
        logo: require('../../../assests/img/glo.png'),
        title: 'glo',

    },

];

const Billers = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headContainer}>
                <TopBar headerText={'Bill Payments'} />
                <View style={styles.searchContainer}>
                    <SearchInput placeholder="Search" />
                </View>
            </View>

            <View style={styles.billersContainer}>
                <Text style={styles.billersTitle}>Airtime</Text>
                <View style={styles.billersOperator}>
                    {billersOperators.map((billers) => (
                        <BillersOperator billers={billers} key={billers.title} />
                    ))}
                </View>

            </View>
            <View style={[styles.billersContainer]}>
                <Text style={styles.billersTitle}>Electricity</Text>
                <View style={styles.billersOperator}>
                    {billersOperators.map((billers) => (
                        <BillersOperator billers={billers} key={billers.title} />
                    ))}
                </View>
                <View style={styles.billersDetails}><Text style={styles.billersDetailsText}>view all</Text></View>

            </View>
            <View style={styles.billersContainer}>
                <Text style={styles.billersTitle}>TV Bills</Text>
                <View style={styles.billersOperator}>
                    {billersOperators.map((billers) => (
                        <BillersOperator billers={billers} key={billers.title} />
                    ))}
                </View>

            </View>

        </View>

    )

}
export default Billers