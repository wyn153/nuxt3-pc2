<template>
  <div>
    <!-- <NuxtHeader /> -->
    <div v-if="!routeId" class="home">
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
        <img src="https://observe.zyf.life/safety_association_nuxt/imgs/common/footer.png" alt="" />
      </div>
    </div>
    <div v-else class="homeDetail">
      <HomeComDetail />
    </div>
    <!-- <NuxtFooter /> -->
  </div>
</template>

<script setup>
import { useHome } from "@/store/home";
const route = useRoute();
const routeId = ref(null);
const homeStore = useHome();
// const list = computed(() => homeStore.listIN);
const listID = ref(null);
const inApi = () => {
  console.log(listID.value, "listIDvalue");
};
onMounted(() => {});
watch(
  () => homeStore.listIN,
  (val) => {
    listID.value = val;
    inApi();
  },
  { deep: true, immediate: true },
);
watch(
  () => route.query.id,
  (val) => {
    routeId.value = val;
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
    min-width: 1200px;
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
