import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import style from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../Common/colors';
import SwitchButton from '../Common/SwitchButton/SwitchButton';

const HistoryInProgress = () => {
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
          <Text style={style.totalletter}>11th Jan 2018,03:30 PM</Text>
        </View>
        <View style={style.totalContainer}>
          <Text style={[style.total, {color: 'black', fontWeight: '800'}]}>
            3 Quantity
          </Text>
          <Text style={style.number}>Delivered</Text>
        </View>
        <View style={style.totalContainer}>
          <Text style={style.total}>
            Total<Text style={style.totalamount}> ₹1500</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HistoryInProgress;
