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
  email: "",
  password: "",
});

const auth = useAuthStore();

const handleLogin = async () => {
  const { error } = await auth.login(form.value);
  if (!error.value) {
    alert("ログインが完了しました");
    await navigateTo("/tasks/");
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
      <li><nuxt-link to="/auth-only">Auth only</nuxt-link></li>
      <li><nuxt-link to="/guest-only">guest only</nuxt-link></li>
    </ul>
    <v-container>
      <h2 class="text-center my-6">ログイン画面</h2>
      <v-form @submit.prevent="handleLogin">
        <label for="email">メールアドレス </label>
        <v-text-field id="email" type="email" v-model="form.email" required />

        <label for="password"
          >パスワード
          <v-text-field
            id="password"
            type="password"
            v-model="form.password"
            outlined
            required
          />
        </label>
        <v-btn color="primary" type="submit">ログイン</v-btn>
      </v-form>
    </v-container>
  </div>
</template>
