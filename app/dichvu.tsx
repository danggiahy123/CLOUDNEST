import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const logo = require('../assets/anh/logo.png'); // Đảm bảo bạn có file logo.png trong thư mục assets

interface Service {
  title: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    title: 'Dịch Vụ VPS Cao Cấp',
    description: 'Máy chủ ảo với tài nguyên riêng biệt, hiệu suất ổn định và tốc độ cao. Phù hợp cho website, ứng dụng và nhiều mục đích khác.',
    link: '/vps',
  },
  {
    title: 'Dịch Vụ Hosting',
    description: 'Giải pháp lưu trữ website toàn diện, bảo mật và dễ dàng quản lý. Nhiều gói hosting phù hợp với mọi nhu cầu.',
    link: '/hosting',
  },
  {
    title: 'Cho Thuê Máy Chủ Vật Lý',
    description: 'Máy chủ mạnh mẽ, cấu hình linh hoạt, đáp ứng nhu cầu của các ứng dụng và hệ thống lớn.',
    link: '/dedicated',
  },
  {
    title: 'Giải Pháp Cloud',
    description: 'Hạ tầng điện toán đám mây linh hoạt, масштабируемый và tiết kiệm chi phí cho doanh nghiệp của bạn.',
    link: '/cloud',
  },
  {
    title: 'Tư Vấn và Hỗ Trợ Kỹ Thuật',
    description: 'Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn mọi lúc, giải đáp thắc mắc và đưa ra các giải pháp tối ưu.',
    link: '/support',
  },
];

export default function DichVu() {
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

      {/* Tiêu đề trang */}
      <Text style={styles.pageTitle}>Các Dịch Vụ Của Chúng Tôi</Text>

      {/* Danh sách dịch vụ */}
      {services.map((service, index) => (
        <View key={index} style={styles.serviceItem}>
          <Text style={styles.serviceTitle}>{service.title}</Text>
          <Text style={styles.serviceDescription}>{service.description}</Text>
          <TouchableOpacity style={styles.serviceButton}>
            <Text style={styles.serviceButtonText}>Xem chi tiết</Text>
          </TouchableOpacity>
        </View>
      ))}

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
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3498db',
    textAlign: 'center',
    marginBottom: 30,
  },
  serviceItem: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  serviceDescription: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 15,
  },
  serviceButton: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  serviceButtonText: {
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