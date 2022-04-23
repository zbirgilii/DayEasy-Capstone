import * as React from 'react';
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalendarScreen from './screens/Calendar.js';
import RegisterScreen from './screens/Register.js';
import LoginScreen from "./screens/Login.js";
import MainMenuScreen from "./screens/MainMenu.js";
import WorkoutPlanMain from "./screens/WorkoutPlanMain.js";
import WorkoutSelect from "./screens/allWorkouts/WorkoutSelect.js";
import AddViewWorkout from "./screens/allWorkouts/AddViewWorkout.js";
import MuscleIndexMain from './screens/MuscleIndex/MuscleIndexMain.js';
import weekDayMenu from "./screens/allWorkouts/weekDayMenu.js";
import WaterIntakeScreen from "./screens/WaterIntake.js";
import CalorieIntakeScreen from "./screens/CalorieIntake.js";
import styles from "./screens/style";
import { signup, login, logout } from "./firebase.js";
import AuthContextProvider from './contexts/AuthContext.js';
import { useAuth } from './contexts/AuthContext.js';
// import { useAuth } from './firebase.js';

const Stack = createNativeStackNavigator();

export default function App() {
  
  const [isLoading, setIsLoading] = React.useState(true);
  const currentUser  = useAuth();

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
  <AuthContextProvider>
  <NavigationContainer>
    <Stack.Navigator>
      {currentUser == null || "" ?
      (
        <>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false}}/>
        </>
      ) : (
        <>
        <Stack.Screen name="Main Menu" component={MainMenuScreen} />
        <Stack.Screen name="WaterIntake" component={WaterIntakeScreen} />
        <Stack.Screen name="CalorieIntake" component={CalorieIntakeScreen} />
        <Stack.Screen name="WorkoutPlanMain" component={WorkoutPlanMain} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="WorkoutSelect" component={WorkoutSelect} /> 
        <Stack.Screen name="AddViewWorkout" component={AddViewWorkout} />
        <Stack.Screen name="MuscleIndexMain" component={MuscleIndexMain} />  
        <Stack.Screen name="weekDayMenu" component={weekDayMenu} /> 
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
  </AuthContextProvider>
  );
}
// export default App;
// screenOptions={{ headerShown: false}}
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

