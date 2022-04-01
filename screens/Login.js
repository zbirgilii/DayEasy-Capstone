import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {StyleSheet, Text, View, Button, Alert,TextInput,  Pressable, 
  Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { getAuth,
  signInWithEmailAndPassword } from "firebase/auth";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')


  const LogOut = () => {
    const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });

  }

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        GetUserData()
        const user = userCredential.user;
        
        // ...
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  const handleSignUp = () => {
    navigation.push("Register");
  }

  return ( 
    <>
    <KeyboardAvoidingView style={styles.containerView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainView}>
        <View style={styles.basicView}>
          <Text style={styles.PageTitle}>DayEasy Main Menu</Text>
        </View>
        <View style={styles.containerView}>
          <TextInput placeholder="Email" placeholderColor="#c4c3cb" 
            onChangeText={text => setEmail(text)} style={styles.loginFormTextInput} />
          <TextInput placeholder="Password" placeholderColor="#c4c3cb" 
            onChangeText={text => setPassword(text)} style={styles.loginFormTextInput} secureTextEntry={true} />
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'red' : 'blue',
              },
              styles.loginButton,
            ]}
            onPress={() => handleLogin()}>
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
      <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'red' : 'blue',
              },
              styles.registerButton,
            ]}
            onPress={() => handleSignUp()}>
            <Text style={styles.loginText}>Register</Text>
      </Pressable>
   
    </>  
  )}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    //paddingTop:50,
    backgroundColor: '#81B29A',
    alignItems:'center', //center x axis
    //justifyContent:'center', //center y axis
  },
  containerView:{
    flex: 1
  },
  basicView:{
    backgroundColor:'#3D405B',
    width:'100%',
    marginBottom:5
  },
  containerView: {
    flex: 2,
    width:'100%',
    alignItems: "center"
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
    fontWeight: "400",
    textAlign:'center',
    alignItems:'center' //center x axis
    //justifyContent:'flex-start' //center y axis

  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    width: '80%',
    alignItems: 'center',
    paddingBottom: 5,
  },
  registerButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 5,
  },
  loginText:{
    color:'#F4F1DE',
    textAlign:'center',
    padding:20,
    color: 'white'
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
})