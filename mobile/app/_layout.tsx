import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { pb } from '../lib/pb';
import { router } from 'expo-router';

export default function RootLayout() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (pb.authStore.isValid) {
        router.replace('/(tabs)');
      } else {
        router.replace('/(auth)/login');
      }
    }, 100);
    return () => clearTimeout(timer);
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
