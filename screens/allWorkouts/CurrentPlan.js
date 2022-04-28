import {StyleSheet, SectionList, Text, View, TouchableOpacity } from 'react-native';
import { getAuth } from "firebase/auth";
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
  const [mondaySet, setMondaySet] = useState({
      workout1: 'n/a',
      workout2: 'n/a',
      workout3: 'n/a'
  });

  const getItems = (weekDayTitle) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const docSnap = getDoc(doc(db, 'userWorkoutSet', user.email, selectGroup))
    docSnap.then(doc => {
      if(doc.exists){
        console.log('Document exists, id: '+doc.id);
        if(doc.data() == null){
          
        } 
        else{
          
        }//here
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
  
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      //getItems();
      //workoutList();
    });
  
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);
  

  return (
    <>
      <View style={styles.mainView}>                
        <View style={styles.basicView}>
          <TouchableOpacity 
            //style={styles.buttonStyle}
            onPress={
               () => navigation.push('Main Menu')
            }
          >
            <Text style={styles.basicText}>Return to MainMenu</Text>
          </TouchableOpacity>          
          <Text style={styles.PageTitle}>Current Workout Plan</Text>
        </View>
        <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'Sunday', data: ['Flat Benchpress', 'Decline Benchpress', 'Push-up']},
            {title: 'Tuesday', data: ['Squat', 'Lunge', 'Calf Raise']},
            {title: 'Friday', data: ['Curls', 'Dips', 'Kettlebells']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>    
                      
                 
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
      container: {
        flex: 1,
        //paddingTop: 22,
        borderWidth: 1,
       },
      sectionHeader: {
        //paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
      buttonText:{
        fontSize: 40,
        fontWeight: '700',
        marginTop: 10,
        marginBottom: 10,
        color: 'white'
      },
      buttonStyle:{
        textAlign:'center',
        alignItems:'center',
        borderRadius: 1000,
        borderWidth: 1,
        width: '70%',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        padding: 20,
        backgroundColor:'#3D405B',
        color: 'white'
      }
})