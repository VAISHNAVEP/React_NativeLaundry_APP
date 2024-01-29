import { StyleSheet } from 'react-native';
import colors from '../Common/colors';

const style = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
   marginLeft:300
  },
  imgview: {
    marginTop: 50,
    marginLeft:60,
  },
  touch: {
    marginLeft: 70,
    marginTop: 100,
    padding: 20,
    width:250,
    marginBottom:300,
    
  },
  address: {
    fontSize: 20,
    padding: 10,
    color: colors.primarygreen,
    backgroundColor: colors.lightgreen,
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'row', 
    marginLeft: 240,
  },
  editimg: {
    width: 50,
    height: 50,
  },
  deleteimg: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
});
export default style;
