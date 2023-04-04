export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth");
  return navigateTo("/safety_association_nuxt/home");
});
