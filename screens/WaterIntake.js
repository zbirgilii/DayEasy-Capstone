import React , {useState} from "react";
 import { StyleSheet,Keyboard, Text, TouchableWithoutFeedback, Pressable, View } from "react-native";
 import { Button, SocialIcon } from "react-native";
 import * as WebBrowser from 'expo-web-browser';
 import * as Google from 'expo-auth-session/providers/google';
 import { auth } from '../firebase.js';
 import { useNavigation } from '@react-navigation/native';

 
 
 WebBrowser.maybeCompleteAuthSession();
 export default function WaterIntakeScreen() {
  const navigation = useNavigation();
  const [TotalWater, setTotalWater] = useState(2.5);
  const [Water, setWater] = useState(0);
  const [Percentage, setPercentage] = useState(0);

   const Goback = () => {
   navigation.goBack();
   }

 return (
   <>
   <>
 
   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <View style={styles.mainView}>
       <View style={styles.basicView}>
         <Text style={styles.PageTitle}>Water Intake</Text>
       </View>
       <View style={styles.container}>
           <View style={styles.sideInfo}>
           
               <Text style={styles.currentCups}></Text>
           </View>
           <View style={styles.percentageContainer}>
           <Text style={styles.currentPercentage}>{Percentage} % </Text>
           </View>
           <View style={styles.sideInfo}>

               <Text style={styles.currentLiters}>{Water} L / {TotalWater} L(Goal)</Text>
           </View>
       </View>
       <View>
       <Button buttonStyle={styles.loginButton} onPress={() => {setWater( Water + 0.25),console.log("Called" + Water);{setPercentage( Percentage + 10),console.log("Called" + Percentage)}}} title="Add(+)" />
       <Button buttonStyle={styles.loginButton} onPress={() => {setWater( Water - 0.25),console.log("Called" + Water);{setPercentage( Percentage - 10),console.log("Called" + Percentage)}}}  title="Remove(-)" />
       </View>

       </View>
   </TouchableWithoutFeedback>
   <Button buttonStyle={styles.loginButton} onPress={() => Goback()} title="Go Back" />
     </>
     </>
 )
}

const styles = StyleSheet.create({
loginbutton: {
 backgroundColor: "#3897f1",
 borderRadius: 3,
 height: 45,
 width: 200,
 alignItems: 'center',
 paddingBottom: 5,
}, 
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
container:{
 display: 'flex',
 alignItems: "center",
 width: '100%',
 maxWidth: 600,
 margin: 'auto',
},
sideInfo:{
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
},
percentageContainer:{
width: '20%',
height:'70%',
minHeight:10,
margin: 'auto',
backgroundColor: 'blue',
borderRadius: 5,
overflow: 'hidden',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
fontSize: 50,
color: '#fff',
position: 'relative',
},

currentPercentage:{
zIndex: 1,
},
progress:{
backgroundColor: '#2196f3',
position:'absolute',
width: '100%',

},
buttons:{
margin:10,

},
Title2:{
  fontSize: 20,
  color: 'white',
  paddingTop: 50,
  paddingTop: 20,
  paddingBottom: 10,
  fontWeight: '400',
  textAlign:'center',
  alignItems:'center' //center x axis
  //justifyContent:'flex-start' //center y axis
},

Title3:{
  fontSize: 20,
  color: '#3D405B',
  paddingTop: 20,
  paddingBottom: 10,
  fontWeight: '400',
  textAlign:'center',
  alignItems:'center' //center x axis
  //justifyContent:'flex-start' //center y axis
},

buttonStyle:{
  textAlign:'center',
  alignItems:'center'
},
loginButton:{
  color: '#81B29A',

}
})

function sayHello() {
alert('create me');
}
