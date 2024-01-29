import {StyleSheet} from 'react-native';
import colors from '../Common/colors';

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 30,
  },
  heading: {
    fontSize: 30,
    color: 'black',
    fontWeight: '600',
  },
  bellIcon: {
    marginLeft: 'auto',
    color: 'black',
    marginRight: 10,
  },
  text: {
    marginLeft: 20,
    marginTop: 30,
  },
  head: {
    padding: 5,
    backgroundColor: colors.primarygreen,
     marginRight: 250,
    marginTop: 50,
    marginLeft: 20,
    borderRadius: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  touch: {
    marginLeft: 100,
    padding: 20,
  },
  confirm: {
    fontSize: 20,
    color: colors.primarygreen,
  },
  note: {
    marginLeft: 20,
    fontSize:20,
    color: 'black',
  },
  noteone: {
    marginLeft: 15,
    color: 'gray',
  },
});
export default style;
