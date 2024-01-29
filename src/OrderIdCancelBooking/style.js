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
    fontSize: 20,
  },
  totalContainer: {
    flexDirection: 'row',
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
    marginLeft: 150,
    fontSize: 20,
    color: 'black',
  },
  numberone: {
    marginLeft: 250,
    fontSize: 25,
    color: colors.primarygreen,
  },
  nos: {
    marginLeft: 70,
    color: 'grey',
  },
  delivery: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 25,
    color: 'black',
  },
  text: {
    color: 'gray',
    marginLeft: 20,
    marginTop: 15,
    fontSize: 15,
  },
  touch: {
    marginLeft: 25,
    marginTop: 100,
    width: 350,
    marginRight: 80,
    color: 'red',
  },
  touchtext: {
    fontSize: 20,
    color: 'red',
    padding: 15,
    backgroundColor: '#f9bfbf',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 50,
  },
  status: {
    marginLeft: 20,
    marginTop: 50,
    fontSize: 22,
    color: 'black',
    fontWeight: '500',
  },
  desc: {
    marginTop: 50,
    marginLeft: 20,
    fontSize: 20,
    color: 'black',
  },
});

export default style;
