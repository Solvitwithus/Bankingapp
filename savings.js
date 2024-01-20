import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const HideShowButton = ({ onPress, showBalance }) => {
  const buttonIcon = showBalance ? 'visibility-off' : 'visibility';

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <MaterialIcons name={buttonIcon} size={24} color="black" />
    </TouchableOpacity>
  );
};

export default class Savings extends Component {
  state = {
    balance: 0,
    showBalance: true,
    textInputValue: '',
  };

  handleDeposit = () => {
    const { balance, textInputValue } = this.state;
    const depositAmount = parseFloat(textInputValue);

    if (!isNaN(depositAmount) && depositAmount > 0) {
      this.setState((prevState) => ({
        balance: prevState.balance + depositAmount,
        textInputValue: '',
      }));
    }
  };

  handleWithdrawal = () => {
    const { balance, textInputValue } = this.state;
    const withdrawalAmount = parseFloat(textInputValue);

    if (!isNaN(withdrawalAmount) && withdrawalAmount > 0 && balance >= withdrawalAmount) {
      this.setState((prevState) => ({
        balance: prevState.balance - withdrawalAmount,
        textInputValue: '',
      }));
    }
  };

  toggleBalanceVisibility = () => {
    this.setState((prevState) => ({
      showBalance: !prevState.showBalance,
    }));
  };

  handleTextInputChange = (value) => {
    this.setState({
      textInputValue: value,
    });
  };

  render() {
    const { balance, showBalance, textInputValue } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Savings Account</Text>
        <View style={{ paddingBottom: 10 }} />
        <Text style={styles.sub}>
          <Text style={{ color: 'black' }}>"</Text>Every penny saved is a step closer to financial independence and the
          ability to live life on your terms.<Text style={{ color: 'black' }}>"</Text>
        </Text>

        <TextInput
          placeholder="Enter amount....."
          keyboardType="numeric"
          style={styles.input}
          placeholderTextColor="black"
          value={textInputValue}
          onChangeText={this.handleTextInputChange}
        />

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button} onPress={this.handleDeposit}>
            <Text style={styles.buttonText}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.handleWithdrawal}>
            <Text style={styles.buttonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Account Balance:</Text>
          {showBalance ? (
            <Text style={styles.balanceAmount}>{balance} KES</Text>
          ) : (
            <HideShowButton onPress={this.toggleBalanceVisibility} showBalance={showBalance} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'gainsboro',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sub: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  balanceTitle: {
    fontSize: 20,
    marginRight: 10,
    color: 'black',
  },
  balanceAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }});

  