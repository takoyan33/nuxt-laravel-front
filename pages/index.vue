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
    <v-btn color="primary"  v-if="auth.isLoggedIn" @click="handleLogout">Logout</v-btn>
    <pre>{{ auth.user }}</pre>
    <h1 class="text-center my-10">Laravel Nuxt App</h1>
    <ul class="d-flex">
      <v-btn to="/login mr-3">Login</v-btn>
      <v-btn to="/register">Register</v-btn>
      <v-btn to="/auth-only">Auth only</v-btn>
      <v-btn to="/guest-only">guest only</v-btn>
    </ul>
  </div>
</template>
