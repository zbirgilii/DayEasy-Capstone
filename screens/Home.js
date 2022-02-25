import React from "react";

import styles from "./style";
import { Alert, Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, Pressable, View } from "react-native";
import { Button, SocialIcon } from "react-native";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
// import * as Facebook from "expo-facebook";

export default function HomeScreen() {

return (
  
  <KeyboardAvoidingView style={styles.containerView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.mainView}>
      <View style={styles.basicview}>
        <Text style={styles.basicText}>DayEasy Home Page</Text></View>
    </View>
  </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );

}