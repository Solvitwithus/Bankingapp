import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function MainScreen() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [showBalance, setShowBalance] = useState(true);

  
  const navigation = useNavigation();

  const handleDeposit = () => {
    const depositAmount = parseFloat(amount);
    if (depositAmount) {
      setBalance(balance + depositAmount);
      setAmount('');
      const deposit = {
        type: 'Deposit',
        amount: depositAmount,
        date: new Date().toLocaleString(),
      };
      setTransactionHistory([...transactionHistory, deposit]);
      Alert.alert('Deposit Successful', `You have deposited ${depositAmount} KES`);
    }
  };

  const handleWithdrawal = () => {
    const withdrawalAmount = parseFloat(amount);
    if (withdrawalAmount && withdrawalAmount <= balance) {
      setBalance(balance - withdrawalAmount);
      setAmount('');
      const withdrawal = {
        type: 'Withdrawal',
        amount: withdrawalAmount,
        date: new Date().toLocaleString(),
      };
      setTransactionHistory([...transactionHistory, withdrawal]);
      Alert.alert('Withdrawal Successful', `You have withdrawn ${withdrawalAmount} KES`);
    }
  };

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const handlesendmoney = () => {
    navigateToSendMoneyScreen(navigation);
  };

  const navigateToSendMoneyScreen = (navigation) => {
    navigation.navigate('SendMoney');
  };


const handlesavingsaccount = () =>{
    navigateToSavingsScreen(navigation)
};

const navigateToSavingsScreen =(navigation) =>{
    navigation.navigate('Savings');
}

const handlecurrency = () =>{
    navigateToCurrencyconversionScreen(navigation)
};
const navigateToCurrencyconversionScreen =(navigation) =>{
    navigation.navigate('Currency');
};



  const handleGenerateStatement = () => {
    let statement = 'Transaction History:\n';
    for (const transaction of transactionHistory) {
      statement += `${transaction.type}: ${transaction.amount} KES (${transaction.date})\n`;
    }
    Alert.alert('Statement', statement);
  };

  const handlepopup = () => {
    Alert.alert('Kindly:','Refer to the terms of use and privacy policy!', [{ text: 'OK' }])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>MY ACCOUNT</Text>
      <Text style={styles.title}>Banking App</Text>

      {showBalance && <Text style={styles.balance}>Account Balance: {balance} KES</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter amount"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />

        <View style={styles.buttonContainer}>
          <Button title="Deposit" onPress={handleDeposit} />
          <Button title="Withdraw" onPress={handleWithdrawal} />
        </View>
      </View>

      <View style={styles.separator} />
      <Text style={styles.sectionTitle}>OTHER SECTIONS</Text>
      <View style={{ width: '90%' }}>
        
        <Button title="SEND MONEY" onPress={handlesendmoney}/>
        <View style={{ paddingBottom: 5 }} />
        <Button title="SAVINGS ACCOUNT" onPress={handlesavingsaccount}/>
        <View style={{ paddingBottom: 5 }} />
        <Button title="cURRENCY CONVERSION" onPress={handlecurrency}/>
        <View style={{ paddingBottom: 5 }} />
        <Button title="GENERATE STATEMENT" onPress={handleGenerateStatement} />
        
        <View style={{ paddingBottom: 5 }} />
       
        <Button title="HELP" onPress={handlepopup}/>
      </View>

      <View style={styles.separator} />
      <Button title={showBalance ? "Hide Balance" : "Show Balance"} onPress={toggleBalance} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#383a3a',
    paddingVertical: 20,
  },
  sectionTitle: {
    color: '#FFF689',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  balance: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginBottom: 10,
    width: '95%',
    padding: 5,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});