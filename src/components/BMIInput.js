import React from 'react';
import {
  TextInput,
  View,
  Text,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { inputStyles } from '../styles/styles';

function BMIInput({ label, value, onChange }) {
  const increaseValue = () => {
    const newValue = (parseFloat(value) || 0) + 1;
    onChange(newValue.toString());
  };

  const decreaseValue = () => {
    const newValue = Math.max(0, (parseFloat(value) || 0) - 1);
    onChange(newValue.toString());
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={inputStyles.inputGroup}>
          <Text style={inputStyles.label}>{label}</Text>
          <View style={styles.row}>
            <Button title="-" onPress={decreaseValue} />
            <TextInput
              style={[inputStyles.input, styles.input]}
              keyboardType="numeric"
              placeholder={`Enter ${label.toLowerCase()}`}
              value={value}
              onChangeText={onChange}
              onSubmitEditing={Keyboard.dismiss}
              returnKeyType="done"
            />
            <Button title="+" onPress={increaseValue} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 100, // Cố định chiều rộng
    textAlign: 'center', // Đảm bảo văn bản luôn nằm giữa
  },
});

export default BMIInput;
