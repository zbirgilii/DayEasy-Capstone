import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Modal,Pressable, Alert,
  TextInput,KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
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
  var stringsofdatesobjects = { 
    '2022-04-06': [{text: 'any js object', time: "6:30",marked: true}],
  }
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
    var temp = 0
    getDocs(collection(db, "agenda", user.email, "dates")).then((querySnapshot) => { 
      querySnapshot.forEach((doc) => {
          console.log("Doc id: " + doc.id + " item count:" + doc.data().itemcount)
          temp = doc.data().itemcount
          for(let i = 0; i <= temp; i++){
            console.log(doc.data(i))
            // const usertime = {
            //   ...objectValue,
            //   [doc.id]: [],
            // };
            // setObjectValue(objectvalue);
          };
      });
      return;
    })
    // const iterator = 0
    // const icrement = 0
    // getDocs(collection(db, "agenda", user.email, "dates")).then((querySnapshot) => { 
    //   querySnapshot.forEach((doc) => {
    //       items[selectedday,doc.id]=doc.data();
    //       console.log("Doc id " + doc.id)
    //       console.log(items[selectedday,doc.id])
    //   });
    //   return;
    // getDocs(collection(db, "agenda", user.email, "dates")).then((querySnapshot) => { 
    //   querySnapshot.forEach((doc) => {
    //       console.log("Doc id " + doc.id)
    //       console.log(doc)
    //   });
    //   return;
    // })

    setModalVisible(!modalVisible);
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
      
        // count = doc.data(itemcount);
        // count = ++count;
        // console.log(count)
        // updateDoc(doc.ref,{
        //   itemcount: count,
        //   [count]: {
        //     time: usertime,
        //     description: "Test description",
        //     location: "location",
        //   },
        // })
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
    // const docSnap  = getDoc(doc(db, "agenda", user.email, "dates",selectedday))
    // docSnap.then(doc => {
    //   if (doc.exists) {
    //     console.log('Document retrieved successfully.' + doc.get("count"));
    //     console.log(doc.data().count)
    //     count = doc.data().count
    //     count = ++count
    //     console.log("lets see " + count)
    //     var temp = "item"+count
    //     console.log("lets see " + temp)
    //     updateDoc(doc.ref,{
    //       item: {
    //         time: usertime,
    //         description: "Test",
    //         location: 'blank',
    //       },
    //     });
    //   }
    //   else{
    //     setDoc(doc(db, "agenda", user.email, "dates", selectedday, "items",), {
    //       count: count,
    //       item1: {
    //         time: usertime,
    //         description: "Test",
    //         location: 'blank',
    //      },  
    //     });
    //   }
    // });

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
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => {CreateDate()}}
                    >
                      <Text style={styles.textStyle}>Date</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => {getItems()}}
                    >
                      <Text style={styles.textStyle}>items</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
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
          loadItemsForMonth={(month) => {console.log('trigger items loading'),month}}
          items = {useritems}
          markedDates={{
          '2022-04-16': {marked: true},
          '2022-04-17': {marked: true},
          '2022-04-18': {marked: true}
          }}
          firstDay={7}
          onDayPress={(day)=>{console.log('day pressed')}}
          onDayChange={(day)=>{console.log('day changed')}}
          onDayLongPress={day => {console.log("long press " + day.dateString),
            setSelectedday(day.dateString), setModalVisible(true)}}
          minDate={'2021-01-01'}
          maxDate={'2030-12-31'}          
          renderEmptyData = {() => {
              return (<View><Text>empty data</Text></View>);
          }}
          // renderDay={(day, item) => {
          //   return (<View><Text>Where the day items go</Text></View>);
          // }}
          renderItem={(item, firstItemInDay) => (
            <View style={[styles.item, { height: item.height }]}>
                  <View style={styles.contentContainerStyle}>
                  <TouchableOpacity
                    style={styles.itembuttons}
                    onPress={(item) => {console.log('selected item')}}
                    >
                    <Text>Touch for Activity</Text>
                    </TouchableOpacity>
                  </View>
                <Text>{item.text}</Text>
                {item.time != null ? (
                  <Text>{item.time}</Text>
                ) : (
                  <Text>No date!</Text>
                )}
            </View>
          )}
          renderEmptyDate={() => (
          <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
          )}
          onCalendarToggled={(calendarOpened) => setCalendarOpened(calendarOpened)}
          rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
          onRefresh={() => console.log('refreshing...')}
          refreshing={false}
          refreshControl={null}
          hideArrows={true}
          enableSwipeMonths={true}
          calendarWidth={Dimensions.get('window').width}
          // Hide knob button. Default = false
          hideKnob={false}
          // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
          showClosingKnob={true}
          theme={{
          knobContainer: {
              backgroundColor: 'red'
          }
          }}
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
    // height: '90%',
    width: '20%',
    alignSelf: "flex-end" , 
    position:'absolute' , 
    right:0,   
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
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
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30,
  },
});

export default App;