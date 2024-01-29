import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../Common/colors';

const ProfileView = () => {
  return (
    <ScrollView>
      <View style={style.container}>
        <Image style={style.img} source={require('../images/profile.jpg')} />
        <View style={style.textContainer}>
          <View style={style.header}>
            <Text style={style.name}>Philip Mathis</Text>
            <Entypo name="bell" size={35} style={style.bellIcon} />
          </View>
          <Text style={style.viewProfile}>View Profile</Text>
        </View>
      </View>
      <View style={style.totalContainer}>
        <Text style={[style.totalletter, {fontSize: 15}]}>Phone Number</Text>
        <Text style={[style.number, {color: 'black'}]}>483-930-7078</Text>
      </View>
      <View style={style.totalContainer}>
        <Text style={[style.total, {color: 'black'}]}>Address</Text>
        <Text
          style={[style.number, {color: colors.primarygreen, fontSize: 18}]}>
          015 Rolfson Inlet Apt. 700....
        </Text>
      </View>
      <View style={style.totalContainer}>
        <Text style={[style.total, {color: 'black'}]}>Payments</Text>
        <Text
          style={[style.number, {color: colors.primarygreen, fontSize: 18}]}>
          Axis Credit Card
        </Text>
      </View>
      <View style={style.totalContainer}>
        <Text style={[style.total, {color: 'black'}]}>Notification</Text>
        <Text
          style={[style.number, {color: colors.primarygreen, fontSize: 18}]}>
          Notify by process
        </Text>
      </View>
      <View style={style.totalContainer}>
        <Text style={[style.total, {color: 'black'}]}>Support</Text>
      </View>
      <View style={style.totalContainer}>
        <Text style={[style.total, {color: 'black'}]}>Share</Text>
      </View>
      <View style={style.totalContainer}>
        <Text style={[style.total, {color: 'black'}]}>Terms & Condition</Text>
      </View>
      <View style={style.totalContainer}>
        <Text style={[style.total, {color: 'red'}]}>Signout</Text>
      </View>
    </ScrollView>
  );
};

export default ProfileView;
