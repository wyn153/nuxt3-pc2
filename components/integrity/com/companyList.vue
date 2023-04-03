<!--
 * @Description: 诚信建设 -> 列表
 * @Author: scc
 * @Date: 2022-08-08 17:51:53
 * @LastEditTime: 2023-02-17 10:57:12
 * @LastEditors: scc_itcast scc15599065860@163.com
 * @FilePath: \dtsite-enterprise-platform\src\views\Menu\integrityConstruction\index.vue
-->
<template>
  <div class="companyList">
    <div class="companyList-title"><span>诚信建设</span></div>
    <div class="com-list">
      <div
        v-for="(item, index) in companyList"
        :key="item.title"
        :class="'com' + index"
        class="com-b"
      >
        <img :src="item.icon" alt="" />
        <p class="com-p">{{ item.title }}</p>
        <p class="com-t">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useIntegrity } from "@/store/integrityConstruction";

const integrityStore = useIntegrity();
const companyList = computed(() => integrityStore.companyList);
onMounted(() => {});
</script>
<style lang="less" scoped>
.companyList {
  width: 1000px;
  .companyList-title {
    width: 145px;
    height: 50px;
    background: #2d6da9;
    border-radius: 2px 2px 2px 2px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 44px 0 30px 0;
    span {
      height: 32px;
      font-size: 24px;
      font-family: Almendra-Bold, Almendra;
      font-weight: bold;
      color: #ffffff;
      line-height: 32px;
    }
  }
  .com-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .com-b {
      width: 492px;
      height: 252px;
      background: #f3f3f3;
      margin-bottom: 17px;
      padding: 17px;
      .com-p {
        height: 32px;
        font-size: 16px;
        font-family: MiSans-Bold, MiSans;
        font-weight: bold;
        color: #000000;
        line-height: 32px;
      }
      .com-t {
        font-size: 12px;
        font-family: MiSans-Normal, MiSans;
        font-weight: 400;
        color: #000000;
        margin-top: 2px;
        // height: 140px;
        line-height: 17px;
        display: flex;
      }
      img {
        height: 50px;
      }
    }
    .com1,
    .com0 {
      .com-t {
        line-height: 22px;
      }
    }
    .com2,
    .com3 {
      height: 274px;
      .com-t {
        line-height: 20px;
      }
    }

    .com4 {
      width: 1000px;
      height: 210px;
      margin-bottom: 110px;
      .com-t {
        line-height: 22px;
      }
    }
  }
}
</style>
