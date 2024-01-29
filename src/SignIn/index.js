import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import colors from '../Common/colors';
import {validateEmail} from '../Common/validations';
import auth from '@react-native-firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  function onAuthStateChanged(user) {}

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const handleLogin = async () => {
    if (email.trim() !== '' && password.trim() !== '') {
      if (validateEmail(email.trim())) {
        await firestore()
          .collection('Customers')
          .where('email', '==', email.trim().toLocaleLowerCase())
          .get()
          .then(async snapshot => {
            if (snapshot.empty) {
              Snackbar.show({
                text: 'This user is not registered with us,try creating a new account',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
                textColor: 'white',
              });
            } else {
              snapshot.forEach(documentSnapshot => {
                const respData = documentSnapshot.data();
                console.warn(respData);
                if (password.trim() === respData.password) {
                  Snackbar.show({
                    text: 'Login successfull',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: colors.primarygreen,
                    textColor: 'white',
                  });

                  navigation.navigate('home');
                } else {
                  Snackbar.show({
                    text: 'The password you entered is wrong',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: 'red',
                    textColor: 'white',
                  });
                }
              });
            }
          })
          .catch(err => console.warn(err));
      } else {
        Snackbar.show({
          text: 'Enter a valid email',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
          textColor: 'white',
        });
      }
    } else {
      Snackbar.show({
        text: 'Fill up the fields to continue',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'red',
        textColor: 'white',
      });
    }
  };
  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.head}>Laundry.io</Text>
        <Text style={style.sign}>Welcome Back!</Text>
        <Text style={style.desc}>
          Donec sed odio dui. Fusce dapilbus, tellus ac cursus commodo,tordor
          mauris contimentum nibh,ut fermentum massa justo sit amet risus.Duis
          mollis,est non commodo luctus, nisi erat porttitor ligula.
        </Text>
        <View style={style.input}>
          <TextInput
            placeholder="Email"
            style={style.placeholder}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={style.placeholder}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View>
          <Text style={style.forgot}>Forgot Password?</Text>
          <TouchableOpacity style={style.signtouch}>
            <Text style={style.signbtn} onPress={handleLogin}>
              Login
            </Text>
          </TouchableOpacity>
          <Text style={style.account}>Need an account?</Text>
          <TouchableOpacity style={style.touchlogin}>
            <Text
              style={style.login}
              onPress={() => navigation.navigate('signup')}>
              Signup
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.touchlogin}>
            <Text
              style={style.loginphone}
              onPress={() => navigation.navigate('loginwithphone')}>
              Sign Up With Phone
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
