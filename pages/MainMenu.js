import React from 'react';
import {View, Text} from 'react-native';
import { BrowserRouter, Link, Routes } from 'react-router-dom';
import login from "./App";


const MainMenu = () => {
    return (<>
        <View style={styles.mainView}>
                <View style={styles.basicview}>
                    <Text>DayEasy</Text>
                </View>
                <BrowserRouter>
                    <Routes>
                        <Route path="Calendar"></Route>
                    </Routes>
                </BrowserRouter>
                <ul> 
                    <li style={styles.btnLeft}>
                        <Link to="/Calendar">Calendar</Link>
                         {/* <Image src="Calendar.png" className="CalendarIcon" />  this is where logo will go*/}                    
                    </li>
                    <li style={styles.btnRight}>
                        <Link to="/WorkoutPlan">WorkoutPlan</Link>
                    </li>
                    <li style={styles.btnLeft}>
                        <Link to="/MuscleWiki">MuscleWiki</Link>
                    </li>
                    <li style={styles.btnRight}>
                        <Link to="/WorkoutPlan">WorkoutPlan</Link>
                    </li>
                    <li style={styles.btnLeft}>
                        <Link to="/MealPlan">Meal Plan</Link>
                    </li>
                    <li style={styles.btnRight}>
                        <Link to="/WorkoutPlan">WorkoutPlan</Link>
                    </li>
                    <li style={styles.btnLeft}>
                        <Link to="/Calendar">Calendar</Link>
                    </li>
                    <li style={styles.btnRight}>
                        <Link to="/WorkoutPlan">WorkoutPlan</Link>
                    </li>
                </ul>
            </View>
    </>);
};

const styles = StyleSheet.create({
   mainView: {
           flex: 1,
           paddingTop: 50,
           backgroundColor: '#81B29A',
           alignItems: 'center', //center x axis
           justifyContent: 'center', //center y axis
       },
    basicview: {
           backgroundColor: '#3D405B',
           width: '100%',
           marginBottom: 5
       },
    basicText: {
           fontSize: 20,
           color: '#F4F1DE',
           textAlign: 'center',
           padding: 20
       },
    btnLeft:{
        float: left
    },
    btnRight: {
        float: left
    }
});

export default App;