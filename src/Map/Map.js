import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import style from './style';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import colors from '../Common/colors';
import {useNavigation} from '@react-navigation/native';

const MapScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <View style={style.inputContainer}>
        <TextInput
          style={style.textinput}
          placeholder="075 Gislason Rapids,New Reaga..."
          placeholderTextColor="black"
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={style.img} source={require('../images/location.png')} />
        </View>
      </View>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.7749,
          longitude: -122.4194,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 37.7749, longitude: -122.4194}}
          title="Custom Marker"
          description="This is a custom marker"
          pinColor="green"
        />
      </MapView>
      <TouchableOpacity style={style.touch}>
        <Text style={style.text}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;
