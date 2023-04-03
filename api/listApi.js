export default defineNuxtComponent({
  fetchKey: "hello",
  async asyncData() {
    return {
      hello: await $fetch("/api/getMemberManageList"),
    };
  },
});
