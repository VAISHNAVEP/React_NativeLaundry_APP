import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import style from './style';

const Notification = () => {
  const [selectedOption, setSelectedOption] = useState('Option1');

  const handleOptionChange = value => {
    setSelectedOption(value);
  };

  return (
    <View>
      <Text style={style.text}>Notifications</Text>
      <Text style={style.desc}>Select your notification preference</Text>

      <RadioButton.Group
        onValueChange={handleOptionChange}
        value={selectedOption}>
        <View style={style.optionContainer}>
          <RadioButton.Item
            label="Notify me on every process"
            value="Option1"
            uncheckedColor="grey"
            color="green"
            labelStyle={{textDecorationLine: 'underline'}}
            size={100}
          />
        </View>

        <View style={style.optionContainer}>
          <RadioButton.Item
            label="Notify me only at the time of delivery"
            value="Option2"
            uncheckedColor="grey"
            color="green"
            labelStyle={{textDecorationLine: 'underline'}}
            size={100}
          />
        </View>

        <View style={style.optionContainer}>
          <RadioButton.Item
            label="All Notification"
            value="Option3"
            uncheckedColor="grey"
            color="green"
            labelStyle={{textDecorationLine: 'underline'}}
            size={100}
          />
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default Notification;
