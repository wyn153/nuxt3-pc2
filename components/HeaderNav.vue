<template>
  <div class="headerNav">
    <div class="ul">
      <div v-for="(item, index) in headerNav" :key="index" class="li">
        <div :class="{ title: true, title_active: selectNavIndex === index }" @click="clickNav(item)">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCommon } from "@/store/common";
const route = useRoute();
const router = useRouter();

const commonStore = useCommon();
const selectNavIndex = computed(() => commonStore.selectNavIndex);
const headerNav = computed(() => commonStore.headerNav);
watch(
  () => route.name,
  (val) => {
    let index = headerNav.value.findIndex((f) => f.routeName == val);
    commonStore.setSelectNavIndex(index);
  },
  {
    immediate: true,
  },
);
// const onReload = inject("reload")
const clickNav = (item) => {
  console.log(selectNavIndex.value, "selectNavIndex");
  console.log(item.routeName, "item");
  // onReload()
  const { title, routeName, routeUrl } = item;
  if (routeName === "safety_association_nuxt-houseHospital") {
    window.open("http://114.219.56.63:8086/#/");
    return;
  }
  router.push({
    path: routeUrl,
  });
};
onMounted(() => {});
</script>

<style lang="less">
.headerNav {
  width: 100%;
  height: 50px;
  background: #2070ad;
  display: flex;
  justify-content: center;
  // overflow: hidden;
  .ul {
    width: 1000px;
    // min-width: 1000px;
    height: 100%;
    display: flex;
    .li {
      flex: 1;
      height: 100%;
      .title {
        width: 100%;
        height: 100%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
      }
      .title_active {
        background: #309fcc;
      }
    }
  }
}
</style>
