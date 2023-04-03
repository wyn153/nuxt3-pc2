<!-- 服务宗旨 -->
<template>
  <div class="serviceAim">
    <div
      v-for="item in serviceAimList"
      :key="item.text"
      class="serviceAim-list"
    >
      <img :src="item.icon" />
      <p class="aboutUsList-text">{{ item.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { useIntroduction } from "@/store/introduction";

const introductionStore = useIntroduction();
const serviceAimList = computed(() => introductionStore.serviceAimList);
</script>

<style lang="less" scoped>
.serviceAim {
  width: 1000px;
  // height: 390px;
  display: flex;
  justify-content: space-around;
  .serviceAim-list {
    width: 235px;
    height: 390px;
    background: #f3f3f3;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 4px 4px 4px 4px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    align-items: center;
    padding: 30px 20px 0 20px;
    .aboutUsList-text {
      height: 40%;
      font-size: 16px;
      font-family: MiSans-Normal, MiSans;
      font-weight: 400;
      color: #000000;
      line-height: 24px;
      margin-top: 40px;
    }
    img {
      width: 111px;
      height: 124px;
    }
  }
}
</style>
