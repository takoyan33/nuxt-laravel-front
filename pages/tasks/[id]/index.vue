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
const handleEdit = async (id: number) => {
  await useApiFetch("/sanctum/csrf-cookie");
  const data = await useApiFetch(`/api/v1/tasks/` + id, {
    method: "PATCH",
  });

  if (data) {
    alert("タスクの編集が完了しました");
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
    <h1 class="text-center my-10">タスク詳細</h1>
    {{ tasks.name }}
    <nuxt-link :href="`/tasks/${tasks.id}/edit`">編集</nuxt-link>
    <v-btn @click="handleDelete(tasks.id)" color="red">削除</v-btn>
  </div>
</template>
