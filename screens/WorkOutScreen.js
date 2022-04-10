import * as React from 'react';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

export default function WorkoutScreen() {
  const navigation = useNavigation();

  const toWeekDayMenu = () => {
    const i = 1;
    if(i == 1){
      navigation.push("weekDayMenu");
    }
    //export pageTitle;
    //navigation.push("weekDayMenu");
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
        </View>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={toWeekDayMenu}>
          <Text style={styles.buttonText}>
             Chest
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={toWeekDayMenu}>
          <Text style={styles.buttonText}>
             Back
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={toWeekDayMenu}>
          <Text style={styles.buttonText}>
             Bicep
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={toWeekDayMenu}>
          <Text style={styles.buttonText}>
             Tricep 
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={toWeekDayMenu}>
          <Text style={styles.buttonText}>
             Abs 
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={toWeekDayMenu}>
          <Text style={styles.buttonText}>
             Shoulder
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={toWeekDayMenu}>
          <Text style={styles.buttonText}>
             Legs
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={toWeekDayMenu}>
          <Text style={styles.buttonText}>
             Archived Workouts 
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