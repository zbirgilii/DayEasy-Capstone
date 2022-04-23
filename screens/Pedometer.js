import React from 'react';
import { StyleSheet, Button, Text, View, Dimensions, ScrollView, Image } from 'react-native';
import { Pedometer } from 'expo-sensors';
import { LinearGradient } from 'expo-linear-gradient';
import CircularProgress from "react-native-circular-progress-indicator";
import { useNavigation } from '@react-navigation/native';

export default class App extends React.Component {
  state = {
    isPedometerAvailable: 'checking',
    pastStepCount: 0,
    currentStepCount: 0,
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps,
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result),
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: 'Pedometer unavailable' + error,
        });
      }
    );
  
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: 'Could not get stepCount: ' + error,
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height, width: Dimensions.get("window").width}}>
		<View style = {stylesheet.PhoneSize}>
		<LinearGradient
        colors={['#D3E3E6', '#F4F1DE']}
        style={stylesheet.PhoneSize} />
        <View style = {stylesheet._Header}>
				<View style = {stylesheet._Rectangle_21}>
				</View>
				<View style = {stylesheet._Rectangle_22}>
				</View>                                                                                                   
				<Image style = {stylesheet._icon_removebg_preview_2} source = {{uri: imageUrl_icon_removebg_preview_2}}>
				</Image>
			</View>
			<View style = {stylesheet._Pedometer}>
			<Text style = {stylesheet._Pedometer}>
				Pedometer
			</Text>
			</View>
      	<View style={[stylesheet.circlePosition, { flex: 3 }]}>
				<CircularProgress
				value={this.state.pastStepCount}
				maxValue={20000}
				radius={190}
				textColor={"#ecf0f1"}
				activeStrokeColor={"#7DA993"}
				inActiveStrokeColor={"#A9CCBB"}
				inActiveStrokeOpacity={0.5}
				inActiveStrokeWidth={40}
				activeStrokeWidth={30}
				titleColor={"#ecf0f1"}
				titleStyle={{ fontWeight: "bold" }}
				/>
        <View> 
		<Text style = {stylesheet.steps_Taken}>Calories burnt: {[(this.state.pastStepCount) /1300*60]}</Text>  
        </View>    
      </View>
      </View>
      </ScrollView>
    );
  }
}


const stylesheet = StyleSheet.create({ 	
  PhoneSize: {
		flex: 1,
		position: "absolute",
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
		borderRadius: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(250, 245, 240, 1)",
		left: 0,
		top: 0,
	},
	_Header: {
		position: "absolute",
		width: Dimensions.get("window").width,
		height: 200,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_21: {
		position: "absolute",
		width: 400,
		height: 25,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 65,
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
		width: 400,
		height: 65,
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
		width: 55,
		height: 60,
		borderRadius: 0,
		opacity: 1,
		left: 310,
		right: "auto",
		top: 1,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Pedometer: {
		position: "absolute",
		width: 251,
		height: 48,
		left: 75,
		right: "auto",
		top: 32,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(255, 255, 255, 1)",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
  		circlePosition: {
 		position: 'absolute',
  		alignSelf: 'center',
  		bottom: 285
  },
  steps_Taken:{
	position: "absolute",
	fontWeight: '400',
	left: 85,
	right: "auto",
	top: 45,
	bottom: "auto",
	textDecorationLine: "none",
	fontSize: 25,
	color: "rgba(99, 103, 140, 1)",
	textAlign: "left",
	textAlignVertical: "top",
	letterSpacing: 0.1,
  },
  _calories_Burnt:{
	position: "absolute",
	fontWeight: '400',
	left: 85,
	right: "auto",
	top: 25,
	bottom: "auto",
	textDecorationLine: "none",
	fontSize: 25,
	color: "rgba(99, 103, 140, 1)",
	textAlign: "left",
	textAlignVertical: "top",
	letterSpacing: 0.1,
  }
});

const imageUrl_icon_removebg_preview_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/aaf065712facd931efc4e11efca2dd53"
