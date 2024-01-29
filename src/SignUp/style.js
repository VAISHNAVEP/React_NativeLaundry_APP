import {StyleSheet} from 'react-native';
import colors from '../Common/colors';

const style = StyleSheet.create({
  head: {
    padding: 15,
    backgroundColor: '#00c04b',
    color: 'white',
    marginRight: 250,
    marginTop: 50,
    marginLeft: 20,
    borderRadius: 7,
    fontSize: 22,
    textAlign: 'center',
  },
  sign: {
    marginLeft: 20,
    marginTop: 30,
    fontSize: 35,
    color: 'black',
    fontWeight: '500',
  },
  desc: {
    marginLeft: 20,
    marginTop: 10,
  },
  input: {
    marginTop: 50,
    marginleft: 200,
    paddingLeft: 30,
  },

  signtouch: {
    marginLeft: 70,
    marginTop: 100,
    padding: 20,
    width: 250,
  },
  account: {
    marginleft: 100,
  },
  touchlogin: {
    backgroundColor: '#00c04b',
    padding: 20,
    marginTop: 20,
  },
  login: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  signbtn: {
    fontSize: 20,
    padding: 10,
    color: colors.primarygreen,
    backgroundColor: colors.lightgreen,
    textAlign: 'center',
  },
  account: {
    paddingLeft: 100,
    marginTop: 50,
    fontSize: 20,
    color: 'black',
  },
  placeholder: {
    fontSize: 17,
  },
  errorText: {
    color: 'red',
    fontFamily: 'Lato-Regular',
    fontSize: 14,
  },
  errorView: {
    marginTop: 15,
  },
});
export default style;
