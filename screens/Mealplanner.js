import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {StyleSheet, Text, View, Button, Alert,TextInput,  Pressable, 
  Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { getAuth,
  createUserWithEmailAndPassword } from "firebase/auth";
import {db} from '../firebase.js'
import { collection, addDoc, getDoc } from 'firebase/firestore'; 
import { doc, setDoc, fetchProvidersForEmail } from "firebase/firestore"; 


export default function MealPlan() {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState('')
  const [Fname, setFname] = React.useState('')
  const [Lname, setLname] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [password2, setPassword2] = React.useState('')

  const goBack = () => {
    navigation.goBack();
  }

  return ( 
    <>
    <KeyboardAvoidingView style={styles.containerView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.mainView}>
        <View style={styles.basicView}>
          <Text style={styles.PageTitle}>Meal Plan</Text>
        </View>
        <View style={styles.menuContainer}>
            <Text style={styles.MealTitleText}>Breakfast</Text>
            <View style ={styles.textboxes}>
                <TextInput placeholder="Entree" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
                <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
            </View>
            <View style ={styles.textboxes}>
                <TextInput placeholder="Snack" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
                <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
            </View>
            <View style ={styles.textboxes}>
                <TextInput placeholder="Drink" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
                <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
            </View>
            <Text style={styles.MealTitleText}>Lunch</Text>
            <View style ={styles.textboxes}>
                <TextInput placeholder="Entree" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
                <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
            </View>
            <View style ={styles.textboxes}>
                <TextInput placeholder="Snack" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
                <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
            </View>
            <View style ={styles.textboxes}>
                <TextInput placeholder="Drink" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
                <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
            </View>
            <Text style={styles.MealTitleText}>Dinner</Text>
            <View style ={styles.textboxes}>
                <TextInput placeholder="Entree" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
                <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
            </View>
            <View style ={styles.textboxes}>
                <TextInput placeholder="Snack" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
                <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
            </View>
            <View style ={styles.textboxes}>
                <TextInput placeholder="Drink" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
                <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
                onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
            </View>
        </View>

      </SafeAreaView >
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>   
    </>  
  )}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    //paddingTop:50,
    backgroundColor: '#81B29A',
    //justifyContent:'center', //center y axis
  },
  containerView:{
    flex: 1,
  },
  basicView:{
    backgroundColor:'#3D405B',
    width:'100%',
    marginTop: -10,
    flex: .15,
  },
  textboxes:{
    flexDirection: 'row', 
  },
  menuContainer:{
    flex: 1,
  },
  PageTitle:{
    fontSize: 45,
    color: 'white',
    fontWeight: "500",
    textAlign:'center',
    //justifyContent:'flex-start' //center y axis
  },
  MealTitleText:{
    color:'#F4F1DE',
    textAlign:'center',
    color: 'white',
    fontSize: 15,
  },
  loginbutton: {
    backgroundColor: "#3897f1",
    borderRadius: 3,
    height: 45,
    width: 200,
    alignItems: 'center',
    paddingBottom: 5,
  },
  registerButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 5,
  },
  MainTextInput: {
    height: "100%",
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#3897f1",
    backgroundColor: "white",
    width: "70%",
    paddingLeft: 5,
    marginTop: 1,
    marginBottom: 1,
  },
  CalTextInput: {
    height: "100%",
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#3897f1",
    backgroundColor: "white",
    width: "27%",
    paddingLeft: 5,
    marginTop: 1,
    marginBottom: 1,
    direction: 'rtl',
    position: 'absolute',
    right: 1,
  },
})
