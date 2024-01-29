import {StyleSheet} from 'react-native';
import colors from '../Common/colors';

const style = StyleSheet.create({
  img: {
    width: '100%',
    height: 400,
  },
  container: {
    backgroundColor: colors.primarygreen,
  },
  next: {
    color: 'green',
    marginLeft: 360,
    fontSize: 22,
    color: 'white',
  },
  head: {
    padding: 15,
    backgroundColor: 'white',
    color: colors.primarygreen,
    fontSize: 20,
    marginRight: 250,
    marginTop: 50,
    marginLeft: 20,
    borderRadius: 7,
  },
  textimg: {
    marginTop: 50,
    color: 'white',
    marginLeft: 100,
    fontSize: 30,
  },
  maincontainer: {
    backgroundColor: 'white',
    position: 'relative',
  },
  clothview: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  desc: {
    color: 'white',
    marginTop: 50,
  },
  imgdesc: {
    color: 'white',
  },
});
export default style;
