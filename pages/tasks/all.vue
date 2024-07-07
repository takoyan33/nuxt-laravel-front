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
    <h1 class="text-center my-10">タスク一覧</h1>
    <li v-for="task in tasks" :key="task.id">{{ task.name }}</li>
  </div>
</template>
