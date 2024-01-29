import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import style from './style';
import VerticalStepIndicator from '../Common/VerticalStepIndicator/VerticalStepIndicator';

const OrderIdCancelBooking = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={style.order}>Order ID</Text>
      <Text style={style.id}>#LNDRY000124356</Text>
      <View style={style.totalContainer}>
        <Text style={style.totalletter}>Total</Text>
        <Text style={style.numberone}>₹000</Text>
      </View>
      <Text style={style.desc}>
        Total will be declared at the time of pickup
      </Text>
      <View>
        <Text style={style.status}>Status</Text>
        <VerticalStepIndicator indicatorColor="#CCCCCC" />
      </View>
      <View>
        <Text style={style.delivery}>Delivered To</Text>
        <Text style={style.text}>
          238 allahabad street, sanitorium, Chennai
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={style.touch}>
            <Text style={style.touchtext}>Cancel Booking</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderIdCancelBooking;
