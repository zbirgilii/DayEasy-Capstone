import * as React from 'react';
<<<<<<< Updated upstream
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home.js';
import LoginScreen from "./screens/Login.js";
=======
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'react-native';
>>>>>>> Stashed changes

const Stack = createNativeStackNavigator();

export default function App() {
<<<<<<< Updated upstream
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

=======
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />
  );
}
>>>>>>> Stashed changes
