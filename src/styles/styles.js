import { StyleSheet } from 'react-native'; // Import thư viện StyleSheet từ React Native để tạo các style

const globalStyles = StyleSheet.create({
  container: {
    padding: 20, // Khoảng cách bên trong container
    backgroundColor: '#ffe6f0', // Màu nền hồng pastel nhẹ
    flex: 1, // Chiếm toàn bộ chiều cao màn hình
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang
  },
  header: {
    fontSize: 30, // Kích thước chữ của tiêu đề
    fontWeight: 'bold', // Chữ đậm
    marginBottom: 30, // Khoảng cách bên dưới tiêu đề
    color: '#ff4081', // Màu chữ hồng đậm
    textAlign: 'center', // Căn giữa chữ
  },
  error: {
    color: '#d50000', // Màu chữ đỏ để hiển thị thông báo lỗi
    marginTop: 15, // Khoảng cách bên trên lỗi so với thành phần trước đó
    fontSize: 16, // Kích thước chữ
    fontStyle: 'italic', // Chữ nghiêng để lỗi dễ nhìn hơn
  },
});

const inputStyles = StyleSheet.create({
  inputGroup: {
    marginBottom: 25, // Khoảng cách bên dưới nhóm input
    width: '90%', // Chiều rộng của nhóm input chiếm 90% màn hình
  },
  label: {
    fontWeight: 'bold', // Chữ đậm
    marginBottom: 10, // Khoảng cách giữa label và input
    fontSize: 18, // Kích thước chữ của label
    color: '#d81b60', // Màu chữ hồng rực rỡ
  },
  input: {
    height: 55, // Chiều cao của input
    borderColor: '#f8bbd0', // Màu viền hồng pastel nhạt
    borderWidth: 1.5, // Độ rộng viền input
    borderRadius: 12, // Bo góc input
    paddingHorizontal: 15, // Khoảng cách padding ngang bên trong input
    textAlign: 'center', // Căn giữa nội dung text trong input
    backgroundColor: '#ffffff', // Màu nền trắng của input
    elevation: 2, // Đổ bóng nhẹ cho nền
    shadowColor: '#000', // Màu của bóng đổ
    shadowOffset: { width: 0, height: 1 }, // Hướng đổ bóng
    shadowOpacity: 0.1, // Độ mờ của bóng
    shadowRadius: 3, // Bán kính vùng bóng đổ
  },
});

const resultStyles = StyleSheet.create({
  result: {
    marginTop: 30, // Khoảng cách bên trên khung kết quả
    alignItems: 'center', // Căn giữa nội dung trong khung
    padding: 25, // Khoảng cách bên trong khung kết quả
    backgroundColor: '#ffe6f0', // Màu nền hồng pastel nhạt
    borderRadius: 15, // Bo góc khung kết quả
    elevation: 5, // Tạo hiệu ứng đổ bóng nổi bật
    shadowColor: '#000', // Màu bóng
    shadowOffset: { width: 0, height: 2 }, // Hướng bóng
    shadowOpacity: 0.2, // Độ mờ của bóng
    shadowRadius: 4, // Bán kính bóng
  },
  bold: {
    fontWeight: 'bold', // Chữ đậm trong các dòng kết quả
    fontSize: 16, // Kích thước chữ trong các dòng kết quả
  },
  underweight: {
    color: '#ff80ab', // Màu hồng nhạt cho trạng thái thiếu cân
  },
  normal: {
    color: '#8e24aa', // Màu tím nhạt cho trạng thái cân nặng bình thường
  },
  overweight: {
    color: '#f06292', // Màu hồng đậm cho trạng thái thừa cân
  },
  obese: {
    color: '#d50000', // Màu đỏ cho trạng thái béo phì
  },
});

const tableStyles = StyleSheet.create({
  table: {
    backgroundColor: '#ffffff', // Màu nền trắng của bảng
    padding: 30, // Khoảng cách bên trong bảng
    borderRadius: 20, // Bo góc bảng
    marginTop: 35, // Khoảng cách bên trên bảng
    elevation: 8, // Tạo hiệu ứng bóng nổi mạnh hơn
    shadowColor: '#000', // Màu của bóng đổ
    shadowOffset: { width: 0, height: 3 }, // Hướng bóng đổ
    shadowOpacity: 0.2, // Độ mờ của bóng đổ
    shadowRadius: 5, // Bán kính của bóng đổ
  },
  header: {
    fontSize: 24, // Kích thước chữ của tiêu đề bảng
    fontWeight: 'bold', // Chữ đậm cho tiêu đề bảng
    color: '#ec407a', // Màu chữ hồng đậm
    textAlign: 'center', // Căn giữa tiêu đề bảng
    marginBottom: 15, // Khoảng cách giữa tiêu đề và nội dung bảng
  },
  row: {
    flexDirection: 'row', // Hiển thị các ô theo chiều ngang
    justifyContent: 'space-between', // Cách đều các ô trong hàng
    paddingVertical: 12, // Khoảng cách dọc bên trong mỗi hàng
    borderBottomWidth: 1, // Đường viền ngang dưới mỗi hàng
    borderBottomColor: '#f8bbd0', // Màu viền ngang hồng pastel nhạt
  },
  cell: {
    fontSize: 16, // Kích thước chữ của ô trong bảng
    color: '#424242', // Màu chữ xám đậm
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#f06292', // Màu nền hồng đậm của nút
    paddingVertical: 15, // Khoảng cách dọc bên trong nút
    paddingHorizontal: 40, // Khoảng cách ngang bên trong nút
    borderRadius: 12, // Bo góc nút
    alignItems: 'center', // Căn giữa nội dung theo chiều ngang
    justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
    elevation: 4, // Tạo hiệu ứng nổi bóng nhẹ cho nút
    shadowColor: '#000', // Màu của bóng nút
    shadowOffset: { width: 0, height: 2 }, // Hướng bóng nút
    shadowOpacity: 0.3, // Độ mờ của bóng nút
    shadowRadius: 4, // Bán kính bóng nút
  },
  buttonPressed: {
    backgroundColor: '#d81b60', // Màu nền hồng rực khi nhấn nút
  },
  buttonText: {
    color: '#ffffff', // Màu chữ trắng trên nút
    fontSize: 20, // Kích thước chữ trên nút
    fontWeight: 'bold', // Chữ đậm trên nút
  },
});

export { globalStyles, inputStyles, resultStyles, tableStyles, buttonStyles }; // Xuất các style để sử dụng trong component
