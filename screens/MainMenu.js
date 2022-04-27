import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import {StyleSheet, Text, View, Button,TouchableOpacity,Pressable, Alert, SafeAreaView } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { logout } from '../firebase';
   

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const navigation = useNavigation();

  const LogOut = () => {
    const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
          });
  }
  const sayHello = () => {
    Alert.alert('Coming Soon');
  }
      

  return ( 
    <>
      <SafeAreaView style={styles.mainView}>
      <View style={styles.basicView}>
          <Text style={styles.PageTitle}>DayEasy Main Menu</Text>
      </View>
      <View style={styles.mainView}>
        <View style={{flex: 1, flexWrap: "wrap", flexDirection: "row", justifyContent:"center"}}>
          <TouchableOpacity style={styles.roundButton}
          onPress={() => navigation.push("Calendar")} title="Calendar">
          <Text style={styles.basicText}>
            Calendar
            </Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}
           onPress={() => navigation.push("AddViewWorkout")} title="Workout Plan">
            <Text style={styles.basicText}>
              Workout plan
            </Text>        
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}
            onPress={() => sayHello()} title="Muscle Index">
            <Text style={styles.basicText}>
              Muscle index
            </Text>        
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>  navigation.push("MealPlanner")} style={styles.roundButton} title="Meal Plan">
            <Text style={styles.basicText}>
              Meal plan
            </Text>        
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}
          onPress={() => navigation.push("WaterIntake")} title="Water Intake">
            <Text style={styles.basicText}>
              Water Intake
            </Text>        
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton} 
          onPress={() => navigation.push("FastingTimer")} title="Fasting Timer">
            <Text style={styles.basicText}>
              Fasting time
            </Text>        
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton} 
          onPress={() => navigation.push("CalorieIntake")} title="Calorie Intake">
            <Text style={styles.basicText}>
              Calorie Intake
            </Text>        
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}
           onPress={() => navigation.push("Pedometer")} title="Pedometer">
            <Text style={styles.basicText}>
              Step Counter
            </Text>        
          </TouchableOpacity>    
          </View>  
          <TouchableOpacity style={styles.Return}
           onPress={() => LogOut()} title="Pedometer">
            <Text style={styles.basicText}>
              Log Out
            </Text>        
          </TouchableOpacity>    
      </View>
      </SafeAreaView >
    </>
  )


}

const styles = StyleSheet.create({
  roundButton: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  Return: {
    backgroundColor: "#3897f1",
    borderRadius: 3,
    height: 45,
    width: 100,
    alignItems: 'center',
    paddingTop: 5,    
  },
  mainView:{
    flex:1,
    //paddingTop:50,
    backgroundColor: '#81B29A',
    alignItems:'center', //center x axis
    justifyContent:'center', //center y axis
  },
  basicView:{
    flex:.35,
    backgroundColor:'#3D405B',
    width:'100%',
  },
  basicText:{
    fontSize:20,
    //color:'#F4F1DE',
    alignItems: "center",
    textAlign:'center',
    padding: 5,
  },
  PageTitle:{
    fontSize: 45,
    color: 'white',
    paddingTop: 20,
    paddingBottom: 1,
    fontWeight: '500',
    textAlign:'center',
    alignItems:'center' //center x axis
    //justifyContent:'flex-start' //center y axis

  },
  buttonStyle:{
    textAlign:'center',
    alignItems:'center'
  }
})

// export default App;