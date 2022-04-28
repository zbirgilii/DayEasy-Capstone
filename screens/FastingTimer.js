import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Picker,
  Platform,
  Image
} from "react-native";

import {useState, useEffect, useRef} from 'react'

const screen = Dimensions.get("window");

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = time => {
  const hours = Math.floor(time / 60 / 60);
  time = time - hours * 60 * 60;
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return {
    hours: (hours),
    minutes: (minutes),
    seconds: (seconds)
  };
};

const createArray = length => {
  const arr = [];
  let i = 0;
  while (i < length) {
    arr.push(i.toString());
    i += 1;
  }

  return arr;
};

const AVAILABLE_HOURS = createArray(13);
const AVAILABLE_MINUTES = createArray(60);
const AVAILABLE_SECONDS = createArray(60);

export default class App extends React.Component {
  state = {
    remainingSeconds: 5,
    isRunning: false,
    selectedHours:"0",
    selectedMinutes: "0",
    selectedSeconds: "5"
  };

  interval = null;

  componentDidUpdate(prevProp, prevState) {
    if (this.state.remainingSeconds === 0 && prevState.remainingSeconds !== 0) {
      this.stop();
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

start = () => {
  this.setState(state => ({
    remainingSeconds: 
      parseInt(state.selectedHours, 10) * 60 * 60 +
      parseInt(state.selectedMinutes, 10) * 60 +
      parseInt(state.selectedSeconds, 10),
    isRunning: true
  }));

  this.interval = setInterval(() => {
    this.setState(state => ({
      remainingSeconds: state.remainingSeconds - 1
    }));
  }, 1000);
};

  stop = () => {
    clearInterval(this.interval);
    this.interval = null;
    this.setState({
      remainingSeconds: 5,
      isRunning: false
    });
  };

  renderPickers = () => (
    <View style={styles.pickerContainer}>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={this.state.selectedHours}
        onValueChange={hourValue => {
          this.setState({ selectedHours: hourValue });
        }}
        mode="dropdown"
      >
        {AVAILABLE_HOURS.map(value => (
          <Picker.Item key={value} label={value} value={value} />
        ))}
      </Picker>
      <Text style={styles.pickerItem}>hours</Text>
      <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={this.state.selectedMinutes}
        onValueChange={minuteValue => {
          this.setState({ selectedMinutes: minuteValue });
        }}
        mode="dropdown"
      >
        {AVAILABLE_MINUTES.map(value => (
          <Picker.Item key={value} label={value} value={value} />
        ))}
      </Picker>
      <Text style={styles.pickerItem}>minutes</Text>
       <Picker
        style={styles.picker}
        itemStyle={styles.pickerItem}
        selectedValue={this.state.selectedSeconds}
        onValueChange={itemValue => {
          this.setState({ selectedSeconds: itemValue });
        }}
        mode="dropdown"
      >
        {AVAILABLE_SECONDS.map(value => (
          <Picker.Item key={value} label={value} value={value} />
        ))}
      </Picker>
      <Text style={styles.pickerItem}>seconds</Text>
    </View>

  );

  render() {
    const { hours, minutes, seconds } = getRemaining(this.state.remainingSeconds);

    return (
      <View style={styles.container}>
      	<View style = {styles._Header}>
				<View style = {styles._Rectangle_21}>
				</View>
        <View style = {styles._Rectangle_22}>
				</View>
				<Image style = {styles._icon_removebg_preview_2} source = {{uri: imageUrl_icon_removebg_preview_2}}>
				</Image>
			</View>
			<Text style = {styles._timer}>
				Fasting Timer
			</Text>


        <StatusBar barStyle="light-content" />
        {this.state.isRunning ? (
          <Text style={styles.timerText}>{`${hours}:${minutes}:${seconds}`}</Text>
        ) : (
          this.renderPickers()
        )}
        {this.state.isRunning ? (
          <TouchableOpacity
            onPress={this.stop}
            style={[styles.button, styles.buttonStop]}
          >
            <Text style={[styles.buttonText, styles.buttonTextStop]}>Stop</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={this.start} style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(211, 227, 230, 1)",
    alignItems: "center",
    justifyContent: "center"
  },
  	_Header: {
		position: "absolute",
		width: 500,
		height: 200,
		transform: [
			{translateX: 0},
			{translateY: -306},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_21: {
		position: "absolute",
		width: 500,
		height: 50,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 68,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(61, 64, 91, 1)",
	},
	_Rectangle_22: {
		position: "absolute",
		width: 500,
		height: 68,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(129, 178, 154, 1)",
	},
	_icon_removebg_preview_2: {
		position: "absolute",
		width: 72,
		height: 73,
		borderRadius: 0,
		opacity: 1,
		left: 300,
		right: "auto",
		top: 1,
		bottom: "auto",
		transform: [
			{translateX: 60},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
  button: {
    borderWidth: 10,
    borderColor: "#89AAFF",
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  buttonStop: {
    borderColor: "#FF851B"
  },
  buttonText: {
    fontSize: 45,
    color: "#89AAFF"
  },
  buttonTextStop: {
    color: "#FF851B"
  },
  timerText: {
    color: "#fff",
    fontSize: 90
  },
  picker: {
    width: 50,
    ...Platform.select({
      android: {
        color: "#fff",
        backgroundColor: "#07121B",
        marginLeft: 10
      }
    })
  },
  pickerItem: {
    color: "#fff",
    fontSize: 20
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  	_timer: {
		position: "absolute",
		width: 215,
		height: 40,
		left: 100,
		right: "auto",
		top: 73,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 32,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
});



const imageUrl_icon_removebg_preview_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/8daf561523cf6d8bda96db1c129d92b3"
