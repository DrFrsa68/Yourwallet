import PocketBase, { AsyncAuthStore } from 'pocketbase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EventSource from 'react-native-sse';

// @ts-ignore
global.EventSource = EventSource;

const store = new AsyncAuthStore({
  save: async (serialized) => AsyncStorage.setItem('pb_auth', serialized),
  initial: AsyncStorage.getItem('pb_auth'),
});

export const pb = new PocketBase(
  'https://your-app.up.railway.app', // ← راح نغير هذا لاحقاً
  store
);

export default pb;
