import React , {useState} from "react";
 import { StyleSheet,Keyboard, Text, TouchableWithoutFeedback, Pressable, View } from "react-native";
 import { Button, SocialIcon } from "react-native";
 import * as WebBrowser from 'expo-web-browser';
 import * as Google from 'expo-auth-session/providers/google';
 import { auth } from '../firebase.js';
 import { useNavigation } from '@react-navigation/native';
 
 
 WebBrowser.maybeCompleteAuthSession();
 
 export default function CalorieIntakeScreen() {
     const navigation = useNavigation();
     const [TotalCal, setTotalCal] = useState(2000)
     const [currentCal, setcurrentCal] = useState(0)

 
    const Goback = () => {
    navigation.goBack();
    }

    var addCalorie = () => {
      currentCal = currentCal + 1;
    }

    return (
      <>
      <>
    
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainView}>
          <View style={styles.basicView}>
            <Text style={styles.PageTitle}>Calorie Intake</Text>
          </View>
          <View style={styles.container}>
              <View style={styles.sideInfo}>
              
                  <Text style={styles.currentCups}></Text>
              </View>
              <View style={styles.percentageContainer}>
                  <Text style={styles.currentPercentage}>0%</Text>
                  <View style={styles.progress}></View>
              </View>
              <View style={styles.sideInfo}>

                  <Text style={styles.currentLiters}>{currentCal} kCal/{TotalCal} kCal</Text>
              </View>
          </View>
          <View>
              <Button onClick={addCalorie()} title="Add">
                <Text style={styles.basicText}>
                  Add
                </Text>        
              </Button>
              <button class="remove">-</button>
              <button class="add">+</button>
          </View>

          </View>
      </TouchableWithoutFeedback>
      <Button buttonStyle={styles.loginButton} onPress={() => Goback()} title="Go Back" />
        </>
        </>
    )
 }
 
 const styles = StyleSheet.create({
   mainView:{
     flex:1,
     //paddingTop:50,
     backgroundColor: '#81B29A',
     alignItems:'center', //center x axis
     //justifyContent:'center', //center y axis
   },
   basicView:{
     backgroundColor:'#3D405B',
     width:'100%',
     marginBottom:5
   },
   basicText:{
     fontSize:20,
     //color:'#F4F1DE',
     textAlign:'center',
     padding:20
   },
   PageTitle:{
     fontSize: 40,
     color: 'white',
     paddingTop: 50,
     paddingBottom: 10,
     fontWeight: '400',
     textAlign:'center',
     alignItems:'center' //center x axis
     //justifyContent:'flex-start' //center y axis
 
   },
   container:{
    display: 'flex',
   width: '100%',
   maxWidth: 600,
   margin: 'auto',
  },
  sideInfo:{
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
 },
 percentageContainer:{
   width: '70%',
   height:'100%',
   minHeight:300,
   margin: 'auto',
   backgroundColor: '#fff',
   borderRadius: 5,
   overflow: 'hidden',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   fontSize: 50,
   color: '#fff',
   position: 'relative',
 },

 currentPercentage:{
   zIndex: 1,
 },
 progress:{
   backgroundColor: '#2196f3',
   position:'absolute',
   width: '100%',
   bottom: '0',
 
 },
 buttons:{
  margin:10,

 },
   Title2:{
     fontSize: 20,
     color: 'white',
     paddingTop: 50,
     paddingTop: 20,
     paddingBottom: 10,
     fontWeight: '400',
     textAlign:'center',
     alignItems:'center' //center x axis
     //justifyContent:'flex-start' //center y axis
   },
 
   Title3:{
     fontSize: 20,
     color: '#3D405B',
     paddingTop: 20,
     paddingBottom: 10,
     fontWeight: '400',
     textAlign:'center',
     alignItems:'center' //center x axis
     //justifyContent:'flex-start' //center y axis
   },
 
   buttonStyle:{
     textAlign:'center',
     alignItems:'center'
   },
   loginButton:{
     color: '#81B29A',

   }
 })
 function sayHello() {
   alert('create me');
 }

