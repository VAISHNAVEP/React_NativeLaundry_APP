import {StyleSheet} from 'react-native';
import colors from '../Common/colors';

const style = StyleSheet.create({
  head: {
    padding: 15,
    backgroundColor: colors.primarygreen,
    marginRight: 250,
    marginTop: 50,
    marginLeft: 20,
    borderRadius: 7,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  verify: {
    fontSize: 35,
    marginTop: 50,
    marginLeft: 20,
    color: 'black',
    fontWeight: '600',
  },
  desc: {
    marginLeft: 20,
    marginTop: 20,
  },
  img: {
    width: 100,
    height: 100,
    marginLeft: 110,
    marginTop: 80,
  },
  text: {
    marginLeft: 130,
    marginTop: 15,
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
  },
  otpcontainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpbox: {
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 0.5,
    backgroundColor: '#d3d3d3',
    width: 100,
    marginRight: 80,
    marginTop: 10,
  },
  touch: {
    marginLeft: 250,
  },
  otp: {
    fontSize: 20,
    color: colors.primarygreen,
  },
  verifytouch: {
    marginLeft: 60,
    width: 250,
    marginTop: 50,
    padding: 10,
  },
  verifytext: {
    fontSize: 25,
    color: colors.primarygreen,
    padding: 10,
    backgroundColor: colors.lightgreen,
    textAlign: 'center',
  },
  otptext: {
    width: 300,
  },
  input: {
    marginTop: 50,
    marginleft: 200,
    paddingLeft: 30,
  },
  placeholder: {
    fontSize: 20,
  },
});
export default style;
