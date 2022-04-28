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
import AbsMenu from "./screens/allWorkouts/AbsMenu.js";
import LegsMenu from "./screens/allWorkouts/LegsMenu.js";
import ShouldersMenu from "./screens/allWorkouts/ShouldersMenu.js";
import ArmsMenu from "./screens/allWorkouts/ArmsMenu.js";
import AddViewWorkout from "./screens/allWorkouts/AddViewWorkout.js"; 
import CurrentPlan from "./screens/allWorkouts/CurrentPlan.js";
import MuscleIndexMain from './screens/MuscleIndex/MuscleIndexMain.js';
import WeekDayMenu from "./screens/allWorkouts/WeekDayMenu.js";
import WaterIntakeScreen from "./screens/WaterIntake.js";
import CalorieIntakeScreen from "./screens/CalorieIntake.js";

import MealPlannerScreen from "./screens/Mealplanner.js"
import FastingScreen from "./screens/FastingTimer.js";
import PedometerScreen from "./screens/Pedometer.js";

import styles from "./screens/style";
import { signup, login, logout } from "./firebase.js";
import AuthContextProvider from './contexts/AuthContext.js';
import { useAuth } from './contexts/AuthContext.js';
// import { useAuth } from './firebase.js';
import AbsIndex from "./screens/MuscleIndex/AbsIndex.js";
import ArmsIndex from "./screens/MuscleIndex/ArmsIndex.js";
import ChestIndex from "./screens/MuscleIndex/ChestIndex.js";
import LegsIndex from "./screens/MuscleIndex/LegsIndex.js";
import ShouldersIndex from "./screens/MuscleIndex/ShouldersIndex.js";

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
        <Stack.Screen name="Calendar" component={CalendarScreen}/>
        <Stack.Screen name="Pedometer" component={PedometerScreen} options={{ headerShown: true}}/>
        <Stack.Screen name="Fasting Timer" component={FastingScreen}/>
        <Stack.Screen name="MealPlanner" component={MealPlannerScreen} />
        <Stack.Screen name="WorkoutSelect" component={WorkoutSelect} /> 
        <Stack.Screen name="AbsMenu" component={AbsMenu} />
        <Stack.Screen name="ShouldersMenu" component={ShouldersMenu} />
        <Stack.Screen name="LegsMenu" component={LegsMenu} />
        <Stack.Screen name="ArmsMenu" component={ArmsMenu} />
        <Stack.Screen name="AddViewWorkout" component={AddViewWorkout} />  
        <Stack.Screen name="CurrentPlan" component={CurrentPlan} />
        <Stack.Screen name="MuscleIndexMain" component={MuscleIndexMain} />
        <Stack.Screen name="AbsIndex" component={AbsIndex} />
        <Stack.Screen name="ArmsIndex" component={ArmsIndex} />
        <Stack.Screen name="ChestIndex" component={ChestIndex} />
        <Stack.Screen name="LegsIndex" component={LegsIndex} />
        <Stack.Screen name="ShouldersIndex" component={ShouldersIndex} /> 
        <Stack.Screen name="WeekDayMenu" component={WeekDayMenu} />
         
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

