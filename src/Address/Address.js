import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';
import style from './style';

const Address = () => {
  const [selectedOption, setSelectedOption] = useState('Option1');

  const handleOptionChange = value => {
    setSelectedOption(value);
  };

  return (
    <View>
      <Text style={style.text}>Address</Text>
      <Text style={style.desc}>Choose your default pickup address</Text>

      <RadioButton.Group
        onValueChange={handleOptionChange}
        value={selectedOption}>
        <View style={style.optionContainer}>
          <Text style={style.home}>Home</Text>
          <RadioButton.Item
            label="015 Rolfson Inlet Apt.700, Lake Linda, Saint Helena"
            value="Option1"
            uncheckedColor="grey"
            color="green"
            labelStyle={{textDecorationLine: 'underline'}}
            size={100}
          />
        </View>

        <View style={style.optionContainer}>
          <Text style={style.home}>Azar Apartment</Text>
          <RadioButton.Item
            label="015 Rolfson Inlet Apt.700, Lake Linda, Saint Helena"
            value="Option2"
            uncheckedColor="grey"
            color="green"
            labelStyle={{textDecorationLine: 'underline'}}
            size={100}
          />
        </View>

        <View style={style.optionContainer}>
          <Text style={style.home}>Azar Apartment</Text>
          <RadioButton.Item
            label="015 Rolfson Inlet Apt.700, Lake Linda, Saint Helena"
            value="Option3"
            uncheckedColor="grey"
            color="green"
            labelStyle={{textDecorationLine: 'underline'}}
            size={100}
          />
        </View>
      </RadioButton.Group>

      <Text style={style.content}>Inlet Apt.700, Lake Linda, Saint</Text>

      <View style={style.imageContainer}>
        <Image
          style={style.editimg}
          source={require('../images/edit-green.png')}
        />
        <Image
          style={style.deleteimg}
          source={require('../images/delete.png')}
        />
      </View>
      <TouchableOpacity style={style.touch}>
        <Text style={style.address}>+ Add New Address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Address;
