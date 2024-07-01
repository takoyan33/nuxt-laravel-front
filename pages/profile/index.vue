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
    <h1 class="text-center my-10">プロフィール</h1>
    <ul v-if="auth.user">
      <li>id: {{ auth.user.id }}</li>
      <li>id: {{ auth.user.name }}</li>
      <li>id: {{ auth.user.email }}</li>
    </ul>
    <ul class="d-flex justify-space-around m-auto">
      <v-btn to="/login">ログイン</v-btn>
      <v-btn to="/register">新規登録</v-btn>
      <!-- <v-btn to="/auth-only">Auth only</v-btn>
      <v-btn to="/guest-only">guest only</v-btn> -->
    </ul>
  </div>
</template>
