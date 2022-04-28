import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {StyleSheet, Text, View, Button, Alert,TextInput,  Pressable, SafeAreaView, TouchableHighlight,
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
              breafast: [],
              lunch: [],
              dinner: [],
              snacks:[],
              breakfastID: 0,
              lunchID: 0,
              dinnerID: 0,
              snacksID: 0,
            };
        };

        handleChange = (tag, text, id, temp) => {
          switch(tag) {
            case 'breakfast':              
              this.setState((prevState) => {
                console.log("handleChange " + id + " " + temp)
                let newArrOfDivs = prevState.breafast;
                switch(text) {
                    case 'text':
                        newArrOfDivs.find((item) => {
                                if (item.id === id)
                                {
                                    item.text = text
                                }
                            },
                        )
                      break;
      
                    case 'cal':
                        newArrOfDivs.find((item) => {
                            if (item.id === id)
                            {
                                item.cal = text
                            } 
                        },)
                      break;
                    default:
                      console.log("default "+ tag + " " + text);
                      return
                    }
                return { breafast: newArrOfDivs };
                });
              break;

            case 'lunch':
              this.setState((prevState) => {
                console.log("handleChange " + id + " " + temp)
                let newArrOfDivs = prevState.lunch;
                switch(text) {
                    case 'text':
                        newArrOfDivs.find((item) => {
                                if (item.id === id)
                                {
                                    item.text = text
                                }
                            },
                        )
                      break;
      
                    case 'cal':
                        newArrOfDivs.find((item) => {
                            if (item.id === id)
                            {
                                item.cal = text
                            } 
                        },)
                      break;
                    default:
                      console.log("default "+ tag + " " + text);
                      return
                    }
                return { lunch: newArrOfDivs };
                });
              break;

            case 'dinner':
              this.setState((prevState) => {
                console.log("handleChange " + id + " " + temp)
                let newArrOfDivs = prevState.dinner;
                switch(text) {
                    case 'text':
                        newArrOfDivs.find((item) => {
                                if (item.id === id)
                                {
                                    item.text = text
                                }
                            },
                        )
                      break;
      
                    case 'cal':
                        newArrOfDivs.find((item) => {
                            if (item.id === id)
                            {
                                item.cal = text
                            } 
                        },)
                      break;
                    default:
                      console.log("default "+ tag + " " + text);
                      return
                    }
                return { dinner: newArrOfDivs };
                });
              break;
            default:
              Alert.alert("NUMBER NOT FOUND");
            }
            
        };

        componentDidMount() {
            this.setState((prevState) => {
            console.log("componentDidMount" + prevState.breafast + " now ID " + prevState.breakfastID)
            return {
              breafast: [
                ...prevState.breafast,
                // { name: '', id: prevState.divID, email: '', phone: '' },
                ],
              dinner: [
                ...prevState.dinner,
                // { name: '', id: prevState.divID, email: '', phone: '' },
                ],
              snacks: [
                ...prevState.snacks,
                // { name: '', id: prevState.divID, email: '', phone: '' },
                ],
            };
          });
        }

        removeElement = (tag,id) => {
          switch(tag) {
            case 'breakfast':              
              console.log("removeElement")
              this.setState((prevState) => {
              let newArr = prevState.breafast.filter((item) => item.id !== id);
              return { breafast: newArr };
              });
            break;
            
            case 'lunch':
              console.log("removeElement")
              this.setState((prevState) => {
              let newArr = prevState.lunch.filter((item) => item.id !== id);
              return { lunch: newArr };
              });
            break;

            case 'dinner':
              console.log("removeElement")
              this.setState((prevState) => {
              let newArr = prevState.dinner.filter((item) => item.id !== id);
              return { dinner: newArr };
              });
              break;

            default:
              Alert.alert("NUMBER NOT FOUND");
            }
            
        };

        addElement = (tag) => {
          switch(tag) {
            case 'breakfast':              
              this.setState((prevState) => {
                console.log("addElement breakfast"+ prevState.lunchID)
                return {
                    breakfastID: prevState.breakfastID + 1,
                    breafast: [
                      ...prevState.breafast,
                      { text: '', id: prevState.breakfastID, cal: ''},
                    ],
                  };
                })
            break;
            
            case 'lunch':
              this.setState((prevState) => {
                console.log("addElement lunch"+ prevState.lunchID)
                return {
                    lunchID: prevState.lunchID + 1,
                    lunch: [
                      ...prevState.lunch,
                      { text: '', id: prevState.lunchID, cal: ''},
                    ],
                  };
                })
              break;
            case 'dinner':
              this.setState((prevState) => {
                console.log("addElement dinner "+ prevState.dinnerID)
                return {
                  dinnerID: prevState.dinnerID + 1,
                    dinner: [
                      ...prevState.dinner,
                      { text: '', id: prevState.dinnerID, cal: ''},
                    ],
                  };
                })
              break;

            default:
              Alert.alert("NUMBER NOT FOUND");
            }
        };

      render() {
        return (
                <View  style = {{maxHeight:"100%", backgroundColor: "#81B29A", height: Dimensions.get("window").height}}>
                <ScrollView contentContainerStyle={{flexGrow: 0, paddingBottom: 15}}>

                    <Text style = {styles.MealTitleText}>Breakfast</Text>
                    <TouchableHighlight style={styles.add} onPress={() =>this.addElement("breakfast")}>
                      <Text>add</Text>
                    </TouchableHighlight>
                    {this.state.breafast.map((item) => (
                    <View style = {{flex: .2, backgroundColor: "#81B29A"}} key={item.id}> 
                        <View style = {styles.textboxes}>
                          <TextInput
                          placeholder="Meal" style = {styles.MainTextInput}
                          value={item.name}
                          onChangeText={(text) => this.handleChange("breakfast" , text, item.id, "text")}
                          />
                          <TextInput
                          placeholder="Calories" style = {styles.CalTextInput}
                          value={item.email}
                          onChangeText={(text) => this.handleChange("breakfast", text, item.id,"cal")}
                          />
                        </View>
                      <TouchableOpacity style={styles.remove} onPress={() =>this.removeElement("breakfast",item.id)}>
                        <Text>Remove</Text>
                      </TouchableOpacity>
                    </View>
                    ))}

                    <Text style = {styles.MealTitleText}>Lunch</Text>
                    <TouchableOpacity  style={styles.add} onPress={() =>this.addElement("lunch")}>
                      <Text>add</Text>
                    </TouchableOpacity>
                    {this.state.lunch.map((item) => (
                    <View key={item.id}> 
                        <View style = {styles.textboxes}>
                        <TextInput
                        placeholder="Meal" style = {styles.MainTextInput}
                        value={item.name}
                        onChangeText={(text) => this.handleChange("lunch", text, item.id, "text")}
                        />
                        <TextInput
                        placeholder="Calories" style = {styles.CalTextInput}
                        value={item.email}
                        onChangeText={(text) => this.handleChange("lunch", text, item.id,"cal")}
                        />
                        </View>
                      <TouchableOpacity  style={styles.remove} onPress={() =>this.removeElement("lunch",item.id)}>
                        <Text>remove</Text>
                      </TouchableOpacity>
                    </View>
                    ))}

                    <Text style = {styles.MealTitleText}>Dinner</Text>
                    <TouchableOpacity  style={styles.add} onPress={() =>this.addElement("dinner")}>
                      <Text>add</Text>
                    </TouchableOpacity>
                    {this.state.dinner.map((item) => (
                    <View key={item.id}> 
                        <View style = {styles.textboxes}>
                        <TextInput
                        placeholder="Meal" style = {styles.MainTextInput}
                        value={item.name}
                        onChangeText={(text) => this.handleChange("dinner",text, item.id, "text")}
                        />
                        <TextInput
                        placeholder="Calories" style = {styles.CalTextInput}
                        value={item.email}
                        onChangeText={(text) => this.handleChange("dinner",text, item.id,"cal")}
                        />
                        </View>
                      <TouchableOpacity style={styles.remove} onPress={() =>this.removeElement("dinner",item.id)}>
                        <Text>remove</Text>
                      </TouchableOpacity>
                    </View>
                    ))}
            </ScrollView>
            </View >
            
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
    backgroundColor: '#3897f1',
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
    color: 'blue',
    fontSize: 20,
    padding: 2,
    backgroundColor: 'white'
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
  add: {
    backgroundColor: '#3897f1',
    borderRadius: 3,
    height: 25,
    width: 100,
    alignItems: 'center',
  },
  remove: {
    backgroundColor: '#3897f1',
    borderRadius: 3,
    alignItems: 'center',
  },
})
