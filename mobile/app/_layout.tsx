import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useAuthStore } from '../store/authStore';
import { router } from 'expo-router';
import { pb } from '../lib/pb';

export default function RootLayout() {
  const { isLoggedIn, user } = useAuthStore();

  useEffect(() => {
    // تحقق من حالة تسجيل الدخول عند فتح التطبيق
    if (pb.authStore.isValid) {
      router.replace('/(tabs)');
    } else {
      router.replace('/(auth)/login');
    }
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </>
  );
}
