import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, SafeAreaView
} from 'react-native';
import { router } from 'expo-router';
import { useAuthStore } from '../../store/authStore';
import { Colors } from '../../constants/Colors';

export default function HomeScreen() {
  const { user, logout } = useAuthStore();
  const C = Colors.dark;

  const handleLogout = () => {
    logout();
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: C.background }]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* الهيدر */}
        <View style={[styles.header, { backgroundColor: C.primary }]}>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={{ color: C.textMuted, fontSize: 12 }}>خروج</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: C.gold }]}>جزدان</Text>
          <Text style={{ color: C.textMuted, fontSize: 12 }}>🔔</Text>
        </View>

        {/* بطاقة الرصيد */}
        <View style={[styles.balanceCard, { backgroundColor: C.primary }]}>
          <View style={[styles.goldDot, { backgroundColor: C.secondary }]} />
          <Text style={[styles.balanceLabel, { color: C.textMuted }]}>
            رصيد جزدانك
          </Text>
          <Text style={[styles.balanceAmount, { color: C.gold }]}>
            ٠ د.ع
          </Text>
          <Text style={[styles.balanceDate, { color: C.textMuted }]}>
            أبريل ٢٠٢٦
          </Text>
          <View style={styles.balanceRow}>
            <View style={styles.balanceStat}>
              <Text style={[styles.statVal, { color: '#1D9E75' }]}>+٠</Text>
              <Text style={[styles.statKey, { color: C.textMuted }]}>وارد</Text>
            </View>
            <View style={[styles.divider, { backgroundColor: C.secondary }]} />
            <View style={styles.balanceStat}>
              <Text style={[styles.statVal, { color: '#E05C3A' }]}>-٠</Text>
              <Text style={[styles.statKey, { color: C.textMuted }]}>صادر</Text>
            </View>
            <View style={[styles.divider, { backgroundColor: C.secondary }]} />
            <View style={styles.balanceStat}>
              <Text style={[styles.statVal, { color: C.gold }]}>٠٪</Text>
              <Text style={[styles.statKey, { color: C.textMuted }]}>الميزانية</Text>
            </View>
          </View>
        </View>

        {/* أزرار سريعة */}
        <View style={styles.quickBtns}>
          <TouchableOpacity
            style={[styles.qBtn, { backgroundColor: C.gold }]}
            onPress={() => router.push('/transactions')}
          >
            <Text style={[styles.qBtnText, { color: C.primary }]}>+ مصروف</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.qBtn, { backgroundColor: C.secondary }]}
            onPress={() => router.push('/transactions')}
          >
            <Text style={[styles.qBtnText, { color: C.gold }]}>+ دخل</Text>
          </TouchableOpacity>
        </View>

        {/* آخر المعاملات */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: C.text }]}>
            آخر المعاملات
          </Text>
          <View style={[styles.emptyBox, { backgroundColor: C.card }]}>
            <Text style={[styles.emptyText, { color: C.textMuted }]}>
              ما في معاملات بعد — ابدأ بإضافة أول مصروف!
            </Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', padding: 16, paddingTop: 20,
  },
  headerTitle: { fontSize: 20, fontWeight: '700' },
  balanceCard: {
    margin: 16, borderRadius: 20, padding: 20,
    overflow: 'hidden',
  },
  goldDot: {
    position: 'absolute', width: 120, height: 120,
    borderRadius: 60, top: -30, right: -30, opacity: 0.4,
  },
  balanceLabel: { fontSize: 12, marginBottom: 6, textAlign: 'right' },
  balanceAmount: { fontSize: 36, fontWeight: '700', textAlign: 'right' },
  balanceDate: { fontSize: 11, textAlign: 'right', marginBottom: 16, marginTop: 4 },
  balanceRow: { flexDirection: 'row', justifyContent: 'space-between' },
  balanceStat: { flex: 1, alignItems: 'center' },
  statVal: { fontSize: 14, fontWeight: '600' },
  statKey: { fontSize: 10, marginTop: 2 },
  divider: { width: 0.5, height: '100%' },
  quickBtns: {
    flexDirection: 'row', gap: 12,
    paddingHorizontal: 16, marginBottom: 24,
  },
  qBtn: {
    flex: 1, height: 48, borderRadius: 12,
    alignItems: 'center', justifyContent: 'center',
  },
  qBtnText: { fontSize: 15, fontWeight: '600' },
  section: { paddingHorizontal: 16, marginBottom: 24 },
  sectionTitle: { fontSize: 14, fontWeight: '600', marginBottom: 12, textAlign: 'right' },
  emptyBox: {
    borderRadius: 12, padding: 24,
    alignItems: 'center', justifyContent: 'center',
  },
  emptyText: { fontSize: 13, textAlign: 'center', lineHeight: 22 },
});
