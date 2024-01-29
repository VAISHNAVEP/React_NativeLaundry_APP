import {StyleSheet} from 'react-native';
import colors from '../Common/colors';

const style = StyleSheet.create({
  desc: {
    fontSize: 30,
    marginTop: 30,
    marginLeft: 20,
    color: 'black',
    fontWeight: '700',
  },
  descr: {
    marginLeft: 20,
  },
  maptext: {
    // marginLeft: 220,
    color: colors.primarygreen,
    fontSize: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginLeft: 20,
  },
  checkboxText: {
    marginLeft: 10,
  },
  termtext: {
    marginLeft: 15,
    marginTop: 80,
    fontSize: 20,
    color: 'black',
  },
  continue: {
    marginLeft: 50,
    width: 250,
    marginTop: 50,
    padding: 12,
    color: colors.primarygreen,
  },
  continuetext: {
    color: colors.primarygreen,
    fontSize: 20,
    padding: 8,
    backgroundColor: colors.lightgreen,
    textAlign: 'center',
    marginBottom:20
  },
  terms: {
    color: colors.primarygreen,
    marginLeft: 70,
    marginBottom: 50,

    fontSize: 18,
    marginRight: 20,
    marginTop: 50,
  },
  check: {
    marginTop: 80,
    marginLeft: 20,
    padding: 20,
    height:20,
  },
});
export default style;
