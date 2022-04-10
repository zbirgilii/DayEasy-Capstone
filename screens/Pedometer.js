import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Image, ScrollView, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Pedometer } from "expo-sensors";
import CircularProgress from "react-native-circular-progress-indicator";
import { LinearGradient } from 'expo-linear-gradient';

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
          isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
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
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._Pedometer___Page_1}>
		<LinearGradient
        colors={['#D3E3E6', '#F4F1DE']}
        style={stylesheet._Pedometer___Page_1} />
			<View style = {stylesheet._Loading_circle}>
				<View style = {stylesheet._Loading_Circle_Bar__no_animation_}>
				</View>
				<View style = {stylesheet._Ellipse_7}>
				</View>
			</View>
			<View style = {stylesheet._Group_38}>
				<View style = {stylesheet._Set_Goal_Button}>
				</View>
				<View style = {[stylesheet._Set_Goal, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Set_Goal, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Set Goal
				</Text>
				</View>
			</View>
			<View style = {stylesheet._Group_39}>
				<View style = {stylesheet._Records_Button}>
				</View>
				<View style = {[stylesheet._Records, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Records, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Records
				</Text>
				</View>
			</View>
			<View style = {stylesheet._Steps_Text}>
				<View style = {[stylesheet._Steps_Taken, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Steps_Taken, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Steps Taken
				</Text>
				</View>
			</View>
			<View style = {stylesheet._Header}>
				<View style = {stylesheet._Rectangle_21}>
				</View>
				<View style = {stylesheet._Rectangle_22}>
				</View>
				<Image style = {stylesheet._icon_removebg_preview_2} source = {{uri: imageUrl_icon_removebg_preview_2}}>
				</Image>
			</View>
			<View style = {[stylesheet._Pedometer, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
			<Text style = {[stylesheet._Pedometer, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
				Pedometer
			</Text>
			</View>
			<View style = {stylesheet._Group_37}>
				<View style = {stylesheet._Navigation}>
					<View style = {stylesheet._Navigation_Panel}>
						<View style = {stylesheet._Rectangle_20}>
						</View>
						<View style = {stylesheet._Group_2}>
							<View style = {stylesheet._Ellipse_6}>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
		</ScrollView>
	)
}
}

const stylesheet = StyleSheet.create({
_Pedometer___Page_1: {
	position: "relative",
	width: Dimensions.get("window").width,
	height: 812,
	borderRadius: 0,
	overflow: "hidden",
	transform: [
		{translateX: 0},
		{translateY: 0},
		{rotate: "0deg"},
	],
	backgroundColor: "rgba(244, 241, 222, 1)",
	left: 0,
	top: 0,
},
_Set_Goal: {
	position: "absolute",
	width: 145,
	height: 52,
	transform: [
		{translateX: 15},
		{translateY: 567.7339477539062},
		{rotate: "0deg"},
	],
	overflow: "hidden",
	backgroundColor: "rgba(0,0,0,0)",
},
_Set_Goal_Button: {
	position: "absolute",
	width: 145,
	height: 52,
	borderRadius: 10,
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
_Set_Goal_2: {
	position: "absolute",
	width: 99,
	height: 26,
	left: 23,
	right: "auto",
	top: 13.26605224609375,
	bottom: "auto",
	transform: [
		{translateX: 0},
		{translateY: 0},
		{rotate: "0deg"},
	],
	fontFamily: "Inter",
	fontWeight: 400,
	textDecorationLine: "none",
	fontSize: 24,
	color: "rgba(82, 82, 82, 1)",
	textAlign: "left",
	textAlignVertical: "top",
	letterSpacing: 0.1,
},
_Weekly_Progress: {
	position: "absolute",
	width: 145,
	height: 52,
	transform: [
		{translateX: 215},
		{translateY: 568},
		{rotate: "0deg"},
	],
	overflow: "hidden",
	backgroundColor: "rgba(0,0,0,0)",
},
_Records_Button: {
	position: "absolute",
	width: 145,
	height: 52,
	borderRadius: 10,
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
_Records: {
	position: "absolute",
	width: 99,
	height: 26,
	left: 22,
	right: "auto",
	top: 10,
	bottom: "auto",
	transform: [
		{translateX: 0},
		{translateY: 0},
		{rotate: "0deg"},
	],
	fontFamily: "Inter",
	fontWeight: 400,
	textDecorationLine: "none",
	fontSize: 24,
	color: "rgba(82, 82, 82, 1)",
	textAlign: "left",
	textAlignVertical: "top",
	letterSpacing: 0.1,
},
_Header: {
	position: "absolute",
	width: 375,
	height: 114,
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
	width: 375,
	height: 46,
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
	width: 375,
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
		{translateX: 0},
		{translateY: 0},
		{rotate: "0deg"},
	],
	backgroundColor: "rgba(0,0,0,0)",
},
_Pedometer: {
	position: "absolute",
	width: 201,
	height: 28,
	left: 107,
	right: "auto",
	top: 68,
	bottom: "auto",
	transform: [
		{translateX: 0},
		{translateY: 0},
		{rotate: "0deg"},
	],
	fontFamily: "Poppins",
	fontWeight: 400,
	textDecorationLine: "none",
	fontSize: 32,
	color: "rgba(255, 255, 255, 1)",
	textAlign: "left",
	textAlignVertical: "top",
	letterSpacing: 0.1,
},
_Navigation_panel: {
	position: "absolute",
	width: 391,
	height: 101.9805908203125,
	transform: [
		{translateX: 0},
		{translateY: 633.0794067382812},
		{rotate: "0deg"},
	],
	overflow: "hidden",
	backgroundColor: "rgba(0,0,0,0)",
},
_Navigation: {
	position: "absolute",
	width: 391,
	height: 101.9805908203125,
	transform: [
		{translateX: 0},
		{translateY: 0},
		{rotate: "0deg"},
	],
	overflow: "hidden",
	backgroundColor: "rgba(0,0,0,0)",
},
_Navigation_Panel: {
	position: "absolute",
	width: 391,
	height: 101.9805908203125,
	transform: [
		{rotate: "0deg"},
	],
	backgroundColor: "rgba(0,0,0,0)",
},
_Rectangle_20: {
	position: "absolute",
	width: 391,
	height: 71,
	borderRadius: 0,
	opacity: 1,
	left: 0,
	right: "auto",
	top: 30.9805908203125,
	bottom: "auto",
	transform: [
		{translateX: 0},
		{translateY: 0},
		{rotate: "0deg"},
	],
	backgroundColor: "rgba(255, 255, 255, 1)",
},
_Group_2: {
	position: "absolute",
	width: 85,
	height: 85,
	transform: [
		{translateX: 149.78421020507812},
		{translateY: 0},
		{rotate: "0deg"},
	],
	overflow: "hidden",
	backgroundColor: "rgba(0,0,0,0)",
},
_Ellipse_6: {
	position: "absolute",
	width: 85,
	height: 85,
	borderRadius: 1000,
	backgroundColor: "rgba(129, 178, 154, 1)",
	left: 0,
	right: "auto",
	top: 0,
	bottom: "auto",
	transform: [
		{translateX: 0},
		{translateY: 0},
		{rotate: "0deg"},
	],
},
_Circle: {
	position: "absolute",
	width: 345,
	height: 345,
	transform: [
		{translateX: 15},
		{translateY: 177},
		{rotate: "0deg"},
	],
	overflow: "hidden",
	backgroundColor: "rgba(0,0,0,0)",
},
_Loading_circle: {
	position: "absolute",
	width: 345,
	height: 345,
	transform: [
		{translateX: 0},
		{translateY: 0},
		{rotate: "0deg"},
	],
	overflow: "hidden",
	backgroundColor: "rgba(0,0,0,0)",
},
_Loading_Circle_Bar__no_animation_: {
	position: "absolute",
	width: 345,
	height: 345,
	borderRadius: 1000,
	backgroundColor: "rgba(169, 204, 187, 0.6899999976158142)",
	left: 0,
	right: "auto",
	top: 0,
	bottom: "auto",
	transform: [
		{translateX: 0},
		{translateY: 0},
		{rotate: "0deg"},
	],
},
_Ellipse_7: {
	position: "absolute",
	width: 255,
	height: 248,
	borderRadius: 1000,
	backgroundColor: "rgba(244, 241, 222, 1)",
	left: 44.870933532714844,
	right: "auto",
	top: 46.870941162109375,
	bottom: "auto",
	transform: [
		{translateX: 0},
		{translateY: 0},
		{rotate: "0deg"},
	],
},
_Steps_Text: {
	position: "absolute",
	width: 147,
	height: 32,
	transform: [
		{translateX: 91.87093353271484},
		{translateY: 200.87094116210938},
		{rotate: "0deg"},
	],
	overflow: "hidden",
	backgroundColor: "rgba(0,0,0,0)",
},
_Steps_Taken: {
	position: "absolute",
	width: 147,
	height: 32,
	left: 0,
	right: "auto",
	top: 0,
	bottom: "auto",
	transform: [
		{translateX: 0},
		{translateY: 0},
		{rotate: "0deg"},
	],
	fontFamily: "Poppins",
	fontWeight: 400,
	textDecorationLine: "none",
	fontSize: 24,
	color: "rgba(61, 64, 91, 1)",
	textAlign: "left",
	textAlignVertical: "top",
	letterSpacing: 0.1,
},
});

const imageUrl_icon_removebg_preview_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/a192b0328e04b843bab8941e9f916c3e"
