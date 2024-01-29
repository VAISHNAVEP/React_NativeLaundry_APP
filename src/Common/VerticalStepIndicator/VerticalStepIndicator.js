import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import styles from './styles';

const PAGES = ['Washing', 'Drying', 'Ironing', 'Delivered'];

export default function VerticalStepIndicator({ indicatorColor }) {
  const [currentPage, setCurrentPage] = useState(0);

  const onStepPress = position => {
    setCurrentPage(position);
  };

  const firstIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 5,
    separatorFinishedColor: indicatorColor || '#4aae4f',
    separatorUnFinishedColor: indicatorColor || '#a4d4a5',
    stepIndicatorFinishedColor: indicatorColor || '#4aae4f',
    stepIndicatorUnFinishedColor: indicatorColor || '#a4d4a5',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorLabelCurrentColor: '#000000',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
    labelColor: '#666666',
    labelSize: 12,
    currentStepLabelColor: indicatorColor || '#4aae4f',
  };

  const renderLabel = ({ position, label, currentPosition }) => {
    const labelColor = position === currentPosition ? (indicatorColor || '#4aae4f') : 'black';
    return (
      <Text style={[styles.stepLabel, position === currentPosition && styles.stepLabelSelected, { color: labelColor }]}>
        {label}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage}
          labels={PAGES}
          renderLabel={renderLabel}
          onPress={onStepPress}
        />
      </View>
    </View>
  );
}

