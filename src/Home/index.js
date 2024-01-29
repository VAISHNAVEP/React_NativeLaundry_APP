import { View, Text, I18nManager, Image, ScrollView } from 'react-native';
import React from 'react';
import style from './style';
import Entypo from 'react-native-vector-icons/Entypo';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={style.maincontainer}>
      <View style={style.container}>
        <View style={style.servicesContainer}>
          <Text style={style.services}>Our Services</Text>
          <Entypo name="bell" size={30} style={{ color: 'black',marginLeft:120 }} />
        </View>
        <Text style={style.desc}>
          Donec sed odio dui. Fusce dapilbus, tellus ac cursus commodo, tortor
          mauris condimentum
        </Text>
        <Image style={style.img} source={require('../images/boating.jpg')} />
        <Text style={style.hand}>Hand Wash</Text>
        <Text style={style.heading}>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Nullam quis risus eget urna mollis ornare vel eu leo
        </Text>
        <Image style={style.img} source={require('../images/handwash.jpg')} />
      </View>
    </View>
    </ScrollView>
  );
};

export default Home;
