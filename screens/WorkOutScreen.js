import * as React from 'react';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native';


export default function WorkoutScreen() {
  
    const sayHello = () => {
        Alert('create me');
      }

  return (
    <>
      <View style={styles.mainView}>        
        <View style={styles.basicView}>
          <TouchableOpacity
            style={styles.backButton} 
            onPress={sayHello}>
            <Text style={styles.basicText}>
              Back 
            </Text>        
          </TouchableOpacity>
          <Text style={styles.PageTitle}>Workout Plan</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={sayHello}>
          <Text style={styles.basicText}>
             Chest
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={sayHello}>
          <Text style={styles.basicText}>
             Back
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={sayHello}>
          <Text style={styles.basicText}>
             Bicep
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={sayHello}>
          <Text style={styles.basicText}>
             Tricep 
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={sayHello}>
          <Text style={styles.basicText}>
             Abs 
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={sayHello}>
          <Text style={styles.basicText}>
             Shoulder
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={sayHello}>
          <Text style={styles.basicText}>
             Legs
          </Text>        
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle} 
          onPress={sayHello}>
          <Text style={styles.basicText}>
             Archived Workouts 
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
        alignItems:'center'
      }
})

// export default App;