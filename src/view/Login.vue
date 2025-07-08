<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-80">
      <h2 class="text-2xl font-bold mb-4 text-black/70 text-center">Login</h2>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" class="w-full mb-3 p-2 border rounded" required />
        <input v-model="password" type="password" placeholder="Password" class="w-full mb-3 p-2 border rounded" required />
        <button type="submit" class="w-full text-yellow-300 bg-black/70 p-2 rounded hover:bg-pink-600 hover:text-black">Accedi</button>
      </form>
      <p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const error = ref('');
const router = useRouter();

const login = async () => {
  error.value = '';
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push('/'); // reindirizza alla home dopo il login
  } catch (err) {
    error.value = 'Credenziali non valide';
  }
};
</script>

<style scoped>
</style>
