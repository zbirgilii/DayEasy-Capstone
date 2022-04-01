import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

// LocaleConfig.locales['pt-br'] = {
//   monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
// 	monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
// 	dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
// 	dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
// };

// LocaleConfig.defaultLocale = 'pt-br';

const App = () => {
  const [calendarOpened, setCalendarOpened] = useState(false);
  const [items, setitems] = useState({
    '2022-04-04': [{text: 'any js object', marked: true}],
    '2022-04-02': [{text: 'item 1 - any js object'}],
    '2022-04-03': [{text: 'item 2 - any js object'}, {text: 'item 3 - any js object'}],
  });


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ flex: 1 }}>
        <Agenda
            loadItemsForMonth={(month) => {console.log('trigger items loading')}}
            items = {items}
            markedDates={{
            '2022-04-16': {marked: true},
            '2022-04-17': {marked: true},
            '2022-04-18': {marked: true}
            }}
            firstDay={1}
            onDayPress={(day)=>{console.log('day pressed')}}
            onDayChange={(day)=>{console.log('day changed')}}
            onDayLongPress={day => {console.log('selected day', day)}}
            selected={new Date()}
            minDate={'2021-01-01'}
            maxDate={'2030-12-31'}          
            renderEmptyData = {() => {
                return (<View><Text>empty data</Text></View>);
            }}
            renderDay={(day, item) => {
              return (<View><Text>Where the day items go</Text></View>);
            }}
            renderItem={(item, firstItemInDay) => (
              <View style={[styles.item, { height: item.height }]}>
                  <Text>{item.text}</Text>
                  <TouchableOpacity
                  style={styles.button}
                  onPress={(item) => {console.log('selected day')}}
                  >
                  <Text>Touch for Activity</Text>
                  </TouchableOpacity>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
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