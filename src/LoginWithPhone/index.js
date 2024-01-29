import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';
import colors from '../Common/colors';
import {useNavigation} from '@react-navigation/native';

const LoginWithPhone = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [otp, setOtp] = useState('');

  const navigation = useNavigation();

  const validateOtp = () => {
    if (otp.length !== 6) {
      setError('OTP must be 6 digits');
      return false;
    }
    return true;
  };

  const handleButtonPress = async () => {
    try {
      setError(null);
      const confirmation = await auth().signInWithPhoneNumber(phone);
      if (confirmation) {
        Snackbar.show({
          text: 'Verification code is sent to mobile',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: colors.primarygreen,
          textColor: 'white',
        });
        setConfirm(confirmation);
      }
    } catch (error) {
      setError('Given mobile number is incorrect');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      setError(null);
      if (validateOtp() && confirm !== null) {
        const res = await confirm.confirm(otp);
        if (res) {
          Snackbar.show({
            text: 'Phonenumber Verification Successfull',
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: colors.primarygreen,
            textColor: 'white',
          });
          navigation.navigate('home');
        }
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError('Error verifying OTP');
    }
  };

  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.head}>Laundry.io</Text>
        <Text style={style.verify}>Verification...</Text>
        <Text style={style.desc}>
          Donec sed odio dui.Fusce dapilbus, tellus ac cursus commodo, tortor
          mauris condimentum
        </Text>
        {error !== null ? (
          <View>
            <Text style={{color: 'red'}}>{error}</Text>
          </View>
        ) : null}
        <View style={style.input}>
          <TextInput
            style={style.placeholder}
            placeholder="Phone number"
            onChangeText={text => setPhone(text)}
            keyboardType='numeric'
          />
        </View>
        <TouchableOpacity style={[style.verifytouch,{marginBottom:20}]} onPress={handleButtonPress}>
          <Text style={style.verifytext}>Check</Text>
        </TouchableOpacity>
        <Image style={style.img} source={require('../images/phone.jpg')} />
        <Text style={style.text}>O T P</Text>
        <View style={style.otpcontainer}>
          <View style={style.otpbox}>
            <TextInput
              style={style.otptext}
              onChangeText={text => setOtp(text)}
              keyboardType="numeric"
              maxLength={6}
            />
          </View>
        </View>
        <TouchableOpacity style={style.touch}>
          <Text style={style.otp}>Resend OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.verifytouch} onPress={handleVerifyOtp}>
          <Text style={style.verifytext}>Verify</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginWithPhone;
