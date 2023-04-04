<template>
  <div class="app">
    <NuxtHeader class="appHeader" />
    <NuxtPage class="appHome"></NuxtPage>
    <NuxtFooter class="appFooter" />
  </div>
</template>
<script setup>
// onMounted(() => {
//   if (typeof window !== "undefined") {
//     var percentageOn1 = (window.screen.width / 1920) * 190;
//     document.body.style.zoom = percentageOn1 + "%";
//     document.body.style.fontSize = percentageOn1 + "%";
//   }
// });
</script>
<style lang="less">
.appHome {
  min-width: 1200px;
  min-height: calc(100vh - 110px);
  margin: 0 auto;
}
.appHeader {
  min-width: 1200px;
}
.appFooter {
  min-width: 1200px;
}
</style>
