import React from "react";
 import { StyleSheet,Keyboard, Text, TouchableWithoutFeedback, Pressable, View } from "react-native";
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
     <>
     <>
   
     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={styles.mainView}>
         <View style={styles.basicView}>
           <Text style={styles.PageTitle}>Calorie Intake</Text>
         </View>
         <View style={styles.container}>
            <View style={styles.sideInfo}>
            
                <Text style={styles.currentCups}>0/10</Text>
            </View>
            <View style={styles.percentageContainer}>
                <Text style={styles.currentPercentage}>0%</Text>
                <View style={styles.progress}></View>
            </View>
            <View style={styles.sideInfo}>

                <Text style={styles.currentLiters}>0 kCal/ 2.000 kCal</Text>
            </View>
         </View>
         <View>
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
     paddingTop: 20,
     paddingBottom: 10,
     fontWeight: '400',
     textAlign:'center',
     alignItems:'center' //center x axis
     //justifyContent:'flex-start' //center y axis
 
   },
   container:{
    display: 'grid',
   gridTemplateColumns: '2fr 3fr 2fr',
   width: '100%',
   maxWidth: '600px',
   margin: 'auto',
   gap: '10px',
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
   minHeight:'300px',
   margin: 'auto',
   backgroundColor: '#fff',
   borderRadius: '5px',
   overflow: 'hidden',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   fontSize: '50',
   color: '#fff',
   position: 'relative',
 },

 currentPercentage:{
   zIndex: '1',
 },
 progress:{
   backgroundColor: '#2196f3',
   position:'absolute',
   width: '100%',
   bottom: '0',
   transition: '0.5s ease',
 
 },
 buttons:{
   gridColumn: -1/1,
   margin: '10px auto',

 },
 button:{
   backgroundColor: '#81B29A',
   color: '#fff',
   border: '1px solid #a5d7fe',
   width: '60px',
   height: '60px',
   fontSize: '45px',
   borderRadius: '50%',
   outlineStyle: 'none',
   cursor: 'pointer',
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

