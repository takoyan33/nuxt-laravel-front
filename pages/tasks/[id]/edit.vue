<script setup lang="ts">
const route = useRoute();
const { data, error } = await useFetch(
  `http://localhost/api/v1/tasks/${route.params.id}`,
  {
    method: "GET",
  }
);

interface Task {
  id: number;
  name: string;
  is_completed: boolean;
  priority: [];
}

const tasks: Task = ref({});
if (data.value) {
  tasks.value = data.value.data;
}
console.log(tasks.value);

const form = ref({
  name: tasks.name,
});

const handleEdit = async (id: number) => {
  await useApiFetch("/sanctum/csrf-cookie");
  const data = await useApiFetch(`/api/v1/tasks/` + id, {
    method: "PATCH",
    body: form.value,
  });

  if (data) {
    alert("タスクの編集が完了しました");
    await navigateTo(`/tasks/${id}/`);
  } else {
    alert("タスクの編集に失敗しました");
  }
};

useHead({
  title: "タスク詳細 - Laravel App",
  meta: [
    {
      name: "description",
      content: "タスク詳細です",
    },
  ],
});
</script>

<template>
  <div class="">
    <h1 class="text-center my-10">タスク編集</h1>
    <v-form @submit.prevent="handleEdit(tasks.id)">
      <label for="name">タスクの名前 </label>
      {{ tasks.name }}
      <v-text-field id="name" type="text" v-model="form.name" />
      <div class="text-center m-auto w-100">
        <v-btn type="submit" color="primary">編集</v-btn>
      </div>
    </v-form>
  </div>
</template>
