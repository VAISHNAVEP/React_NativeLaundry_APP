import {StyleSheet} from 'react-native';
import colors from '../Common/colors';

const style = StyleSheet.create({
  text: {
    marginLeft: 180,
    color: 'white',
    marginTop: 5,
    fontSize: 20,
    fontWeight: '600',
  },
  touch: {
    backgroundColor: colors.primarygreen,
    height: 30,
  },
  textinput: {
    backgroundColor: 'lightgray',
    color: 'black',
    fontSize: 18,
    paddingLeft: 40,
    marginTop: 20,
    marginBottom: 10,
    width: 370,
    marginLeft: 20,
    height:50
  },
  placeholder: {
    color: 'black',
  },
  img: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 20,
    left: 25,
  },
  inputcontainer: {
    position: 'relative',
  },
});
export default style;
