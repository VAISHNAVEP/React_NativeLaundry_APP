import {View, Image, Text} from 'react-native';
import React from 'react';
import style from './style';

const ServiceCopy = () => {
  return (
    <View>
      <Image style={style.img} source={require('../images/boating.jpg')} />
      <Text style={style.hand}>Hash Wash</Text>
      <Text style={style.handdesc}>
        Maecenas faucibus mollis interdum.Cras mattis consectetur purus sit amet
        fermentum,Nullam quis risus eget urna mollis ornare vel eu leo.Aenean
        lacinia bibendum nulla sed consectetur
      </Text>
      <Text style={style.hand}>Advantage</Text>
      <Text style={style.handdesc}>
        Maecenas faucibus mollis interdum. Fusce dapibus,tellus ac curcus
        commodo,tortor.mauris contimentum nibh,ut fermentum massa
      </Text>
      <Text style={style.hand}>Drawbacks</Text>
      <Text style={style.handdesc}>
        Maecenas faucibus mollis interdum. Fusce dapibus,tellus ac curcus
        commodo,tortor
      </Text>
    </View>
  );
};

export default ServiceCopy;
