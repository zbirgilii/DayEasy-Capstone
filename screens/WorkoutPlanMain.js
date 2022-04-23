import React, { useState } from 'react';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import {db} from '../firebase.js'
import WeekDayMenu from './allWorkouts/WeekDayMenu';
import { collection,collectionGroup, query,setDoc, where, getDocs, getDoc, doc ,updateDoc} from "firebase/firestore";

export default function WorkoutPlanMain() {
  const navigation = useNavigation();
  const [selectGroup, setSelectGroup] = useState('');
  let weekDayTitle = '';

  const toWeekDayMenu = () => {
    navigation.push("WeekDayMenu");    
  }
  
  
  const workoutData = (weekDayTitle) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const docSnap = getDoc(doc(db, 'userWorkoutSet', user.email, selectGroup))
    docSnap.then(doc => {
      if(doc.exists){
        console.log('Document exists, id: '+doc.id);
        if(doc.data() == null){
          setDoc(doc.ref,{
            userSelect : weekDayTitle,
            Monday: {
              workout1: 'workout1',
              workout2: 'workout2',
              workout3: 'workout3'        
            },
            Tuesday:{
              workout1: 'workout1',
              workout2: 'workout2',
              workout3: 'workout3'            
            },
            Wednesday: {
              workout1: 'workout1',
              workout2: 'workout2',
              workout3: 'workout3'            
            },
            Thursday: {
              workout1: 'workout1',
              workout2: 'workout2',
              workout3: 'workout3'            
            },
            Friday:{
              workout1: 'workout1',
              workout2: 'workout2', 
              workout3: 'workout3'           
            },
            Saturday: {
              workout1: 'workout1',
              workout2: 'workout2',
              workout3: 'workout3'            
            },
            Sunday: {
              workout1: 'workout1',
              workout2: 'workout2',
              workout3: 'workout3'            
            },
          })
        }
        else{
          updateDoc(doc.ref,{
            userSelect : weekDayTitle,
            Monday: {
              workout1: 'workout1',
              workout2: 'workout2',
              workout3: 'workout3'            
            },
            Tuesday:{
              workout1: 'workout1',
              workout2: 'workout2',
              workout3: 'workout3'            
            },
            Wednesday: {
              workout1: 'workout1',
              workout2: 'workout2', 
              workout3: 'workout3'           
            },
            Thursday: {
              workout1: 'workout1',
              workout2: 'workout2',
              workout3: 'workout3'            
            },
            Friday:{
              workout1: 'workout1',
              workout2: 'workout2',
              workout3: 'workout3'            
            },
            Saturday: {
              workout1: 'workout1',
              workout2: 'workout2',
              workout3: 'workout3'            
            },
            Sunday: {
              workout1: 'workout1',
              workout2: 'workout2',
              workout3: 'workout3'            
            },
          })
        }
      }
      else{
        setDoc(doc(db, 'userWorkoutSet', user.email, selectGroup), {
          userSelect : weekDayTitle,
          Monday: {
            workout1: 'workout1',
            workout2: 'workout2',
            workout3: 'workout3'            
          },
          Tuesday:{
            workout1: 'workout1',
            workout2: 'workout2',
            workout3: 'workout3'            
          },
          Wednesday: {
            workout1: 'workout1',
            workout2: 'workout2',
            workout3: 'workout3'            
          },
          Thursday: {
            workout1: 'workout1',
            workout2: 'workout2',
            workout3: 'workout3'            
          },
          Friday:{
            workout1: 'workout1',
            workout2: 'workout2',
            workout3: 'workout3'            
          },
          Saturday: {
            workout1: 'workout1',
            workout2: 'workout2',
            workout3: 'workout3'            
          },
          Sunday: {
            workout1: 'workout1',
            workout2: 'workout2',
            workout3: 'workout3'            
          },

        });
      }
      navigation.push("WeekDayMenu");      
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
            () => { weekDayTitle = 'Sunday'; workoutData(weekDayTitle); } 
          }
          >
          <Text style={styles.buttonText}>
             Sunday
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => {weekDayTitle = 'Monday'; workoutData(weekDayTitle); }}>
          <Text style={styles.buttonText}>
             Monday
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => { weekDayTitle = 'Tuesday'; workoutData(weekDayTitle); }}>
          <Text style={styles.buttonText}>
             Tuesday
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => { weekDayTitle = 'Wednesday'; workoutData(weekDayTitle); }}>
          <Text style={styles.buttonText}>
             Wednesday 
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => { weekDayTitle = 'Thursday'; workoutData(weekDayTitle); }}>
          <Text style={styles.buttonText}>
             Thursday 
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => { weekDayTitle = 'Friday'; workoutData(weekDayTitle); }}>
          <Text style={styles.buttonText}>
             Friday
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => { weekDayTitle = 'Saturday'; workoutData(weekDayTitle); }}>
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