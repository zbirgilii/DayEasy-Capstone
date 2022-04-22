import {StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { collection,collectionGroup, query, where, getDocs, getDoc, doc ,updateDoc, setDoc} from "firebase/firestore";
import { db } from '../../firebase';
import React, { useState, useEffect } from "react";

export default function WorkoutSelect() {
  const navigation = useNavigation();
  const [selectmuscleGroup, setSelectmuscleGroup] = useState('');

  const sayHello = () => {
      Alert('create me');
  }

  const getItems = () =>{
    const auth = getAuth();
    const user = auth.currentUser;
    var docData;
    const docSnap = getDoc(doc(db, "userWorkoutSet", user.email))
    docSnap.then(doc => {
      if (doc.exists) {
        console.log('Document retrieved successfully. ' + doc.id);
        if (doc.data() == null ){

        }
        else{
          setSelectmuscleGroup(doc.get('userMuscle')); 
        }
      }
      return;
    });
  }

  const workoutList = () =>{
    let {buttonCount, currentButton} = this.state;

    const workoutSet = [];

    const auth = getAuth();
    const user = auth.currentUser;
    const docSnap = getDoc(doc(db, 'Workouts', selectmuscleGroup))
    docSnap.then(doc => {
      /*This is where my issue is, hopefully this will work */
      if(doc.exists){
        for( let i =0; i<buttonCount; i++){
          workoutSet.push(
            <TouchableOpacity
              style={styles.buttonStyle} 
              onPress={sayHello}
            >
              <Text style={styles.basicText}>
                  Chest
              </Text>
            </TouchableOpacity>
          )
        }
        return workoutSet
      }
      //navigation.push("WorkoutSelect");      
    })
  }
  
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      getItems()
    });
  
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  const renderWorkouts = () => {

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
          <Text style={styles.PageTitle}>Suggested Workouts for: <br></br>{selectmuscleGroup}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={sayHello}
          >
          <Text style={styles.basicText}>
             Chest
          </Text>        
        </TouchableOpacity>       
                 
      </View></>
       
  )}

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
      buttonStyle:{
        textAlign:'center',
        alignItems:'center',
        borderRadius: 100,
        borderWidth: 1,
        marginTop: 10,
        backgroundColor: 'white',
        color: 'black'
      }
})