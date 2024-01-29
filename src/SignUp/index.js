import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import {validateEmail, validatePhoneNumber} from '../Common/validations';
import Snackbar from 'react-native-snackbar';
import firestore from '@react-native-firebase/firestore';
import colors from '../Common/colors';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const handleSignUp = async () => {
    const trimmedUsername = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMobile = Phone.trim();
    const trimmedCPassword = cpassword.trim();
    const trimmedPassword = password.trim();

    if (
      trimmedUsername &&
      trimmedEmail &&
      trimmedMobile &&
      trimmedCPassword &&
      trimmedPassword
    ) {
      if (!validateEmail(trimmedEmail)) {
        return setError('Given email is not valid');
      }

      if (!validatePhoneNumber(trimmedMobile)) {
        return setError('Given mobile number is not valid');
      }

      if (trimmedPassword !== trimmedCPassword) {
        return setError('Given Passwords do not match');
      }

      const userSnapshot = await firestore()
        .collection('Customers')
        .where('name', '==', trimmedUsername)
        .where('email', '==', trimmedEmail)
        .get();

      if (userSnapshot.empty) {
        const userData = {
          name: trimmedUsername,
          email: trimmedEmail,
          phone: trimmedMobile,
          password: trimmedPassword,
          created: String(new Date()),
          updated: String(new Date()),
        };
        console.warn(userData);
        try {
          const resp = await firestore().collection('Customers').add(userData);
          console.warn(resp);

          Snackbar.show({
            text: 'A new account is created for you',
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: colors.primarygreen,
            textColor: 'white',
          });

          navigation.navigate('signin');
        } catch (err) {
          console.warn(err);
        }
      } else {
        Snackbar.show({
          text: 'This email is already existing in our system, try using another one or go to login.',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
          textColor: 'white',
        });
      }
    } else {
      setError('Fill up all the fields to continue');
    }
  };
  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.head}>Laundry.io</Text>
        <Text style={style.sign}>Signup...</Text>
        <Text style={style.desc}>
          Donec sed odio dui. Fusce dapilbus, tellus ac cursus commodo,tordor
          mauris contimentum.Duis mollis,est non commodo luctus,nisi erat.
        </Text>
        <View style={style.input}>
          {error !== null ? (
            <View style={style.errorView}>
              <Text style={style.errorText}>{error}</Text>
            </View>
          ) : null}
          <TextInput
            placeholder="Name"
            style={style.placeholder}
            onChangeText={text => setName(text)}
          />
          <TextInput
            placeholder="Phone Number"
            style={style.placeholder}
            onChangeText={text => setPhone(text)}
            keyboardType='numeric'
          />
          <TextInput
            placeholder="Email"
            style={style.placeholder}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={style.placeholder}
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={style.placeholder}
            onChangeText={text => setCpassword(text)}
          />
        </View>
        <View>
          <TouchableOpacity style={style.signtouch} onPress={handleSignUp}>
            <Text style={style.signbtn}>Signup</Text>
          </TouchableOpacity>
          <Text style={style.account}>Already have an account?</Text>
          <TouchableOpacity style={style.touchlogin}>
            <Text
              style={style.login}
              onPress={() => navigation.navigate('signin')}>
              Login
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
