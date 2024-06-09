<template>
  <div>
    <button
      @click="googleLogin"
      type="button"
      class="flex justify-center gap-2 items-center shadow-xl border border-slate-700 rounded-full px-8 py-4"
    >
      <i class="fa-brands fa-google"></i>Googleアカウントでログイン
    </button>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "ログイン - Laravel App",
  meta: [
    {
      name: "description",
      content: "ログイン画面です",
    },
  ],
});
async function googleLogin() {
  const url = `http://localhost/api/login/google`;
  const headers = {
    "Content-Type": "application/json",
    "X-XSRF-TOKEN": csrfToken.value,
  };
  await fetch(url, {
    method: "GET",
    headers: headers,
    credentials: "include",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      window.location.href = data; // リダイレクト
    });
}
</script>
