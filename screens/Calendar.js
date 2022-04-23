import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Modal,Pressable, Alert,
  TextInput,KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Agenda, Calendar, AgendaList, LocaleConfig } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { getAuth } from "firebase/auth";
import {db} from '../firebase.js'
import { setDoc} from "firebase/firestore"; 
import { collection,collectionGroup, query, where, getDocs, getDoc, doc ,updateDoc, deleteField } from "firebase/firestore";

import {Picker} from '@react-native-picker/picker'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

import { useNavigation  } from '@react-navigation/native';

// LocaleConfig.locales['pt-br'] = {
//   monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
// 	monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
// 	dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
// 	dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
// };

// LocaleConfig.defaultLocale = 'pt-br';

const App = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [useritems, setItems] = useState({})
  const [newMarked, setNewMarked]  = useState({})
  const [calendarOpened, setCalendarOpened] = useState(false);

  const [selectedday, setSelectedday] = useState("")
  const [hr, sethr] = useState(0)
  const [min, setmin] = useState('00')
  const [description, setdescription] = useState("")
  const [location, setlocation] = useState("")

  const [ampm, setampm] = useState("");

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      getItems()
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const DeleteItem = (daydate, time) =>{~
    console.log("Date Deleted");
    const auth = getAuth();
    const user = auth.currentUser;
    var count = 1;
    const docSnap  = getDoc(doc(db, "agenda", user.email, "dates", daydate))
    docSnap.then(doc => {
      if (doc.exists) {
        console.log('Document retrieved successfully. ' + doc.id);
        if (doc.data() == null ){
          console.log("doc is null");
        }
        else{
          if (doc.data().itemcount != null){
            const docdata = doc.data()
            for(let i = 1; i <= doc.data().itemcount; i++){
              if(time == docdata[i].time){
                updateDoc(doc.ref, {
                  [i]: deleteField()
              });
              getItems()
              }
            }
            
          }
        }
      }
      else{
        console.log("doc does not exist");
      }
      return;
    });
  }

  const getItems = () => {
    console.log("Get Items");
    const auth = getAuth();
    const user = auth.currentUser;
    var docdata;
    const newMarks = {};
    getDocs(collection(db, "agenda", user.email, "dates")).then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
          console.log("Doc id: " + doc.id + " data:" + doc.data().itemcount + "\n")
          var temparray = []
          if (doc.data().itemcount != null){
            docdata = doc.data()
            for(let i = 1; i <= doc.data().itemcount; i++){
              var tempobj= {time: null, description: null, location: null, marked: true, day: null};
              if (docdata[i] == null || undefined){
                continue;
              }else{
                tempobj.time = docdata[i].time
                tempobj.description = docdata[i].description
                tempobj.location = docdata[i].location
                tempobj.day = doc.id.toString();
                temparray.push(tempobj)
              }
              
            }
            temparray.sort((a, b) => {
              return a.time > b.time ? 1:-1
            })
            useritems[doc.id.toString()] = temparray;
            newMarked[doc.id.toString()] = {marked: true};
          }
      });
    })
    return ;
    // setModalVisible(false);
  }


  const CreateDate = (day) => {
    console.log("Date Created");
    const auth = getAuth();
    const user = auth.currentUser;
    var count = 1;

    const docSnap  = getDoc(doc(db, "agenda", user.email, "dates",selectedday))
    docSnap.then(doc => {
      if (doc.exists) {
        console.log('Document retrieved successfully. ' + doc.id);
        if (doc.data() == null ){
          setDoc(doc.ref,{
            itemcount: count,
            [count]: {
              time: hr+ ":" + min ,
              description: "Test description",
              location: "location",
            },
          })
        }
        else{
          count = doc.get("itemcount")
          count = count + 1;
          updateDoc(doc.ref,{
            itemcount: count,
            [count]: {
              time: usertime,
              description: "Test description",
              location: "location",
            },
          })
        }
      }
      else{
        setDoc(doc(db, "agenda", user.email, "dates", selectedday), {
          itemcount: count,
          [count]: {
            time: usertime,
            description: "Test description",
            location: "location",
          }
        });
      }
      return;
    });
    setCalendarOpened(false)
    setModalVisible(!modalVisible);
  }

  return (
    <>
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Enter details to create appointment on {selectedday.slice(6,-3)}/{selectedday.slice(8,11)}!</Text>
                <View style={{flexDirection: 'row', alignItems: ""}}>
                <TextInput placeholder="Hr" keyboardType="number-pad" maxLength={1}
                  onChangeText={(text) => { sethr(text); setCalendarOpened(false); } } style={styles.TimeTextInput} />
                <Text> : </Text>
                <TextInput placeholder="Min" keyboardType="number-pad" maxLength={2}
                onChangeText={(text) => {setmin(text); setCalendarOpened(false); }} style={styles.TimeTextInput} />
                <Picker
                  selectedValue={ampm}
                  style={{ height: 40, width: "35%" }}
                  onValueChange={(itemValue, itemIndex) => setampm(itemValue)}
                >
                  <Picker.Item label="AM" value="AM" />
                  <Picker.Item label="PM" value="PM" />
                </Picker>
                </View>
              <TextInput placeholder="description" maxLength={45} multiline={true}
                onChangeText={(text) => { setdescription(text); setCalendarOpened(false); } } style={styles.longerTextInput} />
              <TextInput placeholder="location" maxLength={25}
              onChangeText={(text) => { setlocation(text); setCalendarOpened(false); } } style={styles.longerTextInput} />
              <TouchableOpacity
                style={[styles.button]}
                onPress={() => {CreateDate()}}
              >
                <Text style={styles.textStyle}>Create appointment</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button]}
                onPress={() => {getItems()}}
              >
                <Text style={styles.textStyle}>Reload Items</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button]}
                onPress={() => {setModalVisible(!modalVisible), setCalendarOpened(false)}}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
          </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </View>  
        </Modal>
      </View>
      <Text  style={{textAlign: "center", fontSize: 10, fontWeight: '100',backgroundColor: '#81B29A'}}> Hold day for menu. Click day to start </Text>
      <View style={{ flex: 1 }}>      
        <Agenda
          theme={{     
            backgroundColor: '#81B29A', 
            agendaKnobColor: 'orange',
            agendaDayNumColor: "#F2CC8F",
            agendaDayTextColor: '#F2CC8F',

          }}
          style={{
            
          }}
          loadItemsForMonth={(month) => {console.log('trigger items loading'); console.log("Modal " + modalVisible); if(modalVisible==true){setCalendarOpened(false); }}}
          displayLoadingIndicator = {true}
          
          
          items = {useritems}

          markedDates={newMarked}
          
          firstDay={7}
          onDayPress={(day)=>{console.log('day pressed')}}
          onDayChange={(day)=>{console.log('day changed')}}
          onDayLongPress={day => {console.log("long press " + day.dateString),
            setSelectedday(day.dateString), toggleModal()}}
            
          minDate={'2021-01-01'}
          maxDate={'2030-12-31'}
          
          selected={new Date().toString()}
          disableAllTouchEventsForDisabledDays={true}
          hideArrows={true}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          
          onCalendarToggled={(calendarOpened) => {
            if(modalVisible==true){
              setCalendarOpened(false)}}
          }
          rowHasChanged={(r1, r2) => {return r1.time != r2.time}}


          onRefresh={() => {console.log('refreshing...'), getItems()}}
          refreshing={false}
          refreshControl={null}          
          enableSwipeMonths={false}
          calendarWidth={Dimensions.get('window').width}
          // Hide knob button. Default = false
          hideKnob={false}
          // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
          showClosingKnob={true}
                 
          
          renderEmptyData = {() => {
              return (
                <View style={{ height: "10%", backgroundColor: 'white', borderRadius: 5, 
                  width: "95%", alignItems: 'center', margin: 10}}>
                <Text>This day has no appointment data</Text>
                </View>
            );
          }}
          // renderDay={(day, item) => {
          //   return (<View><Text>Where the day items go</Text></View>);
          // }}
          renderItem={(item, firstItemInDay) => (
            <View style={[styles.item]}>
              <View style={styles.contentContainerStyle}>
                <TouchableOpacity
                  style={styles.itembuttons}
                  onPress={() => {DeleteItem( item.day.toString(), item.time),
                    console.log('selected item ' + item.day.toString() + item.time )}}
                >
                  <Text>Delete</Text>
                </TouchableOpacity> 
                <Text> </Text>
                <TouchableOpacity
                  style={styles.itembuttons}
                  onPress={() => {Alert.alert("Coming Soon")}}
                >
                  <Text>Edit</Text>
                </TouchableOpacity>
                
              </View>
              <Text>{item.time}</Text>
              <Text>{item.location}</Text>
              <Text>{item.description}</Text>
            </View>
          )}
          renderEmptyDate={() => (
          <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
  },
  modalView:{
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalText: {
    marginBottom: 5,
    textAlign: "center"
  },
  contentContainerStyle:{
    flex: 1, 
    flexDirection: "row-reverse",
    padding: 5,
    position:'absolute' , 
    right: -5,
    justifyContent: 'space-evenly'
  },
  itembuttons:{
    // flexDirection: row,
    backgroundColor: '#DDDDDD',
    top: -5,
    padding: 10,
  },
  longerTextInput: {
    height: 40,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#3897f1",
    backgroundColor: "white",
    width: 300,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  TimeTextInput: {
    height: 40,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#3897f1",
    backgroundColor: "white",
    width: 50,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    paddingTop: 30,
    padding: 20,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30,
  },
});

export default App;