import {StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { collection,collectionGroup, query, where, getDocs, getDoc, doc ,updateDoc, setDoc, QuerySnapshot} from "firebase/firestore";
import { db } from '../../firebase';
import React, { useState, useEffect } from "react";

export default function WorkoutSelect() {
  const navigation = useNavigation();
  const [selectmuscleGroup, setSelectmuscleGroup] = useState('');
  const [userWorkoutSet, setUserWorkoutSet] = useState({});

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
//this is the one causing issues
  const workoutList = () =>{
    //let {buttonCount, currentButton} = this.state;
    const workoutSet = [];

    const auth = getAuth();
    const user = auth.currentUser;
    var docData;
    getDocs(doc(db, 'Workouts', selectmuscleGroup.toString())).then((querySnapshot) => {
      querySnapshot.forEach((doc) =>{
        var temparray = []
        if(doc.data() != null){
          docData = doc.data()
          for(let i=0; i < 3; i++){
            temparray.push(docData[i])
          }
          userWorkoutSet[doc.id.toString()] = temparray;
        }
      });
      return;
    })
  }
  
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      getItems();
      workoutList();
    });
  
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  const renderWorkouts = () => {

  }

  /**
   * <Text style={styles.basicText}>
                  {userWorkoutSet[0]}
              </Text>
   */
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