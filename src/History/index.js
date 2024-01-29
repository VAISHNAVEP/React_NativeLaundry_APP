import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import style from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../Common/colors';
import SwitchButton from '../Common/SwitchButton/SwitchButton';

const History = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <Text style={style.head}>History</Text>
        <Entypo name="bell" size={40} style={style.icon} />
      </View>
      <View>
        <Text style={style.desc}>
          Donec sed odio dui. Fusce dapibus, tellus ac cursos commodo, tortor
          mauris condimentum
        </Text>
        <SwitchButton />
        <View style={style.totalContainer}>
          <Text style={style.totalletter}>12th June 2018,09:30 AM</Text>
        </View>
        <View style={style.totalContainer}>
          <Text style={[style.total, {color: 'black', fontWeight: '800'}]}>
            10 Quantity
          </Text>
          <Text style={[style.number, {color: 'red'}]}>Yet to pickup</Text>
        </View>
        <View style={style.totalContainer}>
          <Text style={style.totalletter}>24th May 2018,05:00 PM</Text>
        </View>
        <View style={style.totalContainer}>
          <Text style={[style.total, {color: 'black', fontWeight: '800'}]}>
            4 Quantity
          </Text>
          <Text style={[style.number, {color: 'gray'}]}>3rd Ironing</Text>
        </View>
        <View style={style.totalContainer}>
          <Text style={style.totalletter}>11th Jan 2018,03:30 PM</Text>
        </View>
        <View style={style.totalContainer}>
          <Text style={[style.total, {color: 'black', fontWeight: '800'}]}>
            4 Quantity
          </Text>
          <Text style={style.number}>Completed</Text>
        </View>
        <View style={style.totalContainer}>
          <Text style={style.totalletter}>11th Jan 2018,03:30 PM</Text>
        </View>
        <View style={style.totalContainer}>
          <Text style={[style.total, {color: 'black', fontWeight: '800'}]}>
            4 Quantity
          </Text>
          <Text style={style.number}>Delivered</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default History;
