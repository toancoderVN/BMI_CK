import React from 'react';
import { View, Text } from 'react-native';
import { resultStyles } from '../styles/styles';

function BMIResult({ bmi, status }) {
  return (
    <View style={resultStyles.result}>
      <Text>
        Your BMI: <Text style={resultStyles.bold}>{bmi}</Text>
      </Text>
      <Text>
        Status: <Text style={[resultStyles.bold, resultStyles[status.toLowerCase()]]}>{status}</Text>
      </Text>
    </View>
  );
}

export default BMIResult;