const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        // paddingTop: 0,
        width:'100%',
        backgroundColor: '#81B29A',
        alignItems:'center', //center x axis
        justifyContent:'center', //center y axis
      },
    basicview:{
      backgroundColor:'#3D405B',
      width:'100%',
      marginBottom: 15,
    },
    basicContainer:{
        flex: .9,
        marginTop: 1,
        width:'100%',
        height: '40%',
        backgroundColor: '#81B29A',
        alignItems:'center', //center x axis
        justifyContent:'center', //center y axis
      },
    basicText:{
      fontSize: 35,
      color:'#F4F1DE',
      textAlign:'center',
      padding:20,
    },
    containerView: {
        flex: 1,
        alignItems: "center"
    },
    loginScreenContainer: {
        flex: 1,
    },  
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#eaeaea",
        backgroundColor: "#fafafa",
        width:'80%',
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    loginButton: {
        backgroundColor: "#3897f1",
        borderRadius: 5,
        height: 45,
        width: 400,
        alignItems: "center",
        paddingBottom: 100,
    },
    fbLoginButton: {
        height: 45,
        marginTop: 10,
        backgroundColor: 'transparent',
    },
});

export default styles;