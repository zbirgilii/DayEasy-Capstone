import React from "react";

import styles from "./style";
import { Alert, Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, Pressable, View } from "react-native";
import { Button, SocialIcon } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { getAuth, signOut } from "firebase/auth";

export default function HomeScreen() {
  const LogOut = () => {
    const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });

  }
return (
  
  <KeyboardAvoidingView style={styles.containerView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.mainView}>
      <View style={styles.basicview}>
        <Text style={styles.basicText}>DayEasy Home Page</Text></View>
        <Button buttonStyle={styles.loginButton} onPress={() => LogOut()} title="Log Out" />
    </View>
  </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );

}