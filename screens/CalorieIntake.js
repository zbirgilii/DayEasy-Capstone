import React from "react";

import styles from "./style";
import { Alert, Image, Keyboard, KeyboardAvoidingView, Text, StyleSheet,TextInput, TouchableWithoutFeedback, Pressable, View } from "react-native";
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
      
      /*
    <><KeyboardAvoidingView style={styles.containerView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainView}>
          <View style={styles.basicview}>
            <Text style={styles.basicText}>Water Intake</Text></View>

          <Button buttonStyle={styles.loginButton} onPress={() => Goback()} title="Go Back" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </> */
    <>
    <>
    <KeyboardAvoidingView style={styles.containerView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainView}>
        <View style={styles.basicView}>
          <Text style={styles.PageTitle}>Calorie Intake</Text>
          <Text style={styles.PageTitle}>-------------</Text>

        </View>
        </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    <Button buttonStyle={styles.loginButton} onPress={() => Goback()} title="Go Back" />
     </>
     </>
  )
}