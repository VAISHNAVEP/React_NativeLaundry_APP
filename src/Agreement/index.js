import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import style from './style';
import colors from '../Common/colors';
import Snackbar from 'react-native-snackbar';
import firestore from '@react-native-firebase/firestore';

const Agreement = () => {
  const [address, setAddress] = useState('');
  const navigation = useNavigation();

  const handleConfirmBooking = async () => {
    try {
      const db = firestore();
      await db.collection('useraddress').add({
        address,
      });
      Snackbar.show({
        text: 'Address added successfully',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.primarygreen,
        textColor: 'white',
      });
    } catch (error) {
      console.error('Error adding booking data to Firestore: ', error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={style.desc}>Update your resident and continue</Text>
      <Text style={style.descr}>
        Donec sed odio dui, Fusce daplibus, tellus ac cursus commodo, tortor
        mauris condimentum
      </Text>
      <TextInput
        style={{marginLeft: 20}}
        multiline={true}
        numberOfLines={15}
        placeholder="Address"
        value={address}
        onChangeText={text => setAddress(text)}
      />
      <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:160}}>
        <FontAwesome5
          name="map-marker-alt"
          size={30}
          style={{marginLeft: 20,marginRight:10, color: 'green'}}
        />
        <Text style={style.maptext} onPress={() => navigation.navigate('map')}>
          Select place by map
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center',paddingBottom:50}}>
        <CheckBox style={style.check} />
        <Text style={style.termtext}>Accept Terms & Conditions</Text>
      </View>
      <TouchableOpacity style={style.continue} onPress={handleConfirmBooking}>
        <Text style={style.continuetext}>Continue</Text>
      </TouchableOpacity>
      <Text style={style.terms}>Terms and Conditions</Text>
    </ScrollView>
  );
};

export default Agreement;
