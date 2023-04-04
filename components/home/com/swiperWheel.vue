<!--
 * @Description: 首页 -> 跑马灯
 * @Author: scc
 * @Date: 2022-08-08 17:51:53
 * @LastEditTime: 2023-02-17 10:57:12
 * @LastEditors: scc_itcast scc15599065860@163.com
 * @FilePath: \dtsite-enterprise-platform\src\views\Menu\home\swiper.vue
-->
<template>
  <div class="swiperWheel">
    <swiper class="swiperWheel_table" :modules="modules" :loop="true" :autoplay="{ disableOnInteraction: false }" :slides-per-view="4">
      <swiper-slide v-for="(item, index) in swiperImgs" :key="index">
        <div class="li">
          <img :src="item.url" alt="" @click="onClickList(item.id)" />
          <div class="absolute">
            <div class="desc">{{ item.desc }}</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
// import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from "swiper";

// import "swiper/css";
import { useHome } from "@/store/home";
// import { ElMessage } from 'element-plus'

let modules = [Autoplay];
const router = useRouter();

const homeStore = useHome();
const swiperImgs = computed(() => homeStore.swiperImgs);
// const route = useRoute()
const onClickList = (id) => {
  if (id === "0") {
    ElMessage({
      message: "暂未发现该文章.",
      type: "warning",
    });
  } else {
    router.push({
      path: "/safety_association_nuxt/home",
      // name: 'home',
      query: {
        id: id,
      },
    });
  }
  // console.log(id, 'id')
};
onMounted(() => {});
</script>
<style lang="less" scoped>
.swiperWheel {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 224px;
  overflow: hidden;
  .swiperWheel_table {
    min-width: 1000px;
    width: 1000px;
  }
  .li {
    width: 250px;
    height: 100%;
    // padding: 0 14px;
    padding-right: 10px;
    position: relative;
    // border: red 1px solid;
    cursor: pointer;
    img {
      display: block;
      width: 100%;
      height: 163px;
    }
    .absolute {
      width: 250px;

      // height: 42px;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
      // background: #005495;
      border-radius: 2px;
      padding: 0 10px;
      .desc {
        font-size: 15px;
        font-family: MiSans-Light, MiSans;
        font-weight: 400;
        color: #000000;
        text-align: center;
      }
    }
  }
}
</style>
