import React from "react";

import styles from "./style";
import { Alert, Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, Pressable, View } from "react-native";
import { Button, SocialIcon } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { auth } from '../firebase.js';
import { getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,  } from "firebase/auth";
// import * as Facebook from "expo-facebook";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '325201293658-0b5v1iqfstvgbqkh5bdmt76j5n9j3ode.apps.googleusercontent.com',
    iosClientId: '325201293658-0b5v1iqfstvgbqkh5bdmt76j5n9j3ode.apps.googleusercontent.com',
    androidClientId: '325201293658-0b5v1iqfstvgbqkh5bdmt76j5n9j3ode.apps.googleusercontent.com',
    webClientId: '325201293658-0b5v1iqfstvgbqkh5bdmt76j5n9j3ode.apps.googleusercontent.com',
  });
  
  const GetUserData = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      }
  }, [response]);

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  // firebase.auth().signOut().then(() => {
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });

  return (
    <><KeyboardAvoidingView style={styles.containerView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainView}>
          <View style={styles.basicview}>
            <Text style={styles.basicText}>DayEasy Login Page</Text></View>
          <TextInput placeholder="Username" placeholderColor="#c4c3cb" onChangeText={text => setEmail(text)} style={styles.loginFormTextInput} />
          <TextInput placeholder="Password" placeholderColor="#c4c3cb" onChangeText={text => setPassword(text)} style={styles.loginFormTextInput} secureTextEntry={true} />
          <Button buttonStyle={styles.loginButton} onPress={() => handleLogin()} title="Login" />
          
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    <Button buttonStyle={styles.loginButton} onPress={() => handleSignUp()} title="Register" />
    <Button containerStyle={styles.fbLoginButton} disabled={!request} type='clear' onPress={() => { promptAsync(); } } title="Login With Google" /></>

  );

}