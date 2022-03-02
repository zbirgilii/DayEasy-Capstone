import * as React from 'react';
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './screens/Register.js';
import LoginScreen from "./screens/Login.js";
import HomeScreen from "./screens/Home.js";
import styles from "./screens/style";
import { signup, login, logout, useAuth } from "./firebase.js";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const currentUser = useAuth();

  React.useEffect(() => {
    setTimeout(()=> {
      setIsLoading(false);
    }, 1000);

  }, []);

  if (isLoading) {
    return ( <View style={styles.mainView}>
      <ActivityIndicator size="large" />
    </View>
    )
  }
  
  return (
    
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      {currentUser == null ?(
        <>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      ) : (
        <>
        <Stack.Screen name="Home" component={HomeScreen} />
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
    
  );
}
// export default App;

/* <Stack.Navigator>
          {currentUser == null ? (
            // No token found, user isn't signed in
            
            <Stack.Screen name="Register" component={RegisterScreen}/>
          ) : (
            // User is signed in
            <Stack.Screen name="Home" component={HomeScreen} />
          )}
        </Stack.Navigator> */

// import React, { Component } from 'react';
// import * as WebBrowser from 'expo-web-browser';
// import * as Google from 'expo-auth-session/providers/google';
// import {StyleSheet, Text, View,Button, Alert, TextInput} from 'react-native';
// WebBrowser.maybeCompleteAuthSession();

