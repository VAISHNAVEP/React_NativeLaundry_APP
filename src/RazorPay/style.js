import {StyleSheet} from 'react-native';
import colors from '../Common/colors';

const style = StyleSheet.create({
  text: {
    marginLeft: 20,
    marginTop: 30,
    fontSize: 40,
    color: 'black',
  },
  desc: {
    marginLeft: 20,
    marginTop: 30,
    fontSize: 15,
  },
  touch: {
    marginLeft: 100,
    marginRight: 100,
    marginTop: 100,
    padding: 10,
    color: colors.primarygreen,
    fontSize: 20,
    backgroundColor: colors.lightgreen,
    textAlign: 'center',
  },
  c2: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '#529C47',
    marginHorizontal: 10,
  },
  c1: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '#E2443B',
  },
  pay: {
    backgroundColor: 'purple',
    color: 'white',
    padding: 10,
    margin: 5,
    marginTop: 50,
    width: 200,
    textAlign: 'center',
    marginLeft: 300,
    borderRadius: 20,
    marginLeft:50,
  },
  touchText: {
    color: colors.primarygreen,
    fontSize: 20,
    textAlign: 'center',
  },
  payview:{
    marginLeft:50,
  }
});
export default style;
