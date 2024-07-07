<script setup lang="ts">
const auth = useAuthStore();

async function handleLogout() {
  await auth.logout();
}

useHead({
  title: "プロフィール - Laravel App",
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
  </div>
</template>
