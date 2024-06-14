import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        color: '#aaa'
    },
    text: {
        fontSize: 16,
        color: '#aaa'
    },
    textDone: {
        fontSize: 16,
        color: '#aaa',
        textDecorationLine: 'line-through'
    },
    whiteText: {
        color: 'white',
        fontSize: 16
    },
    textInput: {
        borderColor: '#ccc',
        borderWidth: 2,
        borderStyle: 'solid',
        padding: 10,
        fontSize: 16,
        width: Dimensions.get('screen').width * 0.6,
        borderRadius: 10,
        paddingLeft: 10,

    },
    inputContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    addButton: {
        backgroundColor: '#00bfff',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.25,
        borderRadius: 10,
    },
    doneButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.25,
        height: Dimensions.get('screen').height * 0.06,
        borderRadius: 10,
    },
    scrollContainer: {

    },
    itemContainer: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default styles;