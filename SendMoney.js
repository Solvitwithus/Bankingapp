import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Alert } from 'react-native';

export default class SendMoney extends Component {
  state = {
    phoneNumber: '',
    amount: '',
  };

  handleSendMoney = () => {
    const { phoneNumber, amount } = this.state;

   
    Alert.alert(
      'Confirm Transaction',
      `Send ${amount} to ${phoneNumber}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Send',
          onPress: () => {
            
            this.sendMoney();
          },
        },
      ],
      { cancelable: false }
    );
  };

  sendMoney = () => {
    const { phoneNumber, amount } = this.state;

    setTimeout(() => {
      Alert.alert('Success', `Money successfully sent: ${amount} to ${phoneNumber}`);

     
      this.setState({
        phoneNumber: '',
        amount: '',
      });
    }, 2000);
  };

  render() {
    const { phoneNumber, amount } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter Phone Number</Text>
        <TextInput
          placeholder="Enter phone +254 7.."
          style={styles.input}
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={(text) => this.setState({ phoneNumber: text })}
        />

        <Text style={styles.title}>Enter Amount</Text>
        <TextInput
          placeholder="Enter amount"
          style={styles.input}
          keyboardType="numeric"
          value={amount}
          onChangeText={(text) => this.setState({ amount: text })}
        />

        <Button title="Send" onPress={this.handleSendMoney} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gainsboro',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});