import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyles } from '../styles/styles';

export default function HistoryScreen() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      const storedHistory = await AsyncStorage.getItem('bmiHistory');
      if (storedHistory) setHistory(JSON.parse(storedHistory));
    };
    loadHistory();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>BMI Calculation History</Text>
      <ScrollView>
        {history.length === 0 ? (
          <Text>No history available.</Text>
        ) : (
          history.map((item, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text>Time: {item.timestamp}</Text>
              <Text>Location: {item.location}</Text>
              <Text>Height: {item.height} cm</Text>
              <Text>Weight: {item.weight} kg</Text>
              <Text>BMI: {item.bmi}</Text>
              <Text>Status: {item.status}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
