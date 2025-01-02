import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e3f2fd', // Màu xanh dương nhạt sáng hơn
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30, // Tăng kích thước tiêu đề
    fontWeight: 'bold',
    marginBottom: 30, // Tăng khoảng cách với thành phần bên dưới
    color: '#ff9800', // Màu vàng cam nổi bật
    textAlign: 'center',
  },
  error: {
    color: '#d32f2f', // Đỏ tươi hơn cho lỗi
    marginTop: 15, // Tăng khoảng cách với thành phần trên
    fontSize: 16,
    fontStyle: 'italic', // Chữ nghiêng làm lỗi nổi bật hơn
  },
});

const inputStyles = StyleSheet.create({
  inputGroup: {
    marginBottom: 25, // Tăng khoảng cách giữa các input
    width: '90%', // Đảm bảo input có chiều rộng ổn định
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10, // Tăng khoảng cách giữa label và input
    fontSize: 18,
    color: '#004d40', // Màu xanh lá đậm hơn để dễ nhìn
  },
  input: {
    height: 55, // Tăng chiều cao để dễ nhấn hơn
    borderColor: '#b0bec5', // Màu xám nhẹ nhàng hơn
    borderWidth: 1.5,
    borderRadius: 12, // Bo góc mềm mại hơn
    paddingHorizontal: 15, // Tăng khoảng cách bên trong input
    textAlign: 'center',
    backgroundColor: '#ffffff', // Nền trắng rõ ràng
    elevation: 2, // Hiệu ứng nổi nhẹ
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

const resultStyles = StyleSheet.create({
  result: {
    marginTop: 30, // Tăng khoảng cách giữa kết quả và input
    alignItems: 'center',
    padding: 25, // Tăng không gian bên trong để thoáng hơn
    backgroundColor: '#f1f8e9', // Xanh lá nhạt hài hòa
    borderRadius: 15, // Bo góc lớn hơn để mềm mại hơn
    elevation: 5, // Hiệu ứng bóng nổi bật
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 16, // Tăng kích thước chữ cho rõ hơn
  },
  underweight: {
    color: '#fdd835', // Vàng sáng
  },
  normal: {
    color: '#388e3c', // Xanh lá đậm hơn
  },
  overweight: {
    color: '#fb8c00', // Cam sáng
  },
  obese: {
    color: '#d32f2f', // Đỏ rực
  },
});

const tableStyles = StyleSheet.create({
  table: {
    backgroundColor: '#ffffff',
    padding: 30, // Tăng khoảng cách bên trong bảng
    borderRadius: 20, // Bo góc lớn hơn
    marginTop: 35, // Tăng khoảng cách với thành phần trên
    elevation: 8, // Bóng mạnh hơn để tạo chiều sâu
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  header: {
    fontSize: 24, // Tăng kích thước tiêu đề
    fontWeight: 'bold',
    color: '#0288d1', // Xanh dương nổi bật
    textAlign: 'center',
    marginBottom: 15, // Tăng khoảng cách giữa header và các dòng dữ liệu
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12, // Tăng khoảng cách giữa các hàng
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  cell: {
    fontSize: 16,
    color: '#424242',
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#00796b',
    paddingVertical: 15, // Giữ chiều cao nút cân đối
    paddingHorizontal: 40, // Tăng chiều ngang để nút rộng hơn
    borderRadius: 12, // Bo góc mềm mại hơn
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonPressed: {
    backgroundColor: '#004d40', // Màu đậm hơn khi nhấn nút
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20, // Tăng kích thước chữ cho nút
    fontWeight: 'bold',
  },
});

export { globalStyles, inputStyles, resultStyles, tableStyles, buttonStyles };
