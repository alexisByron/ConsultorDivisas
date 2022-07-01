import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 10,
        color:'black'
    },
    listElement: {
        margin: 10,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#898a88'
    },
    exangeText: {
        color: 'black',
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5
    },
    denominatinText: {
        color: '#517fa4',
        fontSize: 13,
        marginTop: 5,
        marginBottom: 5
    },
    iconsContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    row:{
        flexDirection: 'row' 
    },
    flex1:{
        flex: 1 
    }
});