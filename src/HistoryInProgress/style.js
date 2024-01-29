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
    fontSize: 20,
    fontWeight: '600',
  },
  status: {
    color: 'red',
    marginLeft: 250,
  },
  statusiron: {
    color: 'grey',
    marginLeft: 250,
  },
  success: {
    color: 'green',
    marginLeft: 250,
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
  amount: {
    color: 'black',
    fontWeight: '600',
  },
  pending: {
    marginLeft: 300,
    color: 'red',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
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
  totalamount: {
    color: 'black',
    fontWeight: '600',
  },
});
export default style;
