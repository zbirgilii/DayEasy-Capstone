import {StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native';


export default function WorkoutSelect() { 
//<Image source='./assests/muscleIcons/shoulersIcon.jpg' width={250} height={250}></Image>
  return (
    <>
      <View style={styles.mainView}>        
        <View style={styles.basicView}>               
          
          <Text style={styles.PageTitle}>Chest Fun Fact:</Text>
        </View>
        <Text style={styles.basicText}>The thorax or chest is a part of the anatomy of humans and various other animals located between the neck and the abdomen.</Text>       
                
                 
      </View></>
       
  )}

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        //paddingTop:50,
        backgroundColor: '#81B29A',
        alignItems:'center', //center x axis
        //justifyContent:'center', //center y axis
      },
      basicView:{
        backgroundColor:'#3D405B',
        width:'100%',
        marginBottom:5
      },
      basicText:{
        fontSize:40,
        //color:'#F4F1DE',
        textAlign:'center',
        padding:20
      },
      PageTitle:{
        fontSize: 40,
        color: 'white',
        paddingTop: 50,
        paddingBottom: 10,
        fontWeight: '400',
        textAlign:'center',
        alignItems:'center' //center x axis
        //justifyContent:'flex-start' //center y axis
    
      },
      iconStyle: {
        height: '200',
        width: '200',
      },
      buttonText:{
        fontSize: 40,
        fontWeight: "700",
        marginTop: 10,
        marginBottom: 10,
        //borderColor: 'black',
        //textShadowColor: 'red',
        color: 'white'
      },
      buttonStyle:{
        textAlign:'center',
        alignItems:'center',
        borderRadius: 1000,
        borderWidth: 1,
        width: '70%',
        //marginBottom: 10,
        //padding: '100, 7px 10px 7px',
        //paddingRight: '50%',
        //paddingLeft: 70,
        //flex: 1,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 5,
        backgroundColor:'#3D405B',
        color: 'white'
      }
})