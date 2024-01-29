import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import style from './style';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  return (
    <View style={style.main}>
      <View style={style.container}>
        <Text style={style.text}>Laundry.io</Text>
      </View>
    </View>
  );
};

export default Splash;
