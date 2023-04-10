<template>
  <div class="articleD">
    <div v-html="htmlLabels"></div>
    <!-- <iframe :src="srcId" style="width: 62%; height: 100vh"></iframe> -->
  </div>
</template>

<script setup>
import { htmlList } from "@/detail/data";
import { htmlList2 } from "@/detail/data2";
const html1 = ref(htmlList);
const html2 = ref(htmlList2);
const htmlLabels = ref(null);
const route = useRoute();
const routeId = ref(route.query.id);
// const src = 'http://127.0.0.1:5500/public/static/detail/detail1.html'
// const props = defineProps({
//   htmlLabels: String | Number
// })
// let { srcId } = toRefs(props)
onMounted(() => {
  if (routeId.value === "1") {
    htmlLabels.value = html1.value; // 大会
  }
  if (routeId.value === "2") {
    htmlLabels.value = html2.value; // 医院来了
  }
});
</script>

<style lang="less" scoped>
.articleD {
  width: 1000px;
  // border: red 1px solid;
  // overflow: hidden;
  // height: 70vh;
}
</style>
