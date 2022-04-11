import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Modal,Pressable, Alert,
  TextInput,KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Agenda, Calendar, AgendaList, LocaleConfig } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { getAuth } from "firebase/auth";
import {db} from '../firebase.js'
import { setDoc} from "firebase/firestore"; 
import { collection,collectionGroup, query, where, getDocs, getDoc, doc ,updateDoc} from "firebase/firestore";

// LocaleConfig.locales['pt-br'] = {
//   monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
// 	monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
// 	dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
// 	dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
// };

// LocaleConfig.defaultLocale = 'pt-br';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
  const [calendarOpened, setCalendarOpened] = useState(false);
  const [selectedday, setSelectedday] = useState('')
  const [usertime, setUsertime] = useState('Test Time')
  const [useritems, setuseritems] = useState({}
    // {
    // '2022-04-06': [{text: 'any js object', time: "6:30",marked: true}],
    // '2022-04-10': [{text: 'any js object', marked: true}],
    // '2022-04-12': [{text: 'item 1 - any js object'}],
    // '2022-04-13': [{text: 'item 2 - any js object'}, {text: 'item 3 - any js object'}],
    // }
  );


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const getItems = () => {
    console.log("Get Items");
    const auth = getAuth();
    const user = auth.currentUser;
    var docdata;
    getDocs(collection(db, "agenda", user.email, "dates")).then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
          console.log("Doc id: " + doc.id + " data:" + doc.data().itemcount + "\n")
          var temparray = []
          if (doc.data().itemcount != null){
            docdata = doc.data()
            for(let i = 1; i <= doc.data().itemcount; i++){
              var tempobj= {time: null, description: null, location: null, marked: null};
              tempobj.time = docdata[i].time
              tempobj.description = docdata[i].description
              tempobj.location = docdata[i].location

              temparray.push(tempobj)
            }
            temparray.sort((a, b) => {
              return a.time > b.time ? 1:-1
            })
            useritems[doc.id.toString()] = temparray;
          }
      });
      return;
    })

    setModalVisible(false);
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
              time: usertime,
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1 }}>
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
                <View>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <TextInput placeholder="Set Time"
                      onChangeText={(text) => setUsertime(text)} />
                    <Pressable
                      style={[styles.button]}
                      onPress={() => {CreateDate()}}
                    >
                      <Text style={styles.textStyle}>Date</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button]}
                      onPress={() => {getItems()}}
                    >
                      <Text style={styles.textStyle}>items</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                  </View>
                  </TouchableWithoutFeedback>
                  </KeyboardAvoidingView> 
                </View>
                  
              </View>
            </Modal>
      <Agenda
          displayLoadingIndicator = {true}
          directionalLockEnabled = {true}
          loadItemsForMonth={(month) => {getItems(), console.log('trigger items loading'),month}}
          items = {useritems}

          markedDates={useritems}
          
          firstDay={7}
          onDayPress={(day)=>{console.log('day pressed')}}
          onDayChange={(day)=>{console.log('day changed')}}
          onDayLongPress={day => {console.log("long press " + day.dateString),
            setSelectedday(day.dateString), setModalVisible(true)}}
            
          minDate={'2021-01-01'}
          maxDate={'2030-12-31'}
          current={new Date().toISOString()}          
          
          disableAllTouchEventsForDisabledDays={true}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          hideArrows={false}
          onCalendarToggled={(calendarOpened) => setCalendarOpened(calendarOpened)}
          rowHasChanged={(r1, r2) => {return r1.time != r2.time}}
          
          pagingEnabled={false}

          onRefresh={() => {console.log('refreshing...'), getItems()}}
          refreshing={false}
          refreshControl={null}          
          enableSwipeMonths={false}
          calendarWidth={Dimensions.get('window').width}
          // Hide knob button. Default = false
          hideKnob={false}
          // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
          showClosingKnob={true}
          theme={{
            
          }}
          
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
                  onPress={(item) => {console.log('selected item')}}
                >
                  <Text>Press Here</Text>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView:{
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  contentContainerStyle:{
    flex: 1, 
    flexDirection: "row",
    padding: 5,
  },
  itembuttons:{
    // flexDirection: row,
    backgroundColor: '#DDDDDD',
    position:'absolute' , 
    right:-10,
    top: -10,
    padding: 4,
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
    padding: 10,
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