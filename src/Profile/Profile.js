import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './style';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation=useNavigation();
  return (
    <View>
      <View>
        <Image style={style.img} source={require('../images/profile.jpg')} />
        <Text style={style.name}>Philip Mathis</Text>
        <Text style={style.details}>483-930-7078</Text>
        <Text style={style.details}>015 Rolfson Inlet Apt.700,Lake Linda,</Text>
        <Text style={style.details}>Saint Helena</Text>
      </View>
      <Text onPress={()=>navigation.navigate('profileview')} style={style.pay}>
        View Profile
      </Text>
    </View>
  );
};

export default Profile;

