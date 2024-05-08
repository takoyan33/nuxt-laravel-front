import { useAuthStore } from "~/stores/useAuthStore";

export default defineNuxtRouteMiddleware((to, form) => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn) {
    return navigateTo("/login", { replace: true});
  }
});
