<!--
 * @Description: 首页 -> 通知公告
 * @Author: scc
 * @Date: 2022-08-08 17:51:53
 * @LastEditTime: 2023-02-17 10:57:12
 * @LastEditors: scc_itcast scc15599065860@163.com
 * @FilePath: \dtsite-enterprise-platform\src\views\Menu\home\noticeAnnouncement.vue
-->
<template>
  <div class="noticeAnnouncement">
    <img :src="map.titleUrl" alt="" />
    <div class="ul">
      <div v-for="(item, index) in map.list" :key="index" class="li">
        <div class="type">【{{ item.type }} 】</div>
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
const map = computed(() => homeStore.noticeAnnouncement);
// const route = useRoute()

onMounted(() => {});
</script>

<style lang="less" scoped>
.noticeAnnouncement {
  width: 466px;
  height: 100%;
  img {
    display: block;
    width: 160px;
    height: 32px;
  }
  .ul {
    margin-top: 21px;
    height: 246px;
    // border: 1px solid black;
    .li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      font-family: MiSans-Regular, MiSans;
      font-weight: 400;
      color: #000000;
      height: 26px;
      margin-bottom: 18px;

      .type {
        // width: 42px;
        // width: 64px;
        height: 26px;
        font-size: 16px;
        font-family: MiSans-Regular, MiSans;
        font-weight: 400;
        color: #309fcc;
        line-height: 26px;
      }
      .line {
        width: 2px;
        height: 18px;
        background: #d9d9d9;
      }
      .desc {
        // width: 472px;
        padding-left: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 290px;
        // border: 1px solid red;
      }
      .time {
        margin-left: 10px;
        color: #999999;
      }
    }
  }
}
</style>
