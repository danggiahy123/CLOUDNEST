// app/_layout.tsx
import { Stack } from 'expo-router';
import { SafeAreaView, StatusBar } from 'react-native';
import { useEffect } from 'react';

export default function RootLayout() {
  useEffect(() => {
    // Đây là nơi bạn có thể thêm logic khởi tạo, như font, auth...
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#fff' },
          headerTintColor: '#333',
          headerTitleAlign: 'center',
        }}
      />
    </SafeAreaView>
  );
}
