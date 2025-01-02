import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/styles';

export default function InfoScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>How BMI is Calculated</Text>
      <Text>BMI = weight (kg) / [height (m)]^2</Text>
    </View>
  );
}
