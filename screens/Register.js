import React from "react";

import styles from "./style";
import { Alert, Image, Keyboard, KeyboardAvoidingView, 
  Text, TextInput, TouchableWithoutFeedback, Pressable, View } from "react-native";
import { Button, SocialIcon } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { auth } from '../firebase.js';
import { getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,  } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

// import * as Facebook from "expo-facebook";

WebBrowser.maybeCompleteAuthSession();

export default function Register() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmpassword, setconfirmpassword] = React.useState('')
  const navigation = useNavigation();

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
    navigation.goBack();
  }

  return (
    <><KeyboardAvoidingView style={styles.containerView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainView}>
          <View style={styles.basicview}>
            <Text style={styles.basicText}>DayEasy Registration Page</Text></View>
          <TextInput placeholder="Email" placeholderColor="#c4c3cb" onChangeText={text => setEmail(text)} style={styles.loginFormTextInput} />
          <TextInput placeholder="Password" placeholderColor="#c4c3cb" onChangeText={text => setPassword(text)} style={styles.loginFormTextInput} secureTextEntry={true} />
          <TextInput placeholder="Confirm Password" placeholderColor="#c4c3cb" onChangeText={text => setconfirmpassword(text)} style={styles.loginFormTextInput} secureTextEntry={true} />
          <Button buttonStyle={styles.loginButton} onPress={() => handleSignUp()} title="Register" />
          <Button buttonStyle={styles.loginButton} onPress={() => Goback()} title="Go Back" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </>
  );

}
