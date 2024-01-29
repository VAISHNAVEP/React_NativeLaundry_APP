import {StyleSheet} from 'react-native';
import colors from '../Common/colors';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  head: {
    marginLeft: 30,
    marginTop: 30,
    fontSize: 35,
    color: 'black',
    fontWeight: '600',
  },
  icon: {
    marginLeft: 'auto',
    color: 'black',
    marginTop: 30,
    marginRight: 10,
  },
  desc: {
    marginLeft: 25,
    marginTop: 20,
    fontSize: 18,
  },
  touch: {
    marginLeft: 30,
    marginTop: 30,
    padding: 10,
    backgroundColor: 'green',
    marginRight: 30,
  },
  touchText: {
    color: 'white',
    textAlign: 'center',
  },
  date: {
    marginLeft: 30,
    marginTop: 50,
    color: 'gray',
  },
  quantity: {
    marginLeft: 30,
    marginTop: 20,
    color: 'black',
    flex: 1,
  },
  status: {
    color: 'red',
    marginLeft: 300,
  },
  statusiron: {
    color: 'grey',
    marginLeft: 300,
  },
  success: {
    color: 'green',
    marginLeft: 300,
  },
  total: {
    marginLeft: 30,
    marginTop: 20,
    color: 'gray',
  },
  amount: {
    color: 'black',
  },
  pending: {
    marginLeft: 270,
    color: 'red',
  },

  alignText: {
    width: 60,
    textAlign: 'right',
  },
  nos: {
    color: 'grey',
    marginRight: 50,
  },
  alignText: {
    width: 60,
    textAlign: 'right',
  },
  numberone: {
    fontSize: 20,
    color: 'black',
    marginRight: 20,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginTop: 25,
  },
  totalletter: {
    fontSize: 20,
    color: 'gray',
  },
  number: {
    fontSize: 20,
    color: 'black',
    marginRight: 20,
    color: colors.primarygreen,
  },
  total: {
    fontSize: 20,
    color: 'gray',
  },
});

export default style;
