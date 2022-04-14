import React, { useState } from 'react';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import {db} from '../firebase.js'
import weekDayMenu from './allWorkouts/weekDayMenu';
import { collection,collectionGroup, query,setDoc, where, getDocs, getDoc, doc ,updateDoc} from "firebase/firestore";

export default function WorkoutScreen() {
  const navigation = useNavigation();
  //const [selectDay, setSelectDay] = useState('');
  const [selectGroup, setSelectGroup] = useState('');
  let weekDayTitle = '';
  const toWeekDayMenu = () => {
    navigation.push("weekDayMenu");    
  }
  /**
   * This the function i am talking about. I want the weekDayTitle on line #15 to go in the parameter 
   * so that then I can use it on line #25 
   */
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
                         
            },
            Tuesday:{
              workout1: 'workout1',
              workout2: 'workout2',            
            },
            Wednesday: {
              workout1: 'workout1',
              workout2: 'workout2',            
            },
            Thursday: {
              workout1: 'workout1',
              workout2: 'workout2',            
            },
            Friday:{
              workout1: 'workout1',
              workout2: 'workout2',            
            },
            Saturday: {
              workout1: 'workout1',
              workout2: 'workout2',            
            },
            Sunday: {
              workout1: 'workout1',
              workout2: 'workout2',            
            },
          })
        }
        else{
          updateDoc(doc.ref,{
            userSelect : weekDayTitle,
            Monday: {
              workout1: 'workout1',
              workout2: 'workout2',            
            },
            Tuesday:{
              workout1: 'workout1',
              workout2: 'workout2',            
            },
            Wednesday: {
              workout1: 'workout1',
              workout2: 'workout2',            
            },
            Thursday: {
              workout1: 'workout1',
              workout2: 'workout2',            
            },
            Friday:{
              workout1: 'workout1',
              workout2: 'workout2',            
            },
            Saturday: {
              workout1: 'workout1',
              workout2: 'workout2',            
            },
            Sunday: {
              workout1: 'workout1',
              workout2: 'workout2',            
            },
          })
        }
      }
      else{
        setDoc(doc(db, 'userWorkoutSet', user.email, selectGroup), {
          Monday: {
            workout1: 'workout1',
            workout2: 'workout2',            
          },
          Tuesday:{
            workout1: 'workout1',
            workout2: 'workout2',            
          },
          Wednesday: {
            workout1: 'workout1',
            workout2: 'workout2',            
          },
          Thursday: {
            workout1: 'workout1',
            workout2: 'workout2',            
          },
          Friday:{
            workout1: 'workout1',
            workout2: 'workout2',            
          },
          Saturday: {
            workout1: 'workout1',
            workout2: 'workout2',            
          },
          Sunday: {
            workout1: 'workout1',
            workout2: 'workout2',            
          },

        });
      }
      navigation.push("weekDayMenu");      
    })    
  }
  
  return (
    <>    
      <View style={styles.mainView}>        
        <View style={styles.basicView}>
          <TouchableOpacity
            style={styles.backButton} 
            onPress={() => navigation.push("Main Menu")}>
            <Text style={styles.basicText}>
             &lt;Back 
            </Text>        
          </TouchableOpacity>
          <Text style={styles.PageTitle}>Workout Plan</Text>
          <Text style={styles.PageTitle}>Select weekday:</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={
            () => { weekDayTitle = 'Sunday'; workoutData(weekDayTitle); } 
            //() => { weekDayTitle = 'Sunday'; workoutData(); }
            //() =>  workoutData('Chest')
            //() => {(text) => setSelectGroup(text); workoutData();}
          }
          >
          <Text style={styles.buttonText}>
             Sunday
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => { workoutData(); }}>
          <Text style={styles.buttonText}>
             Monday
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => { workoutData(); }}>
          <Text style={styles.buttonText}>
             Tuesday
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => { workoutData(); }}>
          <Text style={styles.buttonText}>
             Wednesday 
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => { workoutData(); }}>
          <Text style={styles.buttonText}>
             Thursday 
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => { workoutData(); }}>
          <Text style={styles.buttonText}>
             Friday
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={() => { workoutData(); }}>
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
        marginLeft: 10,
        backgroundColor:'#3D405B',
        color: 'white'
      }
})

// export default App;