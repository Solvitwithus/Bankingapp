import React,  { useState } from 'react';
import { Text, View ,Image ,StyleSheet ,TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const  Confirm = () => {
    const navigation = useNavigation();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSave = () => {
        // Perform save logic here
    
        // Clear input fields
        setPassword('');
        setConfirmPassword('');
      };

const handlemain = () => {
    navigateTosignupScreen(navigation)
};

const  navigateTosignupScreen = (navigate) =>{
    navigate.navigate('Login')
}
 
        return(
            <View style={styles.container}>
       <View style ={{paddingTop:25}}/>
        <Image source={require('./Assets/icon.png')}  style ={styles.image}/>
        <Text style ={styles.title}>
            MoBanK</Text>
            <Text style ={styles.text}>Create a Password</Text>
            <View style = {{marginTop:10}}/>
            
            <Text style={styles.sub}>Choose a password that's hard to guess and unique to </Text>
            
            <Text  style={styles.subi}>this account.</Text>
            <View style = {{marginTop:10}}/>


            <TextInput placeholder='Create password' placeholderTextColor={'black'}
             style ={styles.input}  
             value={password}
             onChangeText={setPassword}
             />

<View style = {{marginTop:10}}/>


<TextInput placeholder='Confirm password' placeholderTextColor={'black'}
 style ={styles.input}
 value={confirmPassword}
        onChangeText={setConfirmPassword}
        />

<View style = {{marginTop:10}}/>

<View style = {styles.button}>
    <Button title='SAVE' onPress={handlemain}/>
</View>
            
            </View>
        )
    }


export default  Confirm


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
      title:
  {
    color:'black',
    fontSize:25,
    fontWeight:'900'
    ,textAlign:'center'
},
text:{
    color:'black',
    textAlign:'center',
    fontSize:19,
    letterSpacing:2,
    fontWeight:'600'
},
sub:{
    color:'black',
    textAlign:"center",
    fontSize:16
},
subi:{
    color:'black',
    textAlign:"center",
    fontSize:16,
},

input:{
    borderWidth:1,
    width:'90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius:5,
    color: 'black',
},
button:{
    width:'85%',
    marginLeft: 'auto',
    marginRight: 'auto',
}
})