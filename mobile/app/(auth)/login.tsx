import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ActivityIndicator, Alert, KeyboardAvoidingView, Platform
} from 'react-native';
import { router } from 'expo-router';
import { useAuthStore } from '../../store/authStore';
import { Colors } from '../../constants/Colors';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useAuthStore();
  const C = Colors.dark;

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('تنبيه', 'أدخل الإيميل وكلمة المرور');
      return;
    }
    try {
      await login(email, password);
      router.replace('/(tabs)');
    } catch {
      Alert.alert('خطأ', 'الإيميل أو كلمة المرور غلط');
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: C.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.inner}>
        <Text style={[styles.logo, { color: C.gold }]}>جزدان</Text>
        <Text style={[styles.sub, { color: C.textMuted }]}>محفظتك الذكية</Text>

        <View style={styles.form}>
          <TextInput
            style={[styles.input, { backgroundColor: C.card, color: C.text, borderColor: C.secondary }]}
            placeholder="الإيميل"
            placeholderTextColor={C.textMuted}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            textAlign="right"
          />
          <TextInput
            style={[styles.input, { backgroundColor: C.card, color: C.text, borderColor: C.secondary }]}
            placeholder="كلمة المرور"
            placeholderTextColor={C.textMuted}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            textAlign="right"
          />

          <TouchableOpacity
            style={[styles.btn, { backgroundColor: C.gold }]}
            onPress={handleLogin}
            disabled={isLoading}
          >
            {isLoading
              ? <ActivityIndicator color={C.primary} />
              : <Text style={[styles.btnText, { color: C.primary }]}>تسجيل الدخول</Text>
            }
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
            <Text style={[styles.link, { color: C.gold }]}>ما عندك حساب؟ سجّل الحين</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: { flex: 1, justifyContent: 'center', padding: 24 },
  logo: { fontSize: 48, fontWeight: '700', textAlign: 'center', marginBottom: 8 },
  sub: { fontSize: 14, textAlign: 'center', marginBottom: 48 },
  form: { gap: 12 },
  input: {
    height: 52, borderRadius: 12, borderWidth: 1,
    paddingHorizontal: 16, fontSize: 15,
  },
  btn: {
    height: 52, borderRadius: 12,
    alignItems: 'center', justifyContent: 'center', marginTop: 8,
  },
  btnText: { fontSize: 16, fontWeight: '600' },
  link: { textAlign: 'center', marginTop: 16, fontSize: 14 },
});
