import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const logo = require('../assets/anh/logo.png'); // Đảm bảo bạn có file logo.png trong thư mục assets
const banner = require('../assets/anh/banner.png'); // Đảm bảo bạn có file banner.png trong thư mục assets

export default function TrangChu() {
  return (
    <ScrollView style={styles.container}>
      {/* Logo và Tiêu đề */}
      <View style={styles.logoHeader}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.title}>WATERDG.VN</Text>
      </View>

      {/* Thanh điều hướng */}
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navLink}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navLink}>Hosting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navLink}>Dịch vụ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navLink}>Máy chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navLink}>Giải pháp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navLink}>Thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navLink}>Điều khoản</Text>
        </TouchableOpacity>
      </View>

      {/* Banner */}
      <Image source={banner} style={styles.banner} resizeMode="cover" />

      {/* Giới thiệu */}
      <View style={styles.intro}>
        <Text style={styles.introText}>Chào mừng bạn đến với hệ thống cung cấp dịch vụ VPS cao cấp.</Text>
        <Text style={styles.introText}>Chúng tôi mang đến giải pháp máy chủ ảo hiệu suất cao, ổn định và giá cả hợp lý.</Text>
      </View>

      {/* Các सेक्शन dịch vụ */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌐 Dịch vụ VPS chuyên nghiệp</Text>
        <Text style={styles.sectionText}>
          - Tài nguyên riêng biệt: CPU, RAM, SSD tốc độ cao{'\n'}
          - Hạ tầng đặt tại Việt Nam – tốc độ cực nhanh{'\n'}
          - Hỗ trợ 24/7, bảo mật tối đa{'\n'}
          - Phù hợp chạy Website, App, API, Remote Desktop...
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💰 Giá chỉ từ 99.000đ/tháng</Text>
        <Text style={styles.sectionText}>
          Chúng tôi cam kết mức giá cạnh tranh nhất với chất lượng dịch vụ hàng đầu. Bạn có thể lựa chọn nhiều cấu hình VPS tùy theo nhu cầu.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🚀 Tại sao chọn WATERDG.VN?</Text>
        <Text style={styles.sectionText}>
          - Hệ thống tự động cài đặt nhanh chóng chỉ trong vài phút.{'\n'}
          - Bảng điều khiển thân thiện, dễ sử dụng cho cả người mới.{'\n'}
          - Cam kết uptime 99.99%, đảm bảo hoạt động liên tục.{'\n'}
          - Giao diện thanh toán rõ ràng, hỗ trợ nhiều phương thức tiện lợi.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔐 Cam kết của chúng tôi</Text>
        <Text style={styles.sectionText}>
          WATERDG.VN cam kết không ngừng cải tiến chất lượng dịch vụ và hỗ trợ khách hàng 24/7.{'\n'}
          Bảo mật và sự riêng tư của bạn là ưu tiên hàng đầu của chúng tôi.
        </Text>
      </View>

      {/* Nhóm nút */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Đăng ký ngay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Liên hệ</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>BẢN QUYỀN © 2025 - WATERDG.VN | Hotline: 1900 9999</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f6',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 15,
  },
  logo: {
    height: 50,
    width: 50,
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  navItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  navLink: {
    color: '#3498db',
    fontWeight: 'bold',
  },
  banner: {
    width: '100%',
    height: 150, // Điều chỉnh chiều cao banner cho phù hợp
    borderRadius: 6,
    marginBottom: 25,
  },
  intro: {
    alignItems: 'center',
    marginBottom: 35,
  },
  introText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'center',
  },
  section: {
    paddingVertical: 25,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerText: {
    fontSize: 12,
    color: '#777',
  },
});