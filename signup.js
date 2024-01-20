import React, { useState } from 'react';
import { ImageBackground, Text, View, StyleSheet, TextInput, Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Sign = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');

  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  const handleforgotpassword = () => {
    navigateToforgotpassScreen(navigation);
  }

  const navigateToforgotpassScreen = (navigate) => {
    navigate.navigate('Pass')
  }

  const handleMainButtonPress = () => {
    navigateToMainScreen(navigation)
    
  };
  const navigateToMainScreen =(navigate)=>{
    navigation.navigate('MainScreen');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./Assets/back.jpg')}
        style={styles.imageBackground}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.line}></Text>
          <Text style={styles.title}>Welcome to MoBank</Text>
          <Text style={styles.line}>{'\n'}</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.line}></Text>
          <Text style={styles.subtitle}>Input your email</Text>
          <Text style={styles.line}></Text>
        </View>

        <TextInput
          style={[styles.input, styles.inputSpacing]}
          placeholder="Enter email..."
          onChangeText={handleEmailChange}
          value={email}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.line}></Text>
          <Text style={styles.subtitle}>Input your password</Text>
          <Text style={styles.line}></Text>
        </View>

        <TextInput
          style={[styles.input, styles.inputSpacing]}
          placeholder="Enter password..."
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry
        />

        <View style={styles.titleContainer}>
          <Text style={styles.line}></Text>
          <Text style={styles.subtitle}>Input your username</Text>
          <Text style={styles.line}></Text>
        </View>

        <TextInput
          style={[styles.input, styles.inputSpacing]}
          placeholder="Enter username..."
          onChangeText={handleUsernameChange}
          value={username}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.line}></Text>
          <Text style={styles.subtitle}>Input your location</Text>
          <Text style={styles.line}></Text>
        </View>

        <TextInput
          style={[styles.input, styles.inputSpacing]}
          placeholder="Enter location..."
          onChangeText={handleLocationChange}
          value={location}
        />

        <Button title="Sign up" onPress={handleMainButtonPress} />
<TouchableOpacity onPress={handleforgotpassword}> 
  <Text style = {styles.pass}>Forgot password?</Text>
  </TouchableOpacity>
        
      </ImageBackground>
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'CustomFont',
    fontSize: 25,
    textAlign: 'center',
    color: 'gold',
  },
  subtitle: {
    fontFamily: 'CustomFont',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 3,
    backgroundColor: 'black',
    marginHorizontal: 9,
  },

  inputSpacing: {
    marginTop: 8,
  },
  pass:{
    color:'blue',
    fontSize:17,
    textAlign:'center',
    fontWeight:'bold',
    paddingTop:10
  }
});