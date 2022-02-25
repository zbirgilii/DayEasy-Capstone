import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home.js';
import LoginScreen from "./screens/Login.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
        {/* <Stack.Screen nane="Home" conponent={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// export default App;

// import React, { Component } from 'react';
// import * as WebBrowser from 'expo-web-browser';
// import * as Google from 'expo-auth-session/providers/google';
// import {StyleSheet, Text, View,Button, Alert, TextInput} from 'react-native';
// WebBrowser.maybeCompleteAuthSession();

