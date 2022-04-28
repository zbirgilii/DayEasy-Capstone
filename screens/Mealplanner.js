import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {StyleSheet, Text, View, Button, Alert,TextInput,  Pressable, SafeAreaView,
  Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { getAuth,
  createUserWithEmailAndPassword } from "firebase/auth";
import {db} from '../firebase.js'
import { collection, addDoc, getDoc } from 'firebase/firestore'; 
import { doc, setDoc, fetchProvidersForEmail } from "firebase/firestore"; 


export default class MealPlan extends React.Component{
    // const navigation = useNavigation();

//     const [email, setEmail] = React.useState('')

//     const breakfast = React.useState(
//         [
//             ['Work', 9],
//             ['Eat', 1],
//             ['Commute', 2],
//             ['Play Game', 1],
//             ['Sleep', 7]
//         ]
//     )
//     const [numTextInputs,setNumTextInputs] = React.useState(0);

//     const goBack = () => {
//         navigation.goBack();
//     }

//     const AddElement = (text,  ) => {
//         navigation.goBack();
//     }

//   return ( 
//     <>
//     <KeyboardAvoidingView style={styles.containerView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <SafeAreaView style={styles.mainView}>
//         <View style={styles.basicView}>
//           <Text style={styles.PageTitle}>Meal Plan</Text>
//         </View>
//         <Text>{breakfast[0][0]}</Text>
//         {/* <Text>{breakfast.map(function(item, i){
//             return <Text key={i}>{i},{item}</Text>
//             })}</Text> */}
//         <TextInput placeholder="Entree" placeholderColor = "#c4c3cb" defaultValue = {email}
//             onChangeText={(text) => setEmail(text)} style={{height: 40, width: "80%", borderColor: "#3897f1",
//             backgroundColor: "white",}} />
//         <View style={styles.menuContainer}>
//             <Text style={styles.MealTitleText}>Breakfast</Text>
//             <View style ={styles.textboxes}>
//                 <TextInput placeholder="Entree" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
//                 <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
//             </View>
//             <View style ={styles.textboxes}>
//                 <TextInput placeholder="Snack" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
//                 <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
//             </View>
//             <View style ={styles.textboxes}>
//                <TextInput placeholder="Drink" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
//                 <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
//             </View>
//             <Text style={styles.MealTitleText}>Lunch</Text>
//             <View style ={styles.textboxes}>
//                 <TextInput placeholder="Entree" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
//                 <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
//             </View>
//             <View style ={styles.textboxes}>
//                 <TextInput placeholder="Snack" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
//                 <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
//             </View>
//             <View style ={styles.textboxes}>
//                 <TextInput placeholder="Drink" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
//                 <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
//             </View>

//             <Text style={styles.MealTitleText}>Dinner</Text>
//             <View style ={styles.textboxes}>
//                 <TextInput placeholder="Entree" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
//                 <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
//             </View>
//             <View style ={styles.textboxes}>
//                 <TextInput placeholder="Snack" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
//                 <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
//             </View>
//             <View style ={styles.textboxes}>
//                 <TextInput placeholder="Drink" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.MainTextInput} />
//                 <TextInput placeholder="Calories" placeholderColor = "#c4c3cb" defaultValue = {email}
//                 onChangeText={(text) => setEmail(text)} style={styles.CalTextInput} />
//             </View>
//         </View>

    //   </SafeAreaView >
    // </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>   
//     </>  
//   )}

        constructor(props) {
            super(props);
            this.state = {
            arrayOfDivs: [],
            divID: 0,
            };
        };
        handleChange = (text, id, temp) => {
            this.setState((prevState) => {
            console.log("handleChange " + id + " " + temp)
            let newArrOfDivs = prevState.arrayOfDivs;
            switch(temp) {
                case 'name':
                    newArrOfDivs = prevState.arrayOfDivs;
                    newArrOfDivs.find((item) => {
                            if (item.id === id)
                            {
                                item.name = text
                            }
                        },
                    )
                break;
                
                case 'email':
                    newArrOfDivs = prevState.arrayOfDivs;
                    newArrOfDivs.find((item) => {
                        if (item.id === id)
                        {
                            item.email = text
                        } 
                    },)
                break;
        
                case 'phone':
                    
                    newArrOfDivs.find((item) => {
                        if (item.id === id)
                        {
                            item.phone = text
                        } 
                    },)
                break;
                default:
                Alert.alert("NUMBER NOT FOUND");
            
                }
            return { arrayOfDivs: newArrOfDivs };
            });
        };
        componentDidMount() {
            this.setState((prevState) => {
            console.log("componentDidMount" + prevState.arrayOfDivs + " now ID " + prevState.divID)
            return {
                arrayOfDivs: [
                ...prevState.arrayOfDivs,
                { name: '', id: prevState.divID, email: '', phone: '' },
                ],
                
            };
            });
        }
        removeElement = (e,id) => {
            console.log("removeElement")
            this.setState((prevState) => {
            let newArr = prevState.arrayOfDivs.filter((item) => item.id !== id);
            return { arrayOfDivs: newArr };
            });
        };
        addElement = () => {
            this.setState((prevState) => {
                console.log("addElement"+ prevState.divID)
                return { divID: prevState.divID + 1 };
                });
            this.setState((prevState) => {
            console.log("addElement"+ prevState.divID)
            return {
                arrayOfDivs: [
                ...prevState.arrayOfDivs,
                { name: '', id: prevState.divID, email: '', phone: '' },
                ],
                
            };
            });
            
        };

      render() {
        return (
            // <ScrollView bounces={false} showsVerticalScrollIndicator={true} style={styles.mainView}>
            // <TouchableOpacity onPress={(e) =>this.addElement()}>
            //  <Text>Add</Text>
            // </TouchableOpacity>
                // {this.state.arrayOfDivs.map((item) => (
                // <View key={item.id}>
                //     <Text>{item.id}</Text>
                //     <TextInput
                //     placeholder="name" style = {styles.MainTextInput}
                //     value={item.name}
                //     onChangeText={(text) => this.handleChange(text, item.id, "name")}
                //     />
                //     <TextInput
                //     placeholder="email" style = {styles.MainTextInput}
                //     value={item.email}
                //     onChangeText={(text) => this.handleChange(text, item.id,"email")}
                //     />
                //     <TextInput
                //     placeholder="phone" style = {styles.MainTextInput}
                //     value={item.phone}
                //     onChangeText={(text) => this.handleChange(text, item.id, "phone")}
                //     />
                //     <TouchableOpacity onPress={(e) =>this.removeElement(e,item.id)}>
                //         <Text>remove</Text>
                //         </TouchableOpacity>
                // </View>
                // ))}
                <SafeAreaView  style = {{flex: 1}}>
                <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: "green", paddingBottom: 60}} style = {{backgroundColor: "red", height: Dimensions.get("window").height}}>
                    <Text style = {styles.MealTitleText}>Breakfast</Text>
                    <TouchableOpacity onPress={(e) =>this.addElement()}>
                        <Text>add</Text>
                    </TouchableOpacity>
                    {this.state.arrayOfDivs.map((item) => (
                    <View key={item.id}> 
                        <TextInput
                        placeholder="name" style = {styles.MainTextInput}
                        value={item.name}
                        onChangeText={(text) => this.handleChange(text, item.id, "name")}
                        />
                        <TextInput
                        placeholder="email" style = {styles.MainTextInput}
                        value={item.email}
                        onChangeText={(text) => this.handleChange(text, item.id,"email")}
                        />
                        <TextInput
                        placeholder="phone" style = {styles.MainTextInput}
                        value={item.phone}
                        onChangeText={(text) => this.handleChange(text, item.id, "phone")}
                        />
                        <TouchableOpacity onPress={(e) =>this.removeElement(e,item.id)}>
                            <Text>remove</Text>
                            </TouchableOpacity>
                    </View>
                    ))}
            </ScrollView>
            </SafeAreaView >
            
        )
    }
}


const styles = StyleSheet.create({
  mainView:{
    //paddingTop:50,
    backgroundColor: '#81B29A',
    //justifyContent:'center', //center y axis
  },
  containerView:{
    height: Dimensions.get("window").height,
    backgroundColor: 'black',
  },
  basicView:{
    backgroundColor:'#3D405B',
    width:'100%',
    marginTop: -10,
  },
  textboxes:{
    flexDirection: 'row', 
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
  MainTextInput: {
    height:30,
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
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: '20%',
    height: '40%'
  },
})
