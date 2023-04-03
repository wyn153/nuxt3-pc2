<template>
  <div>
    <!-- <NuxtHeader /> -->
    <div class="industryNews">
      <div class="articleList" v-if="!routeId">
        <IndustryNewsComArticleList />
      </div>
      <div class="articleDetail" v-else>
        <IndustryNewsComArticleDetail />
      </div>
    </div>
    <!-- <NuxtFooter /> -->
  </div>
</template>

<script setup>
const route = useRoute();
const routeId = ref(null);
// const src = ref(null)
// const src = `http://127.0.0.1:5500/public/static/detail/detail${routeId.value}.html`

// const route = useRoute()
watch(
  () => route.query.id,
  (val) => {
    // if (val) {
    routeId.value = val;
    // console.log(val, src.value);
    // }
  },
  {
    immediate: true,
  },
);
onMounted(() => {
  // console.log('执行了', src.value);
});
</script>

<style lang="less" scoped>
.industryNews {
  min-width: 1200px;
  // height: 80vh;
  min-height: calc(100vh - 410px);
  // margin: auto;
  // width: 100%;
  display: flex;
  justify-content: center;
}
.articleList {
  width: 1000px;
  // border: 1px solid black;
  // display: flex;
  // justify-content: center;
}
.articleDetail {
  width: 1000px;
  // display: flex;
  // justify-content: center;
}
</style>
