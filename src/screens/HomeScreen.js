import React, { useState, useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import BMIInput from '../components/BMIInput';
import BMICalculateButton from '../components/BMICalculateButton';
import BMIResult from '../components/BMIResult';
import BMICategoryTable from '../components/BMICategoryTable';
import { globalStyles } from '../styles/styles';

export default function HomeScreen({ navigation }) {
  // Giá trị mặc định
  const [weight, setWeight] = useState('65'); // Cân nặng mặc định
  const [height, setHeight] = useState('165'); // Chiều cao mặc định
  const [bmi, setBmi] = useState('23.88'); // BMI mặc định (65kg, 165cm)
  const [status, setStatus] = useState('Normal'); // Trạng thái mặc định

  useEffect(() => {
    // Tính toán lại BMI dựa trên giá trị mặc định khi mở ứng dụng
    calculateBMI(true);
  }, []);

  // Hàm giới hạn giá trị nhập
  const validateInput = (value, type) => {
    const numValue = parseFloat(value);
    if (type === 'weight') {
      if (numValue > 200) {
        Alert.alert('Invalid Weight', 'Weight cannot exceed 200 kg.');
        return false;
      }
    }
    if (type === 'height') {
      if (numValue > 250) {
        Alert.alert('Invalid Height', 'Height cannot exceed 250 cm.');
        return false;
      }
    }
    return true;
  };

  const calculateBMI = async (isInitial = false) => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (!isInitial && (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0)) {
      alert('Invalid input. Please enter valid height and weight.');
      return;
    }

    const bmiValue = (weightNum / ((heightNum / 100) ** 2)).toFixed(2);
    const newStatus =
      bmiValue < 18.5
        ? 'Underweight'
        : bmiValue < 24.9
        ? 'Normal'
        : bmiValue < 29.9
        ? 'Overweight'
        : 'Obese';

    setBmi(bmiValue);
    setStatus(newStatus);

    if (isInitial) return; // Không lưu vào lịch sử nếu là tính toán ban đầu

    // Lấy thời gian hiện tại
    const timestamp = new Date().toLocaleString('vi-VN', { hour12: false });

    // Lấy vị trí GPS
    let location = { coords: { latitude: 'Unknown', longitude: 'Unknown' } };
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        location = await Location.getCurrentPositionAsync({});
      }
    } catch (error) {
      console.error('Location Error:', error);
    }

    const newEntry = {
      timestamp,
      height: heightNum,
      weight: weightNum,
      bmi: bmiValue,
      status: newStatus,
      location: `Lat: ${location.coords.latitude}, Lon: ${location.coords.longitude}`,
    };

    // Lưu vào AsyncStorage
    const storedHistory = await AsyncStorage.getItem('bmiHistory');
    const history = storedHistory ? JSON.parse(storedHistory) : [];

    // Giới hạn số lần lưu
    if (history.length >= 10) history.pop(); // Xóa bản ghi cũ nhất nếu >10
    history.unshift(newEntry); // Thêm bản ghi mới

    await AsyncStorage.setItem('bmiHistory', JSON.stringify(history));
  };

  return (
    <View style={globalStyles.container}>
      <BMIInput
        label="Weight (kg)"
        value={weight}
        onChange={(value) => {
          if (validateInput(value, 'weight')) setWeight(value);
        }}
      />
      <BMIInput
        label="Height (cm)"
        value={height}
        onChange={(value) => {
          if (validateInput(value, 'height')) setHeight(value);
        }}
      />
      <BMICalculateButton onPress={() => calculateBMI(false)} />
      {/* Hiển thị BMI mặc định khi mở ứng dụng */}
      <BMIResult bmi={bmi} status={status} />
      <BMICategoryTable />
      <Button title="How to Calculate BMI" onPress={() => navigation.navigate('Info')} />
      <Button title="Calculation History" onPress={() => navigation.navigate('History')} />
      <Button title="Author Information" onPress={() => navigation.navigate('Author')} />
    </View>
  );
}
