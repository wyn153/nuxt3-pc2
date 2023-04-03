<!--
 * @Description: 首页 -> 考试培训
 * @Author: scc
 * @Date: 2022-08-08 17:51:53
 * @LastEditTime: 2023-02-17 10:57:12
 * @LastEditors: scc_itcast scc15599065860@163.com
 * @FilePath: \dtsite-enterprise-platform\src\views\Menu\home\examinationTraining.vue
-->
<template>
  <div class="examinationTraining">
    <img :src="map.titleUrl" alt="" />
    <div class="ul">
      <div v-for="(item, index) in map.list" :key="index" class="li">
        <div class="line"></div>
        <div class="desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useHome } from "@/store/home";

const homeStore = useHome();
const map = computed(() => homeStore.examinationTraining);
// const route = useRoute()

onMounted(() => {});
</script>

<style lang="less" scoped>
.examinationTraining {
  width: 460px;
  height: 100%;
  img {
    display: block;
    width: 160px;
    height: 32px;
  }
  .ul {
    height: 244px;
    margin-top: 24px;
    .line {
      width: 4px;
      height: 4px;
      background: #309fcc;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      margin-right: 10px;
    }
    .li {
      height: 52px;
      border-radius: 2px;
      // border: 1px solid #96adbe;
      margin-bottom: 12px;
      padding: 0 12px;
      display: flex;
      align-items: center;
      background-color: rgba(243, 243, 243, 1);
      .desc {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 52px;
        font-size: 14px;
        font-family: MiSans-Regular, MiSans;
        font-weight: 400;
        color: #000000;
      }
    }
  }
}
</style>
