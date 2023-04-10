<template>
  <div class="app">
    <NuxtHeader class="appHeader" />
    <NuxtPage class="appHome"></NuxtPage>
    <NuxtFooter class="appFooter" />
  </div>
</template>
<script setup>
onMounted(() => {
  // if (typeof window !== "undefined") {
  //   const percentageOn1 = (window.screen.width / 1920) * 170;
  //   document.body.style.zoom = percentageOn1 + "%";
  //   document.body.style.fontSize = "9px";
  // }
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", appHeight);
  appHeight();
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
