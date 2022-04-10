/*
import React from 'react';
import { Animated, View } from 'react-native';
import{ useSafeAreaInsets} from 'react-native-safe-area-context';

import Logo from '../assests/icon.png';
const BGcolor = "#81B29A"
export default function SplashScreen(){

    const edges = useSafeAreaInsets();
    return{
        <><KeyboardAvoidingView style={styles.containerView} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: BGColor,
        } >
        <Animated.View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent:'center'
        }}>
            <Image source={Logo}></Image>
        </Animated.View>
        
        
        </View>
              </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    };
}