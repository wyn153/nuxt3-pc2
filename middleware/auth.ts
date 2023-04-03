export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth");
  return navigateTo("/home");
});
