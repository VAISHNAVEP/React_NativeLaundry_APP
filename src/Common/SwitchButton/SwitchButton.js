import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import colors from '../colors';

const SwitchButton = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={style.container}>
      <View style={style.main}>
        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            backgroundColor: selectedTab == 0 ? colors.primarygreen : 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Text
            style={{
              color: selectedTab == 0 ? 'white' : colors.primarygreen,
              fontSize: 18,
              fontWeight: '700',
            }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            backgroundColor: selectedTab == 1 ? colors.primarygreen : 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Text
            style={{
              color: selectedTab == 1 ? 'white' : colors.primarygreen,
              fontSize: 18,
              fontWeight: '700',
            }}>
            In Progress
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SwitchButton;
