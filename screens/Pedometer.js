import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Pedometer } from "expo-sensors";
import { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';

import CircularProgress from "react-native-circular-progress-indicator";

export default function App (){

	const [PedomaterAvailability, SetPedomaterAvailability] = useState("");
	const [StepCount, SetStepCount] = useState(50);
	var WindowHeight = Dimensions.get("window").height;
	var Dist = StepCount / 1300;
	var DistanceCovered = Dist.toFixed(4);
   
   
	React.useEffect(() => {
	  subscribe();
	}, 
	[]);
	subscribe = () => {

		const subscription = Pedometer.watchStepCount((result) => {
		  SetStepCount(result.steps);
		});
	 
	  
	 
		Pedometer.isAvailableAsync().then(
		  (result) => {
			SetPedomaterAvailability(String(result));
		  },
		  (error) => {
			SetPedomaterAvailability(error);
		  }
		);
	  };

	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._iPhone_13___13_Pro___2}>
		<LinearGradient
        colors={['#D3E3E6', '#F4F1DE']}
        style={stylesheet._iPhone_13___13_Pro___2} />
			<View style={stylesheet.circlePosition}>         
			<CircularProgress
				value={StepCount}
				maxValue={100}
				radius={210}
				textColor={"#ecf0f1"}
				activeStrokeColor={"#7DA993"}
				inActiveStrokeColor={"#A9CCBB"}
				inActiveStrokeOpacity={0.5}
				inActiveStrokeWidth={40}
				activeStrokeWidth={30}
				titleColor={"#ecf0f1"}
				titleStyle={{ fontWeight: "bold" }}
				/>
				</View>
			<View style = {stylesheet._Steps_Text}>
				<View style = {[stylesheet._, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
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
			<View style = {stylesheet._Set_Goal}>
				<View style = {stylesheet._Set_Goal_Button}>
				</View>
				<View style = {[stylesheet._Set_Daily_Goal, {display: "flex", flexDirection: "row", alignItems: "center"}]}>
				<Text style = {[stylesheet._Set_Daily_Goal, {position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{translateX: 0}, {translateY: 0}],}]}>
					Set Daily Goal
				</Text>
				</View>
			</View>
		</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	_iPhone_13___13_Pro___2: {
		position: "relative",
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
	_Steps_Text: {
		position: "absolute",
		width: 147,
		height: 32,
		transform: [
			{translateX: 125},
			{translateY: 450},
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
			{translateX: 125},
			{translateY: 450},
			{rotate: "0deg"},
		],
		fontFamily: "Poppins",
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(61, 64, 91, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Header: {
		position: "absolute",
		width: 393,
		height: 143.61404418945312,
		transform: [
			{translateX: -3},
			{translateY: -1},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Rectangle_21: {
		position: "absolute",
		width: 400,
		height: 47.614036560058594,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 96,
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
		height: 96,
		borderRadius: 0,
		opacity: 1,
		left: 3,
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
		width: 83,
		height: 69,
		borderRadius: 0,
		opacity: 1,
		left: 307,
		right: "auto",
		top: 27,
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
		height: 48,
		left: 120,
		right: "auto",
		top: 95,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Poppins",
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 32,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	_Set_Goal: {
		position: "absolute",
		width: 255,
		height: 52,
		transform: [
			{translateX: 67},
			{translateY: 704},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	_Set_Goal_Button: {
		position: "absolute",
		width: 255,
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
		backgroundColor: "rgba(99, 103, 140, 1)",
	},
	_Set_Daily_Goal: {
		position: "absolute",
		width: 177,
		height: 26,
		left: 43,
		right: "auto",
		top: 13,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Inter",
		fontWeight: '400',
		textDecorationLine: "none",
		fontSize: 24,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
  circlePosition: {
  position: 'absolute',
  alignSelf: 'center',
  bottom: 235
  }
});

const imageUrl_icon_removebg_preview_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/aaf065712facd931efc4e11efca2dd53"