
 import React from "react";
 import { StyleSheet,Keyboard, Text, TouchableWithoutFeedback, Pressable, View } from "react-native";
 import { Button, SocialIcon } from "react-native";
 import * as WebBrowser from 'expo-web-browser';
 import * as Google from 'expo-auth-session/providers/google';
 import { auth } from '../firebase.js';
 import { useNavigation } from '@react-navigation/native';
 
 
 WebBrowser.maybeCompleteAuthSession();
 
 export default function WaterIntakeScreen() {
      const addButton= document.querySelector(".add"),
      removeButton= document.querySelector(".remove");
    //elements for update
      const currentCupsEl = document.querySelector(".current-cups"),
      currentLitersEl = document.querySelector(".current-liters"),
      currentPercentageEl = document.querySelector(".currentPercentage"),
      progressArea = document.querySelector(".progress");


      const MAX_CUPS =10,
            MIN_CUPS = 0;

      let cups =0,
          liters = 0,
          percentage = 0;

      addButton.addEventListener("click", addCup);
      removeButton.addEventListener("click", removeCup);

      function addCup(){
          cups++;
          liters += 250;
          percentage= (cups/MAX_CUPS)*100;
      //update layout
      currentCupsEl.textContent= `${cups}/10`;
      currentLitersEl.textContent=`${liters/1000}L / 2.5L`;
      currentPercentageEl.textContent=`${percentage}%`;
      progressArea.style.height=`${percentage}%`;

      if(cups === MAX_CUPS){
        addButton.disabled = true;
      } else{
        removeButton.disabled = false;
      }
      }

      function removeCup(){
          cups--;
          liters -= 250;
          percentage= (cups/MAX_CUPS)*100;

      currentCupsEl.textContent= `${cups}/10`;
      currentLitersEl.textContent=`${liters/1000}L / 2.5L`;
      currentPercentageEl.textContent=`${percentage}%`;
      progressArea.style.height=`${percentage}%`;

      if(cups === MIN_CUPS){
        removeButton.disabled = true;
      } else{
        addButton.disabled = false;
      }
    }

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
           <Text style={styles.PageTitle}>Water Intake</Text>
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

                <Text style={styles.currentLiters}>0L/ 2.5L</Text>
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
   container:{
     display: 'flex',
    width: '100%',
    maxWidth: '600px',
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
    minHeight:'300px',
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

    margin: '10px auto',

  },
  button:{
    backgroundColor: '#81B29A',
    color: '#fff',
    width: '60px',
    height: '60px',
    fontSize: 45,
    borderRadius: 50,
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
 
  //  buttonStyle:{
  //   Button:{
  //     padding: 15,
  //     borderRadius:10,
  //     backgroundcolor:'#fff',
  //     color:'#81B29A'
  //    },
  //    textAlign:'center',
  //    alignItems:'center',
  //    paddingBottom: 30,
  //    paddingTop: 50
  //  }
   
 })
 
 
 function sayHello() {
   alert('create me');
 }
