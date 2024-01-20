import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Currency = () => {
  const [currency, setCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const cancelTimer = useRef(null);

  const handleConvert = () => {
    if (currency && amount) {
      Alert.alert(
        'Confirmation',
        `Press "Continue" to convert ${amount} KES to ${currency} or "Cancel" to cancel.`,
        [
          { text: 'Continue', onPress: handleContinue },
          { text: 'Cancel', style: 'cancel' },
        ],
        { cancelable: true, onDismiss: handleCancel }
      );
    } else {
      Alert.alert('Error', 'Please enter both the currency and amount.');
    }
  };

  const handleCancel = () => {
    clearTimeout(cancelTimer.current);
    Alert.alert('Conversion Canceled', `Amount: ${amount} KES\nCurrency: ${currency}`);
  };

  const handleContinue = () => {
    clearTimeout(cancelTimer.current);
    const convertedAmount = convertCurrency(currency, amount);
    cancelTimer.current = setTimeout(() => {
      Alert.alert(
        'Conversion Result',
        `Amount: ${amount} KES\nCurrency: ${currency}\n\nConverted Amount: ${convertedAmount}`,
        [
          {
            text: 'OK',
            onPress: () => {
              setCurrency('');
              setAmount('');
            },
          },
        ]
      );
    }, 5000);
  };
  
    const convertCurrency = (currency, amount) => {
      switch (currency.toUpperCase()) {
        case 'USD':
          return (amount / 153.8).toFixed(2);
        case 'YEN':
          return (amount / 1.07).toFixed(2);
        case 'EURO':
          return (amount / 168.63).toFixed(2);
        case 'LIRA':
          return (amount / 2.37).toFixed(2);
          case 'CAD':
          return (amount / 112.80).toFixed(2);
        default:
          return 'Invalid currency';
      }
    };


  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        data: [10.7, 2.34, 1.64, 1.44, 1.30,3.64,2.34,1.23,2.54,1.98,1.06,1.07],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: [14.23, 7.56, 3.91, 22.87, 19.34, 10.02, 25.00, 5.12, 17.79, 11.45, 8.67, 2.37],
        color: (opacity = 1) => `rgba(255, 233, 0, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: [66.73, 96.49, 57.20, 104.91, 127.88, 51.35, 84.96, 119.16, 45.27, 78.42, 61.14, 112.80],
        color: (opacity = 1) => 'purple',
        strokeWidth: 1,
      },
      {
        data: [135, 136.54, 135.34, 134.94, 136.30,132.64,130.34,131.23,131.54,130.38,163.42,168.63],
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
        strokeWidth: 2,
      },
      {
        data: [120, 123, 127.34, 128.94, 129.30,130.64,131.34,132.23,138.54,140.98,149.43,153.80],
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={410}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
      <View style={{borderWidth:1,width:'90%'}}/>
      <Text style ={{color:'black',textDecorationLine:'underline'}}>KEY</Text>
      <Text style = {styles.text}>GREEN:EURO        BLUE:USD</Text>
      <Text style = {styles.text}>PURPLE:LIRA        RED:YEN</Text>
      <Text style = {styles.text}>YELLOW:CAD</Text>


      <View style={{borderWidth:1,width:'90%'}}/>

      <View style ={{marginBottom:12}}/>
<TextInput
 placeholder='Enter the currency' 
 placeholderTextColor={'black'}
value={currency}
onChangeText={setCurrency}
style ={styles.input}/>
<View style ={{marginBottom:12,marginTop:10}}/>
<TextInput placeholder='Enter Amount' placeholderTextColor={'black'} keyboardType='numeric' 
value={amount}
onChangeText={setAmount}
style ={styles.input}/>
<View style={styles.button}>
<Button title ='Convert' onPress={handleConvert}/>
</View>
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  text:{
    color:'black'
  },
  input:{
    borderWidth:1,
    borderColor:'black',
    width:'90%',
    color:'black'
  },
  button:{
    width:'87%',
    marginTop:10
  }

});

export default Currency;