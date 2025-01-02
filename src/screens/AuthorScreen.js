import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/styles';

export default function AuthorScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.header}>Thông tin tác giả</Text>
      <Text>Tên sinh viên: Nguyen Mạnh Toàn</Text>
      <Text>MSSV: 20240213E </Text>
      <Text>Tên môn học: Lập trình web và ứng dụng di động</Text>
      <Text>Ngày hoàn thành: 1/1/2025 </Text>
    </View>
  );
}
