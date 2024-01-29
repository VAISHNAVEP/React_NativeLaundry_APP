import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './style';
import { useNavigation } from '@react-navigation/native';

const BookingConfirmed = () => {
  const navigation=useNavigation()
  return (
    <View>
      <View>
        <Image style={style.img} source={require('../images/yes.png')} />
        <Text style={style.head}>Booking Confirmed</Text>
        <Text style={style.desc}>
          Nulla vitae elit libero,a pharetra augue.Donec id elit non mi porta
          gravida at eget metus.Donec Ullamcorper nulla non metus auctor
          fringillaF
        </Text>
        <Text style={style.close} onPress={()=>navigation.goBack()}>Close</Text>
      </View>
    </View>
  );
};

export default BookingConfirmed;
