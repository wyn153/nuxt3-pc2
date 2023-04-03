<!--
 * @Description: 首页 -> technicalStandard
 * @Author: scc
 * @Date: 2022-08-08 17:51:53
 * @LastEditTime: 2023-02-17 10:57:12
 * @LastEditors: scc_itcast scc15599065860@163.com
 * @FilePath: \dtsite-enterprise-platform\src\views\Menu\home\technicalStandard.vue
-->
<template>
  <div class="technicalStandard">
    <img :src="map.titleUrl" alt="" />
    <div class="ul">
      <div v-for="(item, index) in map.list" :key="index" class="li">
        <div class="line"></div>
        <div class="desc">{{ item.desc }}</div>
        <div class="time">{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useHome } from "@/store/home";

const homeStore = useHome();
const map = computed(() => homeStore.technicalStandard);
// const route = useRoute()

onMounted(() => {});
</script>

<style lang="less" scoped>
.technicalStandard {
  width: 466px;
  height: 100%;
  img {
    display: block;
    width: 160px;
    height: 32px;
  }
  .line {
    width: 4px;
    height: 4px;
    background: #309fcc;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    margin-right: 10px;
  }
  .ul {
    margin-top: 21px;
    height: 246px;
    .li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 16px;
      font-family: MiSans-Regular, MiSans;
      font-weight: 400;
      color: #000000;
      height: 26px;
      margin-bottom: 26px;
      .desc {
        width: 345px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .time {
        height: 26px;
        font-size: 16px;
        font-family: MiSans-Regular, MiSans;
        font-weight: 400;
        color: #999999;
        line-height: 26px;
        margin-left: 10px;
        color: #999999;
      }
    }
  }
}
</style>
