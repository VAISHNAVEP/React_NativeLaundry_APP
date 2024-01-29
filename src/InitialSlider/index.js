import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import style from './style';
import {useNavigation} from '@react-navigation/native';

const InitialSlider = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('initialsliderone');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <>
      <ScrollView>
        <View style={style.maincontainer}>
          <Image style={style.img} source={require('../images/laundry.jpg')} />
          <View style={style.clothview}>
            <Text style={style.textimg}>we clean your clothes</Text>
            <Text>
              Aenean eu leo quam. pellentesque ornare sem lacinia quam venenatis
              vestib
            </Text>
            <Text style={style.head}>Laundry.io</Text>
          </View>
        </View>
        <View style={style.container}>
          <Text style={style.desc}>
            Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus mollis interdum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Curabitur blandit
            tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit
            <Text style={style.next}>Next</Text>
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default InitialSlider;
