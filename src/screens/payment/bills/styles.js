import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headContainer: {
        height: 150,
        backgroundColor: "#fff",
        paddingRight: 23,
        paddingLeft: 23,

    },
    searchContainer: {
        flex: 1,
        paddingTop: 20,
    },
    billersContainer: {
        height: 185,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingRight: 23,
        paddingLeft: 23,
        marginTop: 30,

    },
    billersTitle: {
        fontSize: 12,
        // fontFamily: PRIMARY_FONT.bold,
        color: "#11173A",
    },
    billersOperator: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }



})

export default styles;
