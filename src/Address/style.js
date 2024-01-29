import {StyleSheet} from 'react-native';
import colors from '../Common/colors';

const style = StyleSheet.create({
  text: {
    marginLeft: 20,
    marginTop: 30,
    fontSize: 30,
    color:colors.primarygreen,
  },
  desc: {
    marginLeft: 20,
    marginTop: 50,
  },
  home: {
    marginLeft: 20,
    marginTop: 20,
  },
  content: {
    marginLeft: 20,
    marginTop: 50,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    marginLeft: 100,
    marginTop: 10,
    alignItems:'center',
  },
  editimg: {
    width: 80,
    height: 80,
  },
  deleteimg: {
    width: 70,
    height: 70,
    marginLeft: 20,
  },
  touch: {
    padding: 10,
    marginLeft: 80,
    marginTop: 80,
    marginRight:20,
  },
  address: {
    fontSize: 25,
    color: 'green',
    
  },
});

export default style;
