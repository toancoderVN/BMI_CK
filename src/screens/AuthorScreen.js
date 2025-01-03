import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../styles/styles';

export default function AuthorScreen() {
  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Text style={globalStyles.header}>Thông tin tác giả</Text>
      
      <Text style={{ fontSize: 16, marginBottom: 10 }}>Tên sinh viên: Nguyễn Mạnh Toàn</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>MSSV: 20240213E</Text>
      <Text style={{ fontSize: 16, marginBottom: 10 }}>Tên môn học: Lập trình web và ứng dụng di động</Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>Ngày hoàn thành: 1/1/2025</Text>
      
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
        Lời cảm ơn
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 24 }}>
        Tôi xin gửi lời cảm ơn chân thành đến giảng viên hướng dẫn và các bạn đồng hành trong quá trình thực hiện dự án này. 
        Nhờ sự giúp đỡ và hỗ trợ từ mọi người, tôi đã có thể hoàn thành ứng dụng này đúng thời hạn. 
      </Text>
      <Text style={{ fontSize: 16, lineHeight: 24, marginTop: 10 }}>
        Dự án không chỉ giúp tôi hiểu sâu hơn về lập trình web và ứng dụng di động, 
        mà còn giúp tôi phát triển các kỹ năng cần thiết cho sự nghiệp trong tương lai.
      </Text>
      <Text style={{ fontSize: 16, fontStyle: 'italic', marginTop: 20 }}>
        Xin chân thành cảm ơn!
      </Text>
    </ScrollView>
  );
}
