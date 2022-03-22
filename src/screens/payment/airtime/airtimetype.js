import React from 'react'
import { View, Text, Image } from 'react-native';
import styles from '../airtime/styles';
import TopBar from '../../../components/TopBar';
import TabButton from '../../../components/Tabs'
import RNPickerSelect from "react-native-picker-select";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FilledButton from '../../../components/FilledButton';

export const airtimeOperators = [
    {
        logo: require('../../../assests/img/fcmb.png'),
        title: "Bank",
        amount: "20,000"

    },
    {
        logo: require('../../../assests/img/Group.png'),
        title: '9PSB Wallet',
        amount: "20,000"

    },
    {
        logo: require('../../../assests/img/gtb.png'),
        title: 'Bank',
        amount: "20,000"

    },

];



const Airtime = () => {
    const [activeTab, setActiveTab] = React.useState('mobileTop-up');

    const switchToMobileTopup = () => {
        setActiveTab('mobileTop-up')
    }
    const switchDataBundle = () => {
        setActiveTab('data-bundle')
    }

    const handleChange = () => {
        console.log("")
    }

    const renderItem = (item) => {
        return (
            <View style={styles.cardContainer}>
                <Image style={styles.cardImage} source={item.logo} />

                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>{item.title}</Text>

                </View>
                <View>
                    <Text style={styles.cardMoney}>Balance:{item.amount}</Text>
                </View>

            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.headContainer}>
                <TopBar headerText={'Airtime'} />
            </View>
            <View style={styles.group}>
                <Text style={styles.label}>Network Provider</Text>

                <RNPickerSelect
                    placeholder={{
                        // ...placeholder,
                        label: "Select offer type"
                    }}
                    Icon={() => (
                        <FontAwesome
                            name="angle-down"
                            type="FontAwesome"
                            style={styles.icon}
                        />
                    )}
                    items={[
                        { label: 'Mtn', value: 'Mtn' },
                        { label: '9mobile', value: '9mobile' },
                        { label: 'Glo', value: 'glo' },
                    ]}
                    value={'offerType'}
                    useNativeAndroidPickerStyle={false}
                    onValueChange={val => handleChange("offerType", val)}
                    style={styles.picker}
                />
            </View>
            <View style={styles.tabContainer}>
                <Text style={styles.airtimeTitle}>Category</Text>
                <View style={styles.tabRow}>
                    <View style={styles.mobiletabContainer}>
                        <TabButton title='Mobile Top-up' active={activeTab === 'mobileTop-up'} onPress={switchToMobileTopup} />
                    </View>
                    <View style={styles.datatabContainer}>
                        <TabButton title='Data Bundle' active={activeTab === 'data-bundle'} onPress={switchDataBundle} />

                    </View>
                </View>
            </View>

            <View style={styles.cardWrapper}>
                {airtimeOperators.map((e) => renderItem(e))}
            </View>

            <View style={styles.btnWrapper}>
                <FilledButton title={"Purchase"} />
            </View>





        </View>
    )

}
export default Airtime