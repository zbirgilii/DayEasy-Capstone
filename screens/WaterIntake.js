import React from "react";
import { StyleSheet,Keyboard, Text, TouchableWithoutFeedback, Pressable, View } from "react-native";
import { Button, SocialIcon } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { auth } from '../firebase.js';
import { useNavigation } from '@react-navigation/native';


WebBrowser.maybeCompleteAuthSession();

export default function WaterIntakeScreen() {
    const navigation = useNavigation();

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '325201293658-0b5v1iqfstvgbqkh5bdmt76j5n9j3ode.apps.googleusercontent.com',
        iosClientId: '325201293658-0b5v1iqfstvgbqkh5bdmt76j5n9j3ode.apps.googleusercontent.com',
        androidClientId: '325201293658-0b5v1iqfstvgbqkh5bdmt76j5n9j3ode.apps.googleusercontent.com',
        webClientId: '325201293658-0b5v1iqfstvgbqkh5bdmt76j5n9j3ode.apps.googleusercontent.com',
      });

    const Goback = () => {
     navigation.goBack();
  }
  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      }
  }, [response]);

  return (
    <>
    <>
  
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainView}>
        <View style={styles.basicView}>
          <Text style={styles.PageTitle}>Water Intake</Text>
        </View>
          <Text style={styles.Title2}>Previous Week at a glance</Text>
          <Text style={styles.Title2}>Daily</Text>
        </View>
    </TouchableWithoutFeedback>
    <Button buttonStyle={styles.loginButton} onPress={() => Goback()} title="Go Back" />
     </>
     </>
  )
}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    //paddingTop:50,
    backgroundColor: '#81B29A',
    alignItems:'center', //center x axis
    //justifyContent:'center', //center y axis
  },
  basicView:{
    backgroundColor:'#3D405B',
    width:'100%',
    marginBottom:5
  },
  basicText:{
    fontSize:20,
    //color:'#F4F1DE',
    textAlign:'center',
    padding:20
  },
  PageTitle:{
    fontSize: 40,
    color: 'white',
    paddingTop: 50,
    paddingBottom: 10,
    fontWeight: '400',
    textAlign:'center',
    alignItems:'center' //center x axis
    //justifyContent:'flex-start' //center y axis

  },
  Title2:{
    fontSize: 20,
    color: 'white',
    paddingTop: 50,
    paddingBottom: 10,
    fontWeight: '400',
    textAlign:'center',
    alignItems:'center' //center x axis
    //justifyContent:'flex-start' //center y axis

  },
  buttonStyle:{
    textAlign:'center',
    alignItems:'center'
  }
})
function sayHello() {
  alert('create me');
}
// export default App;
