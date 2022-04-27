import {useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
//import FastingTimer from './FastingTimer.js';
import React from 'react';
import { TimePicker } from 'react-native-simple-time-picker';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

export default function FastingTimer() {
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() =>{
   

    //var diffr= moment.duration(moment(expirydate).diff(moment(date)));
    var hours = parseInt(12);
    var minutes = parseInt(23);
    var seconds = parseInt(12);
    var d = hours * 60 *60+minutes*60+seconds;

    //converting in seconds
    setTotalDuration(d);
    //setting up the duration of countdown in seconds to re-render

  },[]

  );

   return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.basicView}>
        <Text style={styles.PageTitle}>
          Fasting Timer
        </Text>
        <Text style={styles.basicText}>
          Selected Time: {selectedHours}:{selectedMinutes}
        </Text>
        <TimePicker style={styles.basicText}
          selectedHours={selectedHours}
          //initial Hourse value
          selectedMinutes={selectedMinutes}
          //initial Minutes value
          onChange={(hours, minutes) => {
            setSelectedHours(hours);
            setSelectedMinutes(minutes);
          }}
        />
        
        

      </View>
      <View style={styles.container}>
        <CountDown
            until={totalDuration}
            //duration of coundown in seconds
            timeToShow={('H','M','S')}
            //format to show
            onFinish={()=>alert('Finished')}
            onPress={()=>alert('Hello')}
            size={20}


        />
        </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView:{
    flex:1,
    backgroundColor: '#81B29A',
    alignItems: 'center',
  },
  PageTitle:{
    fontSize: 40,
    color: 'white',
    paddingTop: 50,
    paddingBottom: 10,
    fontWeight: '400',
    textAlign:'center',
    alignItems:'center'
  },
  basicView:{
    backgroundColor:'#3D405B',
    width:'100%',
    marginBottom:5
  },
  basicContainer:{
    flex: .9,
    marginTop: 1,
    width:'100%',
    height: '40%',
    backgroundColor: '#81B29A',
    alignItems:'center', //center x axis
    justifyContent:'center', //center y axis
  },
basicText:{
  fontSize: 30,
  color:'#F4F1DE',
  textAlign:'center',
  padding:20,
},
containerView: {
    flex: 1,
    alignItems: "center"
},


});
