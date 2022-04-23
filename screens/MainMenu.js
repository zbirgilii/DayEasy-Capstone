import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import {StyleSheet, Text, View, Button,TouchableOpacity,Pressable, Alert } from 'react-native';
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
      <View style={styles.basicView}>
          <Text style={styles.PageTitle}>DayEasy Main Menu</Text>
      </View>
      <View style={styles.mainView}>
        
        <View style={{flexWrap: "wrap", flexDirection: "row", justifyContent:"center"}}>
          <TouchableOpacity style={styles.roundButton1}
          onPress={() => navigation.push("Calendar")} title="Calendar">
          <Text style={styles.basicText}>
            Calendar
            </Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton1}
           onPress={() => navigation.push("Workout")} title="Workout Plan">
            <Text style={styles.basicText}>
              workout plan
            </Text>        
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton1}
            onPress={() => sayHello()} title="Muscle Index">
            <Text style={styles.basicText}>
              Muscle index
            </Text>        
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sayHello()} style={styles.roundButton1} title="Meal Plan">
            <Text style={styles.basicText}>
              Meal plan
            </Text>        
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton1}
          onPress={() => navigation.push("WaterIntake")} title="Water Intake">
            <Text style={styles.basicText}>
              Water Intake
            </Text>        
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton1} 
          onPress={() => navigation.push("FastingTimer")} title="Fasting Timer">
            <Text style={styles.basicText}>
              Fasting time
            </Text>        
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton1} 
          onPress={() => navigation.push("CalorieIntake")} title="Calorie Intake">
            <Text style={styles.basicText}>
              Calorie Intake
            </Text>        
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton1}
           onPress={() => navigation.push("Pedometer")} title="Pedometer">
            <Text style={styles.basicText}>
              Step Counter
            </Text>        
          </TouchableOpacity>    
          </View> 
          <Text>
               
          </Text> 
          <TouchableOpacity style={styles.loginButton}
           onPress={() => LogOut()} title="Pedometer">
            <Text style={styles.basicText}>
              Log Out
            </Text>        
          </TouchableOpacity>    
      </View>
      </>
  )


}

const styles = StyleSheet.create({
  roundButton1: {
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 3,
    height: 60,
    width: 200,
    alignItems: 'center',
    marginBottom: 5,
    paddingBottom: 5,
  },
  mainView:{
    flex:1,
    //paddingTop:50,
    backgroundColor: '#81B29A',
    alignItems:'center', //center x axis
    justifyContent:'center', //center y axis
  },
  basicView:{
    backgroundColor:'#3D405B',
    width:'100%',
    marginBottom:0,
    padding: 10,
  },
  basicText:{
    fontSize:20,
    //color:'#F4F1DE',
    textAlign:'center',
    padding:20
  },
  PageTitle:{
    fontSize: 50,
    color: 'white',
    paddingTop: 50,
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