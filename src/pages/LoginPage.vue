<template>
    <div>
      <h1>Connexion</h1>
      <form @submit.prevent="onLogin">
        <input v-model="email" placeholder="Email" type="email" />
        <input v-model="password" placeholder="Password" type="password" />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { login } from '../api/auth';
  
  export default defineComponent({
    setup() {
      const email = ref('');
      const password = ref('');
  
      const onLogin = async () => {
        try {
          const data = await login(email.value, password.value);
          console.log('Utilisateur connecté :', data);
        } catch (error) {
          console.error('Erreur de connexion', error);
        }
      };
  
      return { email, password, onLogin };
    },
  });
  </script>
  