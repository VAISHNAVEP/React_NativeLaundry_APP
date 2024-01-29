import {StyleSheet} from 'react-native';
import colors from '../Common/colors';

const style = StyleSheet.create({
  img: {
    width: '100%',
    height: 450,
  },
  container: {
    backgroundColor: 'white',
  },
  next: {
    color: 'green',
  },
  head: {
    padding: 15,
    backgroundColor: colors.primarygreen,
    marginRight: 250,
    marginTop: 200,

    marginLeft: 20,
    borderRadius: 7,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
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
    color: 'black',
    marginBottom: 50,
    marginTop: 30,
    fontSize: 15,
  },
  next: {
    // marginLeft: 100,
  },
});
export default style;
