import {StyleSheet} from 'react-native';
import colors from '../Common/colors';

const style = StyleSheet.create({
  order: {
    marginLeft: 20,
    fontSize: 25,
    color: 'black',
    marginTop: 40,
  },
  id: {
    marginLeft: 20,
    color: 'gray',
    marginTop: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginTop: 25,
  },
  total: {
    fontSize: 20,
    color: 'gray',
  },
  totalletter: {
    fontSize: 25,
    color: 'black',
  },
  number: {
    fontSize: 20,
    color: 'black',
    marginRight: 20,
  },
  nos: {
    color: 'grey',
    marginRight: 50,
  },
  delivery: {
    marginTop: 30,
    marginLeft: 30,
    fontSize: 25,
    color: 'black',
  
  },
  text: {
    color: 'gray',
    marginLeft: 30,
    marginTop: 15,
    fontSize: 15,
  },
  touch: {
    marginLeft: 30,
    marginTop: 50,
    width: 150,
    color: '#ededed',
    marginBottom: 20,
  },
  touchtext: {
    fontSize: 20,
    color: 'black',
    padding: 15,
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
  },

  alignText: {
    width: 60,
    textAlign: 'right',
  },
  status: {
    marginLeft: 20,
    marginTop: 50,
    fontSize: 22,
    color: 'black',
    fontWeight: '500',
  },
});

export default style;
