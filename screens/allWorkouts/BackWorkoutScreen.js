import * as React from 'react';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { getAuth, signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

export default function BackWorkoutScreen() {
  const navigation = useNavigation();

    const sayHello = () => {
        Alert('create me');
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
          <Text style={styles.PageTitle}>Suggested Workout:</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={sayHello}>
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

// export default App;