<!--
 * @Description: 首页 -> 关于我们图片
 * @Author: scc
 * @Date: 2022-08-08 17:51:53
 * @LastEditTime: 2023-02-17 10:57:12
 * @LastEditors: scc_itcast scc15599065860@163.com
 * @FilePath: \dtsite-enterprise-platform\src\views\Menu\home\aboutUsImg.vue
-->
<template>
  <div class="aboutUsImg">
    <el-carousel>
      <el-carousel-item v-for="(item, index) in aboutUsImgs" :key="index">
        <img :src="item.url" @click="onClickList(item.id)" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup>
import { useHome } from "@/store/home";
// import { ElMessage } from 'element-plus'

const router = useRouter();
const homeStore = useHome();
const aboutUsImgs = computed(() => homeStore.aboutUsImgs);
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
onMounted(() => {
  // console.log(aboutUsImgs.value, "aboutUsImgs");
});
</script>
<style lang="less">
.el-carousel__container {
  height: 100%;
}
</style>
<style lang="less" scoped>
.aboutUsImg {
  height: 100%;
  width: 2200px;
  cursor: pointer;
}
.el-carousel,
.van-swipe {
  width: 638px;
  height: 100%;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
