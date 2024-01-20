import React, { Component } from 'react';
import { View, Text, Button,TextInput, StyleSheet,ImageBackground ,TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';
const Login =() => {

  
  const handleButtonPress = () => {
    navigateTofmainScreen(navigation)
   
  };
const  navigateTofmainScreen = (navigate) =>{
  navigation.navigate('MainScreen');
}

  const navigation = useNavigation();

  const handleforgotpasswordi = () => {
    navigateToforgotpassScreen(navigation);
  }

  const navigateToforgotpassScreen = (navigate) => {
    navigate.navigate('Password')
  }
 
    return (
      <View style ={{flex:1}}>
        <ImageBackground style ={{flex:1,justifyContent:'center'}} 
       
       source={require('./Assets/back.jpg')}> 
       
       
        <Text style={styles.title}>Welcome Back</Text>

        <View style={{paddingBottom:30}}/>

<TextInput placeholder="Enter email..." style ={styles.input}/>
<View style={{paddingBottom:30}}/>
<TextInput placeholder="Enter password..." style ={styles.input}/>
<View style={{paddingBottom:15}}/>
<Text style={{color:'silver',textAlign:'center'}}>Kindly input a strong password!</Text>
<View style={{paddingBottom:15}}/>
<Text style={{color:'black',textAlign:'center'}}>MoBank: Banking on the go, simplified for you</Text>
<View style={{paddingBottom:30}}/>

<View style={{ marginHorizontal: 30,backgroundColor:'red' }}>
  <Button title="Sign In" onPress={handleButtonPress} />
</View>
        

<TouchableOpacity onPress={handleforgotpasswordi}> 
  <Text style = {styles.pass}>Forgot password?</Text>
  </TouchableOpacity>

        </ImageBackground>
       
      </View>
    );
  }



export default  Login

const styles = StyleSheet.create({
  input: {
    borderWidth:2,
    borderRadius:12,
    marginLeft:15,
    marginRight:15,
    borderColor:'white'
  },
  title:
  {
    color:'silver',
    textAlign:'center',
    fontStyle:'italic',
    fontSize:30,
    color:'black',
    textDecorationLine:'underline'},
    pass:{
      color:'blue',
      fontSize:17,
      textAlign:'center',
      fontWeight:'bold',
      paddingTop:10
    }
});