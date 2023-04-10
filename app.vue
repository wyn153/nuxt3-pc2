<template>
  <div class="app">
    <NuxtHeader class="appHeader" />
    <NuxtPage class="appHome"></NuxtPage>
    <NuxtFooter class="appFooter" />
  </div>
</template>
<script setup>
import { useHome } from "@/store/home";
const homeStore = useHome();

onMounted(() => {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", appHeight);
  appHeight();
  homeStore.getApiHome();
});
</script>
<style lang="less">
html,
body {
  height: 100%;
}
#__nuxt {
  height: 100%;
}
#app {
  height: 100%;
}
.appHome {
  flex: 1;
  min-width: 1200px;
  // min-height: 90vh;
  margin: 0 auto;
  // background: black;
}
.appHeader {
  min-width: 1200px;
}
.appFooter {
  min-width: 1200px;
}
</style>
