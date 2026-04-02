import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function ReportsScreen() {
  const C = Colors.dark;
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: C.background }]}>
      <View style={[styles.header, { backgroundColor: C.primary }]}>
        <Text style={[styles.title, { color: C.gold }]}>التقارير</Text>
      </View>
      <View style={styles.center}>
        <Text style={[styles.soon, { color: C.textMuted }]}>قريباً ✨</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { padding: 16, paddingTop: 20 },
  title: { fontSize: 20, fontWeight: '700', textAlign: 'right' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  soon: { fontSize: 18 },
});
