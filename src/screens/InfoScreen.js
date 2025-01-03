import React from 'react'; // Import React để tạo component
import { View, Text, ScrollView } from 'react-native'; // Import các thành phần UI của React Native
import { globalStyles } from '../styles/styles'; // Import các style được định nghĩa trong file styles để sử dụng

export default function InfoScreen() { // Định nghĩa component InfoScreen và export để sử dụng ở nơi khác
  return (
    <ScrollView contentContainerStyle={globalStyles.container}> 
      {/* ScrollView giúp cuộn nội dung khi có nhiều thành phần. 
      `contentContainerStyle` định nghĩa style cho nội dung bên trong ScrollView */}

      <Text style={globalStyles.header}>How BMI is Calculated</Text>
      {/* Text để hiển thị tiêu đề chính "How BMI is Calculated" với style tiêu đề từ globalStyles */}

      <Text style={{ marginBottom: 10, fontSize: 16, lineHeight: 24 }}>
        {/* Đoạn Text mô tả BMI là gì và công thức tính với khoảng cách giữa các dòng (lineHeight) là 24 */}
        BMI (Body Mass Index) is a simple calculation used to assess whether a person has a healthy body weight for their height. The formula is as follows:
      </Text>

      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
        {/* Công thức tính BMI được làm nổi bật với chữ đậm và cỡ chữ lớn hơn */}
        BMI = weight (kg) / [height (m)]²
      </Text>

      <Text style={{ marginBottom: 20, fontSize: 16, lineHeight: 24 }}>
        {/* Giải thích cách áp dụng công thức BMI bằng một ví dụ thực tế */}
        For example, if you weigh 70 kg and your height is 1.75 m, your BMI would be:
        {'\n\n'} 
        {/* {'\n\n'} tạo hai dòng trống */}
        70 / (1.75 × 1.75) = 22.86
      </Text>

      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
        {/* Phần tiêu đề "Interpretation of BMI" làm nổi bật */}
        Interpretation of BMI:
      </Text>

      <Text style={{ marginBottom: 20, fontSize: 16, lineHeight: 24 }}>
        {/* Mô tả các chỉ số BMI theo từng nhóm phân loại */}
        - Underweight: BMI less than 18.5{'\n'} 
        - Normal weight: BMI 18.5 - 24.9{'\n'}
        - Overweight: BMI 25 - 29.9{'\n'}
        - Obesity: BMI 30 or more
      </Text>

      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
        {/* Phần tiêu đề "Important Notes" */}
        Important Notes:
      </Text>

      <Text style={{ marginBottom: 20, fontSize: 16, lineHeight: 24 }}>
        {/* Lưu ý quan trọng về chỉ số BMI và những ngoại lệ cần xem xét */}
        - BMI is a general guideline and does not account for factors like muscle mass or body composition.{'\n'}
        - Athletes or people with high muscle mass may have a higher BMI, but this does not necessarily mean they are overweight.
      </Text>

      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
        {/* Phần tiêu đề "Tips for Maintaining a Healthy BMI" */}
        Tips for Maintaining a Healthy BMI:
      </Text>

      <Text style={{ marginBottom: 20, fontSize: 16, lineHeight: 24 }}>
        {/* Liệt kê các mẹo duy trì chỉ số BMI ở mức khỏe mạnh */}
        1. Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins.{'\n'}
        2. Engage in regular physical activity, such as walking, running, or yoga.{'\n'}
        3. Get sufficient sleep and manage stress effectively.{'\n'}
        4. Regularly monitor your weight and adjust your lifestyle as needed.
      </Text>
    </ScrollView>
  );
}
