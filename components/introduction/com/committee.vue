<!-- 常设委员会 -->
<template>
  <div class="committee">
    <div class="commOne">
      <div v-for="item in committeelist1" :key="item.title" class="com-list">
        <div>
          <div class="comm-1">{{ item.title }}</div>
          <div class="comm-2">{{ item.unit }}</div>
        </div>
      </div>
    </div>
    <div class="commTwo">
      <div v-for="item in committeelist2" :key="item.title" class="com-list">
        <div>
          <div class="comm-1">{{ item.title }}</div>
          <div class="comm-2">{{ item.unit }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIntroduction } from "@/store/introduction";

const introductionStore = useIntroduction();
const committeelist1 = computed(() => introductionStore.committeelist1);
const committeelist2 = computed(() => introductionStore.committeelist2);
</script>

<style lang="less" scoped>
.committee {
  width: 1000px;
  height: 483px;
  background: #f3f3f3;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  display: flex;
  margin-top: 20px;
  // align-items: center;
  .com-list {
    margin-top: 20px;

    height: 82px;
  }
  .commOne {
    width: 612px;
    height: 388px;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
  }
  .commTwo {
    // width: 365px;
    height: 286px;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
  }
  .comm-1 {
    color: rgba(0, 42, 125, 1);
    line-height: 40px;
    font-size: 24px;
    font-weight: 600;
  }
  .comm-2 {
    color: rgba(0, 0, 0, 1);
    line-height: 40px;
    font-size: 20px;
  }
}
</style>
