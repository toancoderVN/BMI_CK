import React from 'react';
import { View, Text } from 'react-native';
import { tableStyles } from '../styles/styles';

function BMICategoryTable() {
  return (
    <View style={tableStyles.table}>
      <Text style={tableStyles.header}>BMI Categories</Text>
      <View style={tableStyles.row}>
        <Text style={tableStyles.cell}>Underweight</Text>
        <Text style={tableStyles.cell}>&lt;18.5</Text>
      </View>
      <View style={tableStyles.row}>
        <Text style={tableStyles.cell}>Normal</Text>
        <Text style={tableStyles.cell}>18.5 - 24.9</Text>
      </View>
      <View style={tableStyles.row}>
        <Text style={tableStyles.cell}>Overweight</Text>
        <Text style={tableStyles.cell}>25 - 29.9</Text>
      </View>
      <View style={tableStyles.row}>
        <Text style={tableStyles.cell}>Obese</Text>
        <Text style={tableStyles.cell}>≥30</Text>
      </View>
    </View>
  );
}

export default BMICategoryTable;
