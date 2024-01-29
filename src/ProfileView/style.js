import {StyleSheet} from 'react-native';
import colors from '../Common/colors';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    color: 'black',
  },
  bellIcon: {
    marginLeft: 70,
    color: 'black',
  },
  viewProfile: {
    fontSize: 16,
    color: colors.primarygreen,
  },
  infoContainer: {
    marginTop: 30,
    marginLeft: 5,
  },
  number: {
    marginTop: 30,
    color: 'black',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  logoutText: {
    marginTop: 30,
    color: 'red',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  yesText: {
    color: colors.primarygreen, 
    marginRight: 15, 
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 20,
  },
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
  totalletter: {
    fontSize: 20,
    color: 'black',
  },
  number: {
    fontSize: 20,
    color: 'black',
    marginRight: 20,
  },
  alignText: {
    width: 60,
    textAlign: 'right',
  },
 
});

export default style;
