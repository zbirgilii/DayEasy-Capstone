import React, { useState } from 'react';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
//import {db} from '../firebase.js';
import { db } from '../../firebase';
//import WeekDayMenu from './allWorkouts/WeekDayMenu.js';
import { collection,collectionGroup, query,setDoc, where, getDocs, getDoc, doc ,updateDoc} from "firebase/firestore";

export default function MuscleIndexMain() {
  const navigation = useNavigation();
  const [selectGroup, setSelectGroup] = useState('');
  let weekDayTitle = '';

  const toWeekDayMenu = () => {
    navigation.push("WeekDayMenu");    
  }
  
  
  const workoutData = (muscleGroup) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const docSnap = getDoc(doc(db, 'MuscleIndex'))
    docSnap.then(doc => {
      if(doc.exists){
        console.log('Document exists, id: '+doc.id);        
        updateDoc(doc.ref,{
          userMuscle : muscleGroup,           
        })        
      }
      if(muscleGroup == 'Chest'){
        navigation.push("ChestIndex");
      }
      if(muscleGroup == 'Abs'){
        navigation.push("AbsIndex");
      }
      if(muscleGroup == 'Legs'){
        navigation.push("LegsIndex");
      }
      if(muscleGroup == 'Shoulders'){
        navigation.push("ShouldersIndex");
      }
      if(muscleGroup == 'Arms'){
        navigation.push("ArmsIndex");
      }
            
    })    
  }
  
  return (
    <>    
      <View style={styles.mainView}>        
        <View style={styles.basicView}>
          
          <Text style={styles.PageTitle}>Add To Plan</Text>
          <Text style={styles.PageTitle}>Select Day:</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={
            () => { weekDayTitle = 'Abs'; workoutData(weekDayTitle); } 
          }
          >
          <Text style={styles.buttonText}>
            Abs
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => {weekDayTitle = 'Chest'; workoutData(weekDayTitle); }}>
          <Text style={styles.buttonText}>
             Chest
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => { weekDayTitle = 'Legs'; workoutData(weekDayTitle); }}>
          <Text style={styles.buttonText}>
            Legs
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => { weekDayTitle = 'Shoulders'; workoutData(weekDayTitle); }}>
          <Text style={styles.buttonText}>
             Shoulders 
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => { weekDayTitle = 'Arms'; workoutData(weekDayTitle); }}>
          <Text style={styles.buttonText}>
             Arms 
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
        fontSize: 40,
        fontWeight: '700',
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
        marginLeft: 10,
        backgroundColor:'#3D405B',
        color: 'white'
      }
})