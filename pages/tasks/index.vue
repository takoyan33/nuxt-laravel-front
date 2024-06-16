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
    <v-btn color="primary" v-if="auth.isLoggedIn" @click="handleLogout"
      >ログアウト</v-btn
    >
    <ul v-if="auth.user">
      <li>id: {{ auth.user.id }}</li>
      <li>id: {{ auth.user.name }}</li>
      <li>id: {{ auth.user.email }}</li>
    </ul>
    <h1 class="text-center my-10">タスク管理画面</h1>
    <ul class="d-flex justify-space-around m-auto">
      <v-btn to="/tasks/new">タスクの登録</v-btn>
      <v-btn to="/tasks/edit">タスクの編集</v-btn>
      <v-btn to="/tasks/delete">タスクの削除</v-btn>
      <v-btn to="/profile">プロフィール</v-btn>
    </ul>
  </div>
</template>
