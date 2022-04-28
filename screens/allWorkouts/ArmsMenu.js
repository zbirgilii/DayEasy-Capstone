import {StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { collection,collectionGroup, query, where, getDocs, getDoc, doc ,updateDoc, setDoc, QuerySnapshot} from "firebase/firestore";
import { db } from '../../firebase';
import React, { useState, useEffect } from "react";

export default function WorkoutSelect() {
  const navigation = useNavigation();
  const [selectmuscleGroup, setSelectmuscleGroup] = useState('');
  const [userWorkout1, setUserWorkout1] = useState('');
  const [userWorkout2, setUserWorkout2] = useState('');
  const [userWorkout3, setUserWorkout3] = useState('');


  const getItems = () =>{
    const auth = getAuth();
    const user = auth.currentUser;
    var docData;
    const docSnap = getDoc(doc(db, 'userWorkoutSet', user.email))
    docSnap.then(doc => {
      if (doc.exists) {
        console.log('Document retrieved successfully. ' + doc.id);
        if (doc.data() == null ){

        }
        else{
          setSelectmuscleGroup(doc.get('userMuscle'));
          workoutList();
        }
      }
      return;
    });
  }
//this is the one causing issues
  const workoutList = () =>{
    //let {buttonCount, currentButton} = this.state;
    //const workoutSet = [];

    //const auth = getAuth();
    //const user = auth.currentUser;
    //var docData;
    //let group = selectmuscleGroup.toString();
    const workoutTest = getDoc(doc(db, 'Workouts','Arms')) //How to get this to be what selectmuscleGroup is??
    workoutTest.then(doc => {
      if(doc.exists){
        setUserWorkout1(doc.get('workout1'));
        setUserWorkout2(doc.get('workout2'));
        setUserWorkout3(doc.get('workout3'));
      }
      return;
    });
    /*
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
    */
  }
  const setWorkout = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const docSnap = getDoc(doc(db, 'userWorkoutSet', user.email, selectGroup))
    docSnap.then(doc => {
      if (doc.exists) {        
        if (doc.data() == null ){

        }
        else{
          updateDoc(doc.ref,{
            
          })
        }
      }
      return;
    });
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
  

  return (
    <>
      <View style={styles.mainView}>        
        <View style={styles.basicView}>               
          
          <Text style={styles.PageTitle}>Suggested Workouts for: {selectmuscleGroup}</Text>
        </View>
        
            <TouchableOpacity
              style={styles.buttonStyle} 
              onPress={() => navigation.push("WeekDayMenu")}
            >
              <Text style={styles.buttonText}>
              {userWorkout1}
              </Text>
              
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle} 
              onPress={() => navigation.push("WeekDayMenu")}
            >
              <Text style={styles.buttonText}>
              {userWorkout2}
              </Text>
              
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle} 
              onPress={() => navigation.push("WeekDayMenu")}
            >
              <Text style={styles.buttonText}>
              {userWorkout3}
              </Text>
              
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle} 
              onPress={() => navigation.push("CurrentPlan")}
            >
              <Text style={styles.buttonText}>
              View Workout Set
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
      buttonText:{
        fontSize: 40,
        fontWeight: "700",
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
      }
})