<template>
  <div>
    <div class="header">
      <div class="header_img">
        <img :src="bannerImg" alt="" />
      </div>
    </div>
    <HeaderNav></HeaderNav>
  </div>
</template>

<script setup>
// import HeaderNav from "./headerNav.vue";
import { useCommon } from "@/store/common";
const commonStore = useCommon();
const bannerImg = computed(() => commonStore.bannerImg);
// const bannerImg = ''
onMounted(() => {});
</script>

<style lang="less">
.header {
  margin: 0 auto;
  .header_img {
    width: 100%;
    height: 260px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    img {
      // border: 1px solid red;
      display: block;
      width: 100%;
      height: 100%;
      max-width: 1920px;
      max-height: 261px;
      min-width: 1920px;
      min-height: 261px;
    }
  }
}
</style>
