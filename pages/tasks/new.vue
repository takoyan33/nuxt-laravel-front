<script setup lang="ts">
const task = useTaskStore();

const form = ref({
  name: "aaaaaaaa",
});

const handleTaskRegister = async () => {
  await useApiFetch("/sanctum/csrf-cookie");
  const data = await useApiFetch("/api/v1/tasks", {
    method: "POST",
    body: {
      name: "aaaa",
    },
  });

  console.log(data);

  if (!error.value) {
    alert("タスクの登録が完了しました");
    await navigateTo("/tasks");
  } else {
    alert("タスクの登録に失敗しました");
  }
};
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
    <h1 class="text-center my-10">タスクの登録</h1>
    <v-form @submit.prevent="handleTaskRegister">
      <label for="name">タスク名 必須</label>
      <v-text-field id="name" type="text" v-model="form.name" />
      <div class="text-center m-auto w-100">
        <v-btn type="submit" color="primary">登録</v-btn>
      </div>
    </v-form>
  </div>
</template>
