import React from "react";
import { StyleSheet,Keyboard, Text, TouchableWithoutFeedback, Pressable, View } from "react-native";
import { Button, SocialIcon } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { auth } from '../firebase.js';
import { useNavigation } from '@react-navigation/native';


WebBrowser.maybeCompleteAuthSession();

export default function CalorieIntakeScreen() {
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
      <View style={styles.mainView}>
        <View style={styles.basicView}>
          <Text style={styles.PageTitle}>Calorie Intake</Text>
        </View>
        <Text style={styles.Title2}>Previous Week at a glance</Text>
<<<<<<< Updated upstream
        <Text style={styles.Title2}>Daily Calorie Counter</Text>
=======
        <Text style={styles.Title3}>Sunday</Text>
        <Text style={styles.Title3}>Monday</Text>
        <Text style={styles.Title3}>Tuesday</Text>
        <Text style={styles.Title3}>Wednesday</Text>
        <Text style={styles.Title3}>Thursday</Text>
        <Text style={styles.Title3}>Friday</Text>
        <Text style={styles.Title3}>Saturday</Text>
        <Text style={styles.Title2}>Daily Calorie Counter</Text>
          <Text style={styles.Title3}>1pm</Text>
          <Text style={styles.Title3}>2pm</Text>
>>>>>>> Stashed changes
        </View>
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
<<<<<<< Updated upstream
    paddingTop: 50,
=======
    paddingTop: 20,
>>>>>>> Stashed changes
    paddingBottom: 10,
    fontWeight: '400',
    textAlign:'center',
    alignItems:'center' //center x axis
    //justifyContent:'flex-start' //center y axis

  },
  Title2:{
    fontSize: 20,
    color: 'white',
<<<<<<< Updated upstream
    paddingTop: 50,
    paddingBottom: 10,
=======
    paddingTop: 10,
    paddingBottom: 20,
    fontWeight: '400',
    textAlign:'center',
    alignItems:'center' //center x axis
    //justifyContent:'flex-start' //center y axis

  },
  Title3:{
    fontSize: 20,
    color: '#3D405B',
    paddingTop: 10,
    paddingBottom: 20,
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
// export default App;
=======
// export default App;
>>>>>>> Stashed changes
