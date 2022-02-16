import React,{ Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

const App = () => { //login page
    return(
     <View style={styles.mainView}>
     <View style={styles.basicview}>
        <Text style={styles.basicText}>DayEasy Login Page</Text>
      </View>
      <View>
        <Text>Username</Text>
        </View>
        <View>
        <Text>Password</Text>
        </View>
        <View>
        <Text>Forgot My Password</Text>
        </View>
        <View>
        <Text>Login with</Text>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    mainView:{
      flex:1,
      paddingTop:50,
      backgroundColor: '#81B29A',
      alignItems:'center', //center x axis
      justifyContent:'center', //center y axis
    },
    basicview:{
      backgroundColor:'#3D405B',
      witdh:'100%',
      marginBottom:5
    },
    basicText:{
      fontSize:20,
      color:'#F4F1DE',
      textAlign:'center',
      padding:20
    }
  })

export default App;