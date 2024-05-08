<script setup lang="ts">
const auth = useAuthStore();

async function handleLogout() {
  await auth.logout();
}

useHead({
  title: "トップ - Laravel App",
  meta: [
    {
      name: "description",
      content: "ログイン画面です",
    },
  ],
});
</script>

<template>
  <div>
    <button v-if="auth.isLoggedIn" @click="handleLogout">Logout</button>
    <pre>{{ auth.user }}</pre>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/login">Login</nuxt-link></li>
      <li><nuxt-link to="/register">Register</nuxt-link></li>
      <li><nuxt-link to="/auth-only">Auth only</nuxt-link></li>
      <li><nuxt-link to="/guest-only">guest only</nuxt-link></li>
    </ul>
  </div>
</template>
