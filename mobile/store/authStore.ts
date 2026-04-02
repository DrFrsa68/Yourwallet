import { create } from 'zustand';
import { pb } from '../lib/pb';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthStore {
  user: User | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoggedIn: pb.authStore.isValid,
  isLoading: false,

  login: async (email, password) => {
    set({ isLoading: true });
    try {
      const auth = await pb.collection('users').authWithPassword(email, password);
      set({
        user: {
          id: auth.record.id,
          name: auth.record.name,
          email: auth.record.email,
        },
        isLoggedIn: true,
      });
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (name, email, password) => {
    set({ isLoading: true });
    try {
      await pb.collection('users').create({ name, email, password, passwordConfirm: password });
      const auth = await pb.collection('users').authWithPassword(email, password);
      set({
        user: {
          id: auth.record.id,
          name: auth.record.name,
          email: auth.record.email,
        },
        isLoggedIn: true,
      });
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => {
    pb.authStore.clear();
    set({ user: null, isLoggedIn: false });
  },
}));
