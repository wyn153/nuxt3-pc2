<template>
  <div>
    <!-- <NuxtHeader /> -->
    <div class="home" v-if="!routeId">
      <!-- <div class="home" > -->
      <div class="row row1">
        <div class="wrapper">
          <HomeComAboutUsImg />
          <HomeComAboutUsText />
        </div>
      </div>
      <div class="row">
        <HomeComSwiperWheel class="row2" />
      </div>
      <div class="row row3">
        <div class="wrapper">
          <HomeComNoticeAnnouncement></HomeComNoticeAnnouncement>
          <HomeComExaminationTraining></HomeComExaminationTraining>
        </div>
      </div>
      <div class="row row4">
        <div class="wrapper">
          <HomeComPoliciesRegulations></HomeComPoliciesRegulations>
          <HomeComTechnicalStandard></HomeComTechnicalStandard>
        </div>
      </div>
      <div class="row row5">
        <img src="/imgs/common/footer.png" alt="" />
      </div>
    </div>
    <div class="homeDetail" v-else>
      <HomeComDetail />
    </div>
    <!-- <NuxtFooter /> -->
  </div>
</template>

<script setup>
const route = useRoute();
const routeId = ref(null);
const { data: count } = await useFetch("http://10.201.97.29:9099/api/getMemberManageList");
onMounted(() => {
  console.log(count, "count");
});
watch(
  () => route.query.id,
  (val) => {
    routeId.value = val;
    // console.log(val, src.value);
  },
  {
    immediate: true,
  },
);
</script>

<style lang="less" scoped>
.homeDetail {
  width: 100%;
  display: flex;
  justify-content: center;
}
.home {
  width: 100%;
  .row {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    overflow: hidden;
    .wrapper {
      width: 1000px;
      min-width: 1000px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .row1 {
    margin-top: 22px;
    margin-bottom: 66px;
    height: 348px;
  }
  .row2 {
    // margin-top: 26px;
    margin-bottom: 76px;
  }
  .row3 {
    margin-bottom: 59px;
    height: 300px;
  }
  .row4 {
    margin-top: 42px;
    height: 346px;
  }
  .row5 {
    margin-top: 40px;
    margin-bottom: 40px;
    // margin: 40px 0;
  }
}
</style>
