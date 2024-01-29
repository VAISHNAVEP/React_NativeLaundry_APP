import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import style from './style';
import RazorpayCheckout from 'react-native-razorpay';
const RazorPay = () => {
  const [selectedOption, setSelectedOption] = useState('Option1');

  const handleOptionChange = value => {
    setSelectedOption(value);
  };
  const key_id = 'rzp_test_g4AQDry3kiOG7o';
  const key_secret = '1O2SC9NGkQV0fqkqdOObgwqC';

  const amount = 1000;
  const currency = 'INR';

  const handlePayment = () => {
    var options = {
      description: 'iam buying a rollsroyce car',
      currency: currency,
      key: key_id,
      amount: amount * 100,
      name: 'Acme Corp',
      order_id: '',
      prefill: {
        email: 'vaishnavclt78@gmail.com',
        contact: '7736949557',
        name: 'vaishnav',
      },
      theme: {color: '#53a20e'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };


  return (
    <View>
      <Text style={style.text}>Saved Cards</Text>
      <Text style={style.desc}>Choose your default payment card.</Text>

      <RadioButton.Group
        onValueChange={handleOptionChange}
        value={selectedOption}>
        <View style={style.optionContainer}>
          <RadioButton.Item
            label="Axis bank credit card"
            value="Option1"
            uncheckedColor="grey"
            color="green"
            labelStyle={{textDecorationLine: 'underline'}}
            size={100}
          />
        </View>

        <View style={style.optionContainer}>
          <RadioButton.Item
            label="Indian Bank Master card"
            value="Option2"
            uncheckedColor="grey"
            color="green"
            labelStyle={{textDecorationLine: 'underline'}}
            size={100}
          />
        </View>
      </RadioButton.Group>

      <TouchableOpacity style={style.touch}>
        <Text style={style.touchText}>+ Add New Card</Text>
      </TouchableOpacity>
      <View style={style.payview}>
      <Text onPress={handlePayment} style={style.pay}>
        Pay Now
      </Text>
      </View>
    </View>
  );
};

export default RazorPay;
