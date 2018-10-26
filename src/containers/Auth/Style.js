import { StyleSheet, Dimensions } from 'react-native'
import { Images, Strings, Colors } from '../../config'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const style = StyleSheet.create({
    ItemStyle: {
        width: "80%",
        alignSelf: 'center',
        // backgroundColor: Colors.splash.ItemStyleBackground,
        borderRadius: 5
    },
    textInput: {
        alignSelf: 'flex-end',
        textAlign: "center",
        color: '#FFF'
    },
    logo: {
        width: width / 4,
        height: width / 4,
        alignSelf: 'center',
        marginTop: 10
    },
    button: {
        paddingTop: 20,
        paddingBottom: 20,
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    darkBoxWithOpacity: {
        height: (height / 3) * 2,
        backgroundColor: 'rgba(0,0,0,0.3)',
        fontSize: 30,
        borderRadius: 10,
        width: (width / 6) * 5,
        alignSelf: 'center',
        padding: 8,
        paddingBottom: 15
    },
    logoContainer: {
        flex: 0.45
    },
    textInputContainer: {
        flex: 0.55,
        paddingBottom: 20,
        paddingTop: 20,
        borderRadius: 10,
        borderColor: "#fff",
        // borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%'
    },
    submitButton: {
        width: "40%",
        alignSelf: 'center',
        borderColor: "#FFF",
        borderRadius: 30,
        borderWidth: 1,
        marginTop: 10,
        padding: 8,
        backgroundColor: Colors.splash.submitButton.Background
    },
    submitButtonText: {
        color: Colors.splash.submitButton.Color,
        fontSize: 16,
        width: '100%',
        alignSelf: 'center',
        textAlign: 'center'
    },
    AppName: {
        color: "#12A9EB",
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    spinnerTextStyle:{
        color: "#ffffff"
    }
});



export default style;