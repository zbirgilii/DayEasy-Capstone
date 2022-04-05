import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {StyleSheet, Text, View, Button, Alert,TextInput,  Pressable, 
  Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { getAuth,
  createUserWithEmailAndPassword } from "firebase/auth";
import {db} from '../firebase.js'
import { collection, addDoc } from 'firebase/firestore'; 
import { doc, setDoc } from "firebase/firestore"; 


WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState('')
  const [Fname, setFname] = React.useState('')
  const [Lname, setLname] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [password2, setPassword2] = React.useState('')

  const goBack = () => {
    navigation.goBack();
  }

  const Confirmpassword = () => {
    if (password != password2)
    {
      return false 
    }
    else 
    {
      return true
    }
  }

  const handleSignUp = () => {
    // setDoc(doc(db, "Workout", "Arms"), {
    //   Workout: "Test2",
    //   country: "USA"
    // });
    const temp = Confirmpassword()
    if (temp == true)
    {
      console.log('Sign up called')
      CreateUser();
      return;
    }
    else 
    {
      Alert("Passwords do not match!")
      return 
    }
  }

  const CreateUser = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = auth.currentUser;
      console.log("User ID: " + user.uid)
      setDoc(doc(db, "Users", email), {
        Fname: Fname,
        Lname: Lname,
        userID: user.uid,
        email: user.email,
      });
      console.log("after creation")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  return ( 
    <>
    <KeyboardAvoidingView style={styles.containerView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainView}>
        <View style={styles.basicView}>
          <Text style={styles.PageTitle}>DayEasy Register</Text>
        </View>
        <View style={styles.menuContainer}>
          <TextInput placeholder="Email" placeholderColor = "#c4c3cb" defaultValue = {email}
           onChangeText={(text) => setEmail(text)} style={styles.loginFormTextInput} />
          <TextInput placeholder="Fname" placeholderColor = "#c4c3cb" defaultValue = {Fname}
           onChangeText={(text) => setFname(text)} style={styles.loginFormTextInput} />
          <TextInput placeholder="Lname" placeholderColor = "#c4c3cb" defaultValue = {Lname}
           onChangeText={(text) => setLname(text)} style={styles.loginFormTextInput} />
          <TextInput placeholder="Password" placeholderColor = "#c4c3cb" defaultValue = {password}
           onChangeText={(text) => setPassword(text)} style={styles.loginFormTextInput} secureTextEntry={true} />
          <TextInput placeholder="Confirm Password" placeholderColor = "#c4c3cb" defaultValue = {password2}
           onChangeText={(text) => setPassword2(text)} style={styles.loginFormTextInput} secureTextEntry={true} />
          <Pressable
              style={styles.  menuButton}
              onPress={() => handleSignUp()}>
              <Text style={styles.buttonText}>Submit Regisstration</Text>
            </Pressable>
        </View>
        <Pressable
            style={styles.registerButton}
            onPress={() => goBack()}>
            <Text style={styles.buttonText}>Back To Login</Text>
      </Pressable>
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>   
    </>  
  )}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    //paddingTop:50,
    backgroundColor: '#81B29A',
    alignItems:'center', //center x axis
    //justifyContent:'center', //center y axis
  },
  containerView:{
    flex: 1,
  },
  basicView:{
    backgroundColor:'#3D405B',
    width:'100%',
    marginBottom:5
  },
  menuContainer:{
    flex: 1,
  },
  PageTitle:{
    fontSize: 40,
    color: 'white',
    paddingTop: 50,
    paddingBottom: 10,
    fontWeight: "400",
    textAlign:'center',
    alignItems:'center', //center x axis
    //justifyContent:'flex-start' //center y axis
  },
  buttonText:{
    color:'#F4F1DE',
    textAlign:'center',
    padding:10,
    color: 'white',
  },
  menuButton: {
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
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#3897f1",
    backgroundColor: "white",
    width: 200,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
})
