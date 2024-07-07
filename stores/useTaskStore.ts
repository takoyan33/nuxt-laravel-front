import { defineStore } from "pinia";

type RegistrationInfo = {
  name: string;
};

export const useTaskStore = defineStore("task", () => {
  //ユーザー情報を取得する

  async function taskRegister(info: RegistrationInfo) {
    console.log(info);
    await useApiFetch("/sanctum/csrf-cookie");
    const { data, error } = await useFetch("http://0.0.0.0/api/v1/tasks", {
      method: "POST",
      body: JSON.stringify(info),
    });
    console.log(data);
    console.log(error);
    return { data, error };
  }

  return { taskRegister };
});
