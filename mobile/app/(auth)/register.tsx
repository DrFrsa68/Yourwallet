import { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ActivityIndicator, Alert, KeyboardAvoidingView, Platform
} from 'react-native';
import { router } from 'expo-router';
import { useAuthStore } from '../../store/authStore';
import { Colors } from '../../constants/Colors';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, isLoading } = useAuthStore();
  const C = Colors.dark;

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert('تنبيه', 'أكمل جميع الحقول');
      return;
    }
    if (password.length < 8) {
      Alert.alert('تنبيه', 'كلمة المرور لازم تكون ٨ أحرف على الأقل');
      return;
    }
    try {
      await register(name, email, password);
      router.replace('/(tabs)');
    } catch {
      Alert.alert('خطأ', 'مو قادر يسجل الحساب، جرب ثاني');
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: C.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.inner}>
        <Text style={[styles.logo, { color: C.gold }]}>جزدان</Text>
        <Text style={[styles.sub, { color: C.textMuted }]}>أنشئ حسابك الحين</Text>

        <View style={styles.form}>
          <TextInput
            style={[styles.input, { backgroundColor: C.card, color: C.text, borderColor: C.secondary }]}
            placeholder="الاسم الكامل"
            placeholderTextColor={C.textMuted}
            value={name}
            onChangeText={setName}
            textAlign="right"
          />
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
            placeholder="كلمة المرور (٨ أحرف على الأقل)"
            placeholderTextColor={C.textMuted}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            textAlign="right"
          />

          <TouchableOpacity
            style={[styles.btn, { backgroundColor: C.gold }]}
            onPress={handleRegister}
            disabled={isLoading}
          >
            {isLoading
              ? <ActivityIndicator color={C.primary} />
              : <Text style={[styles.btnText, { color: C.primary }]}>إنشاء الحساب</Text>
            }
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.back()}>
            <Text style={[styles.link, { color: C.gold }]}>عندك حساب؟ سجّل الدخول</Text>
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
