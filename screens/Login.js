import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {StyleSheet, Text, View, Modal, Alert,TextInput,  Pressable, 
  Platform, KeyboardAvoidingView, 
  TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { getAuth,
  signInWithEmailAndPassword, sendPasswordResetEmail  } from "firebase/auth";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [modalVisible, setModalVisible] = React.useState(false);

  
  const navigation = useNavigation();

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleLogin = () => {
    console.log("Login");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        GetUserData()
        const user = userCredential.user;
        
        // ...
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  const handleSignUp = () => {
    navigation.push("Register");
  }

  const forgotPassword = (email) => {
    console.log("Called")
    const auth = getAuth();
    sendPasswordResetEmail(auth, email).then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
      }

  return ( 
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{margin: 15}}>Enter Email</Text>
            <TextInput placeholder="Email" placeholderColor = "#c4c3cb" defaultValue = {email}
            onChangeText={(text) => setEmail(text)} style={styles.loginFormTextInput} />
            <Pressable
              style={({ pressed }) => [pressed ? styles.pressedlogin : styles.loginButton ]}
              onPress={() => {forgotPassword(email),setModalVisible(!modalVisible)}}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [pressed ? styles.pressedlogin : styles.loginButton ]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonText}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    <KeyboardAvoidingView style={styles.containerView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainView}>
        <View style={styles.basicView}>
          <Text style={styles.PageTitle}>DayEasy Login</Text>
        </View>
        <View style={styles.menuContainer}>
            <TextInput placeholder="Email" placeholderColor = "#c4c3cb" defaultValue = {email}
            onChangeText={(text) => setEmail(text)} style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor = "#c4c3cb" defaultValue = {password}
            onChangeText={(text) => setPassword(text)} style={styles.loginFormTextInput} secureTextEntry={true} />
            <View  style={{justifyContent: 'space-around', }}>
              <Pressable
                style={({ pressed }) => [pressed ? styles.pressedlogin : styles.loginButton ]}
                onPress={() => {handleLogin()}}>
                <Text style={styles.buttonText}>Login</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [pressed ? styles.pressedlogin : styles.loginButton ]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>Forgot Password</Text>
              </Pressable>
            </View>
        </View>
        <Pressable
          style={styles.registerButton}
          onPress={() => handleSignUp()}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>   
    </>  
  )}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 25,
    padding: 70,
    paddingBottom: 60,
    alignItems: "center",

  },
  // "#3897f1" Blue
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
    flex: 3,
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
  pressedlogin:{
    backgroundColor: '#3897f1',
    borderRadius: 3,
    height: 45,
    width: 200,
    alignItems: 'center',
    marginBottom: 5,
    paddingBottom: 5,
  },
  loginButton: {
    backgroundColor: "orange",
    borderRadius: 3,
    height: 45,
    width: 200,
    alignItems: 'center',
    marginBottom: 5,
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