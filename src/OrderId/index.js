import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import style from './style';
import colors from '../Common/colors';
import VerticalStepIndicator from '../Common/VerticalStepIndicator/VerticalStepIndicator';

const OrderId = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={style.order}>Order ID</Text>
      <Text style={style.id}>#LNDRY000124356</Text>
      <View style={style.totalContainer}>
        <Text style={style.totalletter}>Total</Text>
        <Text style={[style.number, {color: colors.primarygreen}]}>₹800</Text>
      </View>
      <View style={style.totalContainer}>
        <Text style={style.total}>Cotton</Text>
        <Text style={[style.nos, style.alignText]}>5nos</Text>
        <Text style={style.number}>₹200</Text>
      </View>
      <View style={style.totalContainer}>
        <Text style={style.total}>Lenin</Text>
        <Text style={[style.nos, style.alignText, {marginLeft: 9}]}>3nos</Text>
        <Text style={style.number}>₹200</Text>
      </View>
      <View style={style.totalContainer}>
        <Text style={style.total}>Polister</Text>
        <Text style={[style.nos, style.alignText]}>8nos</Text>
        <Text style={style.number}>₹200</Text>
      </View>
      <View>
        <Text style={style.status}>Status</Text>
        <VerticalStepIndicator />
      </View>
      <View>
        <Text style={style.delivery}>Delivered To</Text>
        <Text style={style.text}>
          238 allahabad street, sanitorium, Chennai.
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={style.touch}>
            <Text style={style.touchtext}>Mail Invoice</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderId;
