import { Tabs } from 'expo-router';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
  const C = Colors.dark;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: C.primary,
          borderTopColor: C.secondary,
          borderTopWidth: 0.5,
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: C.gold,
        tabBarInactiveTintColor: C.textMuted,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'الرئيسية',
          tabBarIcon: ({ color }) => (
            <TabIcon symbol="⌂" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'المعاملات',
          tabBarIcon: ({ color }) => (
            <TabIcon symbol="↕" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          title: 'الميزانية',
          tabBarIcon: ({ color }) => (
            <TabIcon symbol="◑" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: 'تقارير',
          tabBarIcon: ({ color }) => (
            <TabIcon symbol="📊" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

function TabIcon({ symbol, color }: { symbol: string; color: string }) {
  const { Text } = require('react-native');
  return <Text style={{ fontSize: 18, color }}>{symbol}</Text>;
}
