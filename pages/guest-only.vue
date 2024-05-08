<template>
  <div>
    <pre>{{ auth.user }}</pre>
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/login">Login</nuxt-link></li>
      <li><nuxt-link to="/register">Register</nuxt-link></li>
      <li><nuxt-link to="/auth-only">Auth only</nuxt-link></li>
      <li><nuxt-link to="/guest-only">guest only</nuxt-link></li>
    </ul>
    <form @submit.prevent="handleRegister">
      <label for=""
        >name
        <input type="text" v-model="form.name" />
      </label>
      <label for=""
        >email
        <input type="email" v-model="form.email" />
      </label>
      <label for=""
        >password
        <input type="password" v-model="form.password" />
      </label>
      <label for=""
        >password confirmation
        <input type="password" v-model="form.password_confirmation" />
      </label>
      <button>登録</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
import { ref } from "vue";
import { definePageMeta } from "#imports";

definePageMeta({
  title: "Register",
  middleware: "guest",
});

const auth = useAuthStore();

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

async function handleRegister() {
  const { error } = await auth.register(form.value);

  if (!error.value) {
    navigateTo("/");
  }
  console.log(error);
}
</script>
