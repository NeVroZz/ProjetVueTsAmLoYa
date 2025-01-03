import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: null as string | null,
    user: null as { email: string; username: string } | null,
  }),
  actions: {
    setUser(user: any, token: string) {
      this.user = user;
      this.token = token;
    },
  },
});
