import React from 'react';
import { Text, View, StyleSheet,Image ,TextInput ,Button , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Pass = () =>  {

    const navigation = useNavigation();

    const handleprevious = () =>{
        navigateTosignupScreen(navigation)
    }

    const navigateTosignupScreen  = (navigate) =>{
        navigate.navigate('Sign')
    }

const handlenextscreen = () => {
    navigateToconfirmScreen(navigation)
}

const navigateToconfirmScreen = (navigate) => {
    navigate.navigate('Confirm')
}
 
    return (
      <View style={styles.container}>
       <View style ={{paddingTop:25}}/>
        <Image source={require('./Assets/icon.png')}  style ={styles.image}/>

<View style ={{paddingTop:5}}/>
        <Text style ={styles.title}>
            MoBanK</Text>

            <Text style ={styles.text}>Need help with your password?</Text>
            <View style ={{paddingTop:25}}/>

            <Text style = {styles.katext}>Enter the email you use for MoBanK,
             and we'll help you </Text>

             <Text style = {styles.katexti}>create a new password.</Text>

             <View style ={{paddingTop:25}}/>

<TextInput placeholder='Email address or username....' placeholderTextColor={'black'} style ={{borderWidth:1,borderColor:'black',width:'95%',marginLeft:10,color:'black'}}/>
<View style ={{paddingTop:25}}/>

 <View style ={{width:'68%',marginLeft: 'auto',
    marginRight: 'auto',}}>
    <Button title ="NEXT" onPress={handlenextscreen}/>
 </View>

 <TouchableOpacity onPress={handleprevious}> 
  <Text style = {styles.pass}>Return to previous page?</Text>
  </TouchableOpacity>
      </View>
    );
  }


export default Pass;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex:1,
  },
  image:{
    height:50,
    width:50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text:{
    color:'black',
    fontSize:20,
    textAlign:'center',
    fontWeight:'700'
  },
title:
  {
    color:'black',
    fontSize:25,
    fontWeight:'900'
    ,textAlign:'center'
},

katext:{
    color:'black',
    fontSize:15.5,
    
},

katexti:{
    color:'black',
    textAlign:'center',
    fontSize:17,
},
pass:{
    color:'blue',
    fontSize:17,
    textAlign:'center',
    fontWeight:'bold',
    paddingTop:10
  }
});