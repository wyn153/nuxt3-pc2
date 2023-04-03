<template>
  <div class="articleL">
    <div class="articleL-title"><span>行业新闻</span></div>
    <div v-for="item in articleList" :key="item.id" class="articleL-t">
      <div class="articleL-1"></div>
      <div class="articleL-2">{{ item.type }}</div>
      <div class="articleL-3"></div>
      <p @click="onClickList(item.id)">
        <span>{{ item.title }}</span>
        <span class="articleL-p">{{ item.time }}</span>
      </p>
    </div>
    <!-- <p @click="onClickList(1)">文章111</p>
    <p @click="onClickList(2)">文章222</p> -->
  </div>
</template>

<script setup>
import { useIndustryNews } from "@/store/industryNews";

const industryNewsStore = useIndustryNews();
const articleList = computed(() => industryNewsStore.articleList);
const router = useRouter();

const onClickList = (id) => {
  router.push({
    path: "/industryNews",
    // name: 'home',
    query: {
      id: id,
    },
  });
  // console.log(id, 'id')
};
</script>

<style lang="less" scoped>
.articleL {
  width: 100%;
  display: flex;
  flex-direction: column;
  .articleL-title {
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
  .articleL-1 {
    width: 7px;
    height: 7px;
    background: #d9d9d9;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    margin-right: 10px;
  }
  .articleL-2 {
    width: 32px;
    height: 32px;
    font-size: 16px;
    font-family: Almendra-Regular, Almendra;
    font-weight: 400;
    color: #309fcc;
    line-height: 32px;
    margin-right: 20px;
  }
  .articleL-3 {
    width: 2px;
    height: 20px;
    background: #d9d9d9;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    margin-right: 20px;
  }
  // justify-content: center;
}
.articleL-t {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  // border: red 1px solid;
  .articleL-p {
    font-size: 16px;
    font-family: MiSans-Normal, MiSans;
    font-weight: 400;
    color: #999999;
    line-height: 32px;
  }
  p {
    width: 900px;
    height: 32px;
    font-size: 16px;
    font-family: MiSans-Normal, MiSans;
    font-weight: 400;
    color: #000000;
    line-height: 32px;
    display: flex;
    justify-content: space-between;
    span {
      line-height: 32px;
    }
    // border: red 1px solid;
  }
}
</style>
