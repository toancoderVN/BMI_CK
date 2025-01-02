import React from 'react';
import { Pressable, Text, Keyboard, View, StyleSheet } from 'react-native';
import { buttonStyles } from '../styles/styles';

function BMICalculateButton({ onPress }) {
  const handlePress = () => {
    Keyboard.dismiss(); // Ẩn bàn phím
    if (onPress) {
      onPress(); // Gọi hàm tính toán được truyền từ props
    }
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          buttonStyles.button,
          pressed && buttonStyles.buttonPressed,
        ]}
        onPress={handlePress}
      >
        <Text style={buttonStyles.buttonText}>Calculate</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center', // Đặt nút vào giữa
  },
});

export default BMICalculateButton;
