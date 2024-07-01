<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
const auth = useAuthStore();

useHead({
  title: "新規登録 - Laravel App",
  meta: [
    {
      name: "description",
      content: "ログイン画面です",
    },
  ],
});

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const handleRegister = async () => {
  const { error } = await auth.register(form.value);

  if (!error.value) {
    alert("登録が完了しました");
    await navigateTo("/tasks");
  } else {
    alert("登録に失敗しました");
  }
};
</script>


<template>
  <div>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/login">Login</nuxt-link></li>
      <li><nuxt-link to="/register">Register</nuxt-link></li>
    </ul>
    <v-container>
      <h2 class="text-center my-6">登録画面</h2>
      <v-form @submit.prevent="handleRegister">
        <label for="name">名前 </label>
        <v-text-field id="name" type="text" v-model="form.name" />
        <label for="email">メールアドレス </label>
        <v-text-field id="email" type="email" v-model="form.email" />
        <label for="password">パスワード </label>
        <v-text-field id="password" type="password" v-model="form.password" />
        <label for="password-confirm">パスワード確認 </label>
        <v-text-field
          id="password-confirm"
          type="password"
          v-model="form.password_confirmation"
        />
        <div class="text-center m-auto w-100">
          <v-btn type="submit" color="primary">新規登録</v-btn>
        </div>
      </v-form>
    </v-container>
  </div>
</template>