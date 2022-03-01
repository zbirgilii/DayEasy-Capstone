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

  const Goback = () => {
    navigation.Goback();
  }

  return (
    <><KeyboardAvoidingView style={styles.containerView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainView}>
          <View style={styles.basicview}>
            <Text style={styles.basicText}>DayEasy Regstration Page</Text></View>
          <TextInput placeholder="Username" placeholderColor="#c4c3cb" onChangeText={text => setEmail(text)} style={styles.loginFormTextInput} />
          <TextInput placeholder="Password" placeholderColor="#c4c3cb" onChangeText={text => setPassword(text)} style={styles.loginFormTextInput} secureTextEntry={true} />
          <Button buttonStyle={styles.loginButton} onPress={() => handleSignUp()} title="Register" />
          <Button buttonStyle={styles.loginButton} onPress={() => Goback()} title="Go Back" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </>
  );

}
