import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headContainer: {
        height: 85,
        backgroundColor: "#fff",
        paddingRight: 23,
        paddingLeft: 23,
    },
    tabRow: {
        flexDirection: "row",
        backgroundColor: "#FFF",
        height: 55,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#EAEAEA',
    },
    tabContainer: {
        paddingTop: 30,
        paddingRight: 20,
        paddingLeft: 20,
    },
    group: {
        paddingTop: 40,
        paddingRight: 20,
        paddingLeft: 20,
    },

    mobiletabContainer: {
        flex: 1,
        paddingLeft: 10,
        borderRadius: 5,
        justifyContent: 'center'
    },
    datatabContainer: {
        flex: 1,
        paddingRight: 10,
        justifyContent: 'center'
    },
    airtimeTitle: {
        color: "#000000",
        fontSize: 12,
        paddingBottom: 13

    },
    picker: {
        inputIOS: {
            backgroundColor: "#FFF",
            borderRadius: 3,
            color: "#262626",
            fontWeight: "600",
            // fontFamily: fonts.family._SEMI_BOLD,
            fontSize: 12,
            lineHeight: 16,
            height: 44,
            paddingLeft: 13,
            paddingRight: 30,
            borderWidth: 1,
            borderColor: "#EAEAEA"
        },
        inputAndroid: {
            backgroundColor: "#FFF",
            borderRadius: 3,
            color: "#262626",
            fontWeight: "600",
            // fontFamily: fonts.family._SEMI_BOLD,
            fontSize: 12,
            lineHeight: 16,
            height: 44,
            paddingLeft: 13,
            paddingRight: 30,
            borderWidth: 1,
            borderColor: "#EAEAEA"
        },
        iconContainer: {
            top: 14,
            right: 13
        }
    },
    icon: {
        color: "#979797",
        fontSize: 17
    },

    label: {
        fontWeight: "600",
        // fontFamily: fonts.family._SEMI_BOLD,
        fontSize: 12,
        lineHeight: 16,
        marginBottom: 4,
        color: "#000000"
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: "center",
        height: 60,
        borderRadius: 5,
        marginBottom: 15,
        borderRadius: 8,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: "rgba(84, 142, 78, 0.08)",
    },

    cardBody: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    cardTitle: {
        fontSize: 12,
        color: "#424242"

    },
    cardImage: {
        width: 24,
        height: 24,
    },
    cardMoney: {
        fontSize: 12,
        color: "#424242"
    },
    cardWrapper: {
        marginHorizontal: 20,
        paddingTop: 40,
    },

    btnWrapper: {
        paddingTop: 10,
        marginHorizontal: 20,
    }






})

export default styles;
