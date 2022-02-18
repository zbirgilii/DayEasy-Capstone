import React, { Component } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'react-native';
import {StyleSheet, Text, View } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App(){
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '325201293658-0b5v1iqfstvgbqkh5bdmt76j5n9j3ode.apps.googleusercontent.com',
    iosClientId: '325201293658-0b5v1iqfstvgbqkh5bdmt76j5n9j3ode.apps.googleusercontent.com',
    androidClientId: '325201293658-0b5v1iqfstvgbqkh5bdmt76j5n9j3ode.apps.googleusercontent.com',
    webClientId: '325201293658-0b5v1iqfstvgbqkh5bdmt76j5n9j3ode.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      }
  }, [response]);
  Temp = UserProfile(username,password)
  return (
    <>
    <><View style={styles.mainView}>
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
    </View></>
    <TextInput
          value={this.state.username}
          onChangeText={(username) => Temp.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
    <TextInput
          value={this.state.username}
          onChangeText={(username) => Temp.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
    <>
        <Button
          disabled={!request}
          title="Login"
          onPress={() => {
            promptAsync()
            this.onLogin.bind(this);
          } } /></>
    </>  
  )
  
}

class UserProfile extends Component {;
  super(props){
    state = {
      username: '',
      password: '',
    }
  };

  onLogin(){ 
    const { username, password } = this.state;

    // Alert.alert('Credentials', `${username} + ${password}`);
  };
  // constructor(props) {
  //   this.username= '',
  //   this.password= '';
  // }
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
    width:'100%',
    marginBottom:5
  },
  basicText:{
    fontSize:20,
    color:'#F4F1DE',
    textAlign:'center',
    padding:20
  }
})