<script setup lang="ts">
const { data, error } = useFetch("http://localhost/api/v1/tasks", {
  method: "GET",
});

interface Task {
  id: number;
  name: string;
  is_completed: boolean;
  priority: [];
}

const tasks: Array<Task> = ref([]);
if (data.value) {
  tasks.value = data.value.data;
}

const handleDelete = async (id: number) => {
  await useApiFetch("/sanctum/csrf-cookie");
  const data = await useApiFetch(`/api/v1/tasks/` + id, {
    method: "DELETE",
  });

  if (data) {
    alert("タスクの削除が完了しました");
  } else {
    alert("タスクの削除に失敗しました");
  }
};

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
  title: "タスク一覧 - Laravel App",
  meta: [
    {
      name: "description",
      content: "タスク一覧です",
    },
  ],
});
</script>

<template>
  <div class="">
    <h1 class="text-center my-10">タスク一覧</h1>
    <p class="text-center">全{{ tasks.length }}件</p>
    <li v-for="task in tasks" :key="task.id">
      {{ task.name }}
      <v-btn @click="handleEdit(task.id)" color="green" class="mx-4">編集</v-btn>
      <v-btn @click="handleDelete(task.id)" color="red">削除</v-btn>
    </li>
  </div>
</template>
