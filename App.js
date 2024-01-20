import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login';
import Sign from './signup';
import Policy from './policy';
import Terms from './terms';

import SendMoney from './SendMoney';
import Savings from './savings';
import Currency from './Currencyconversion';
import Pass from './forgotpass';
import Confirm from './confirm';
import Password from './loginpass';

import MainScreen from './main';


const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Sign" component={Sign} options={{ headerShown: false }} />
          <Stack.Screen name="Policy" component={Policy} options={{ headerShown: false }} />
          <Stack.Screen name="Terms" component={Terms} options={{ headerShown: false }} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="SendMoney" component={SendMoney} />
          <Stack.Screen name="Savings" component={Savings} />
          <Stack.Screen name="Currency" component={Currency} />
          <Stack.Screen name="Pass" component={Pass} />
          <Stack.Screen name="Confirm" component={Confirm} />
          <Stack.Screen name="Password" component={Password} />
         
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function HomeScreen() {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignupPress = () => {
    navigation.navigate('Sign');
  };

  const handlePoliciesPress = () => {
    navigation.navigate('Policy');
  };

  const handleTermsPress = () => {
    navigation.navigate('Terms');
  };

  return (
    <View style={styles.main}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <Text style={{ color: 'blue' }}>!</Text> Banking Redefined <Text style={{ color: 'blue' }}>!</Text>
        </Text>
      </View>

      {/* Button Container */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="LOG IN" color="#4169E1" onPress={handleLoginPress} />
          <View style={styles.buttonSpacing} />
          <Button title="SIGN UP" color="#008000" onPress={handleSignupPress} />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Mo<Text style={styles.footerHighlight}>B<Text style={styles.footerText}>ank</Text></Text>
        </Text>
        <View style={styles.footerSpacing} />
        <Text style={styles.footerDescription}>Banking on-the-go, simplified for you</Text>
        <View style={styles.footerSpacing} />
        <View style={styles.footerLinks}>
          <TouchableOpacity onPress={handleTermsPress}>
            <Text style={styles.footerLinkText}>Terms of Use</Text>
          </TouchableOpacity>
          <Text style={styles.footerLinkSeparator}> | </Text>
          <TouchableOpacity onPress={handlePoliciesPress}>
            <Text style={styles.footerLinkText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main container
  main: {
    flex: 1,
    backgroundColor: '#383a3a',
  },

  // Header styles
  header: {
    height: 40,
    backgroundColor: 'darkblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  // Button container styles
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '20%',
  },
  buttonWrapper: {
    width: 350,
    justifyContent: 'center',
  },
  buttonSpacing: {
    marginVertical: 10,
  },

  // Footer styles
  footer: {
    flex: 0.14,
    alignItems: 'center',
  },
  footerText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  footerHighlight: {
    color: '#FF0000',
  },
  footerDescription: {
    letterSpacing: 2,
    color: 'lightblue',
  },
  footerSpacing: {
    marginVertical: 2,
  },
  footerLinks: {
    flexDirection: 'row',
  },
  footerLinkText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  footerLinkSeparator: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});