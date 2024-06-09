<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

useHead({
  title: "ログイン - Laravel App",
  meta: [
    {
      name: "description",
      content: "ログイン画面です",
    },
  ],
});

const form = ref({
  email: "test@example.com",
  password: "password",
});

const auth = useAuthStore();

async function handleLogin() {
  const { error } = await auth.login(form.value);
  console.log(error);
}
</script>

<template>
  <div>
    <pre>{{ auth.user }}</pre>
    <form @submit.prevent="handleLogin">
      <label for="">email </label>
      <input type="email" v-model="form.email" />

      <label for=""
        >password
        <input type="password" v-model="form.password" />
      </label>
      <button>ログイン</button>
    </form>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/login">Login</nuxt-link></li>
      <li><nuxt-link to="/register">Register</nuxt-link></li>
      <li><nuxt-link to="/auth-only">Auth only</nuxt-link></li>
      <li><nuxt-link to="/guest-only">guest only</nuxt-link></li>
    </ul>
  </div>
</template>
