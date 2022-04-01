import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {StyleSheet, Text, View, Button, Alert,TextInput,  Pressable  } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { getAuth,
  createUserWithEmailAndPassword } from "firebase/auth";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState('')
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
    const temp = Confirmpassword()
    if (temp == true)
    {
      CreateUser();
      return;
    }
    else 
    {
      return 
    }
  }

  const CreateUser = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  return ( 
    <>
      <View style={styles.mainView}>
        <View style={styles.basicView}>
          <Text style={styles.PageTitle}>DayEasy Main Menu</Text>
        </View>
        <View style={styles.basicContainer}>
          <TextInput placeholder="Email" placeholderColor="#c4c3cb" onChangeText={text => setEmail(text)} style={styles.loginFormTextInput} />
          <TextInput placeholder="Password" placeholderColor="#c4c3cb" onChangeText={text => setPassword(text)} style={styles.loginFormTextInput} secureTextEntry={true} />
          <TextInput placeholder="Confirm Password" placeholderColor="#c4c3cb" onChangeText={text => setPassword2(text)} style={styles.loginFormTextInput} secureTextEntry={true} />
          <Pressable
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'red' : '3897f1',
              },
              styles.loginButton,
            ]}
            onPress={() => handleSignUp()}>
            <Text style={styles.loginText}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'red' : '3897f1',
          },
          styles.registerButton,
        ]}
        onPress={() => goBack()}>
        <Text style={styles.loginText}>Back To Login</Text>
        </Pressable>
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
    fontWeight: "400",
    textAlign:'center',
    alignItems:'center' //center x axis
    //justifyContent:'flex-start' //center y axis

  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    width: '80%',
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
  loginText:{
    color:'#F4F1DE',
    textAlign:'center',
    padding:20,
    color: 'white'
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    width:'80%',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
})
