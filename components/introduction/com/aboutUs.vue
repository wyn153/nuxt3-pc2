<!-- 关于我们 -->
<template>
  <div class="aboutUs">
    <div class="introduction-title">
      <img src="https://observe.zyf.life/safety_association_nuxt/imgs/introduction/titleUse.png" alt="" />
      <!-- <span>关于我们</span> -->
    </div>
    <div class="aboutUs-content">
      <div class="aboutUs-text">
        {{ aboutUsText }}
      </div>
      <div class="aboutUs-R">
        <div v-for="item in aboutUsList" :key="item.title" :class="'aboutUs-' + item.id">
          <div class="aboutUs-list">
            <p class="aboutUsList-p">{{ item.title }}</p>
            <img :src="item.icon" />
            <p class="aboutUsList-b">
              <span class="aboutUsList-b1">{{ item.number }}</span>
              <span class="aboutUsList-b2">{{ item.state }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useIntroduction } from "@/store/introduction";

const introductionStore = useIntroduction();
const aboutUsList = computed(() => introductionStore.aboutUsList);
const aboutUsText = `苏州市房屋安全协会由苏州市住房和城乡建设局主管，由在本市从事房屋安全鉴定、房屋结构加固、白蚁防治、建筑幕墙、房屋消防安全、绿色低碳节能建筑、科研机构及高等院校等单位组成的具有法人资格的专业性社团组织。截止目前，会员单位共${aboutUsList.value[0].number}家。且按章程产生了理事单位${aboutUsList.value[1].number}家，会长副会长单位${aboutUsList.value[2].number}家。`;
</script>

<style lang="scss" scoped>
.introduction-title {
  margin-top: 40px;
}
.aboutUs-content {
  display: flex;
  width: 1000px;
  .aboutUs-text {
    width: 381px;
    font-size: 16px;
    font-family: MiSans-Regular, MiSans;
    font-weight: 400;
    color: #333333;
    line-height: 32px;
    margin-top: 33px;
  }
}

.aboutUs-R {
  display: flex;
  justify-content: space-around;
  .aboutUs-list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 239px;
    img {
      width: 60px;
      height: 60px;
    }
    .aboutUsList-p {
      height: 28px;
      font-size: 20px;
      font-family: Almendra-Regular, Almendra;
      font-weight: 400;
      color: #ffffff;
      line-height: 32px;
    }
    .aboutUsList-b {
      width: 95px;
      height: 33px;
      line-height: 36px;
      background: #ffffff;
      border-radius: 5px 5px 5px 5px;
      opacity: 1;
      text-align: center;
      .aboutUsList-b1 {
        font-weight: 500;
        font-size: 24px;
        margin-right: 2px;
      }
      .aboutUsList-b2 {
        font-size: 15px;
        font-weight: 400;
      }
    }
  }
  .aboutUs-1 {
    width: 179px;
    height: 239px;
    background: #2d6da9;
    border-radius: 4px 4px 4px 4px;
    opacity: 1;
    margin-right: 21px;
    margin-left: 40px;
  }
  .aboutUs-2 {
    width: 179px;
    height: 239px;
    background: #58a1ce;
    border-radius: 4px 4px 4px 4px;
    opacity: 1;
    margin-right: 21px;
  }
  .aboutUs-3 {
    width: 178px;
    height: 239px;
    background: #2d6da9;
    border-radius: 4px 4px 4px 4px;
    opacity: 1;
  }
}
</style>
