
/*add the app state for background use, style, store the time of status change date time has passed.
*/

import React, { Component } from 'react';
//import React in our project
import { View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

export default class App extends Component {
  constructor(props) {
    super(props);
    //initialize the counter duration
    this.state = {
      totalDuration: '',
    };
  }

  componentDidMount() {
    var that = this;

    var date = moment()
      .utcOffset('+05:30')
      .format('YYYY-MM-DD hh:mm:ss');
    //Getting the current date-time with required formate and UTC   
    var expirydate = '2022-06-25 18:27:45';//You can set your own date-time
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    //difference of the expiry date-time given and current date-time
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    //converting in seconds

    that.setState({ totalDuration: d });
    //Settign up the duration of countdown in seconds to re-render
  }

  render() {
    console.log(this.state.totalDuration);
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <CountDown
          until={this.state.totalDuration}
          //duration of countdown in seconds
          timetoShow={('M', 'S')}
          //formate to show
          onFinish={() => alert('finished')}
          //on Finish call
          onPress={() => alert('hello')}
          //on Press call
          size={20}
        />
      </View>
    );
  }
}
