//import * as React from 'react';
//import pageTitle from './screens/WorkOutScreen';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection } from 'firebase/firestore';
import { auth } from '../../firebase';
import React, { useState, useEffect } from "react";

export default function weekDayMenu() {

  const navigation = useNavigation();
  //const [userName, setUserName ] = useState();
  //const [dayOfWeek, setDayOfWeek ] = useState('');
  let dayOfWeek = '';
  //const [bodyPart, setBodyPart ] = useState();
  //const workoutCollectionRef = collection(db, 'UserWorkPlan');
  
  const addToDatabase = async (dayOfWeek) => {
    await addDoc(workoutCollectionRef, {
       dayOfWeek,
       userName: {name: auth.currentUser.displayName, id: auth.currentUser.uid} 
    });
    navigation.push('Workout');
  };
  
    const changeStyle = () => {
        Alert('create me');
        //style={styles.AddedToWorkout};
    }

  return (
    <>
      <View style={styles.mainView}>        
        <View style={styles.basicView}>
          <TouchableOpacity
            style={styles.backButton} 
            onPress={() => navigation.push("Workout")}>
            <Text style={styles.basicText}>
             &lt;Back 
            </Text>        
          </TouchableOpacity>
          <Text style={styles.PageTitle}>_nameHere</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle} 
          //onPress={(dayOfWeek = 'Sunday')}
          onPress={(addToDatabase('Sunday'))}
          >          
          <Text style={styles.buttonText}>
             Sunday
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={changeStyle}>
          <Text style={styles.buttonText}>
             Monday
          </Text>        
        </TouchableOpacity> 
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={changeStyle}>
          <Text style={styles.buttonText}>
             Tuesday
          </Text>        
        </TouchableOpacity> 
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={changeStyle}>
          <Text style={styles.buttonText}>
             Wednesday
          </Text>        
        </TouchableOpacity> 
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={changeStyle}>
          <Text style={styles.buttonText}>
             Thursday
          </Text>        
        </TouchableOpacity> 
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={changeStyle}>
          <Text style={styles.buttonText}>
             Friday
          </Text>        
        </TouchableOpacity> 
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={changeStyle}>
          <Text style={styles.buttonText}>
             Saturday
          </Text>        
        </TouchableOpacity>        
                 
      </View></>
       
  )}

  const styles = StyleSheet.create({
    mainView:{
        //flex:1,
        //paddingTop:50,
        backgroundColor: '#81B29A',
        //height: '100%',
        //height: '100vh',
        //alignSelf: 'stretch',
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
        color: 'white',
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
      buttonText:{
        fontSize: '300%',
        fontWeight: 700,
        marginTop: 10,
        marginBottom: 10,
        //borderColor: 'black',
        //textShadowColor: 'red',
        color: 'white'
      },
      buttonStyle:{
        textAlign:'center',
        alignItems:'center',
        borderRadius: 1000,
        borderWidth: 1,
        width: '70%',
        //marginBottom: 10,
        //padding: '100, 7px 10px 7px',
        //paddingRight: '50%',
        //paddingLeft: 70,
        //flex: 1,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 5,
        backgroundColor:'#3D405B',
        color: 'white'
      },
      AddedToWorkout:{
        textAlign:'center',
        alignItems:'center',
        borderRadius: 1000,
        borderWidth: 1,
        width: '70%',
        //marginBottom: 10,
        //padding: '100, 7px 10px 7px',
        //paddingRight: '50%',
        //paddingLeft: 70,
        //flex: 1,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 5,
        backgroundColor:'red',
        color: 'red'
      }
})
