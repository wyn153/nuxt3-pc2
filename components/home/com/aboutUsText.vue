<!--
 * @Description: 首页 -> 关于我们文字
 * @Author: scc
 * @Date: 2022-08-08 17:51:53
 * @LastEditTime: 2023-02-17 10:57:12
 * @LastEditors: scc_itcast scc15599065860@163.com
 * @FilePath: \dtsite-enterprise-platform\src\views\Menu\home\aboutUsText.vue
-->
<template>
  <div class="aboutUsText">
    <img src="https://observe.zyf.life/safety_association_nuxt/imgs/home/aboutUsTitle.png" alt="" />
    <div class="content">
      {{ aboutUsText }}
    </div>
  </div>
</template>
<script setup>
import { useIntroduction } from "@/store/introduction";

const introductionStore = useIntroduction();
const aboutUsList = computed(() => introductionStore.aboutUsList);
const aboutUsText = `苏州市房屋安全协会由苏州市住房和城乡建设局主管，由在本市从事房屋安全鉴定、房屋结构加固、白蚁防治、建筑幕墙、房屋消防安全、绿色低碳节能建筑、科研机构及高等院校等单位组成的具有法人资格的专业性社团组织。截止目前，会员单位共${aboutUsList.value[0].number}家。且按章程产生了理事单位${aboutUsList.value[1].number}家，会长副会长单位${aboutUsList.value[2].number}家。`;
// const route = useRoute()

onMounted(() => {});
</script>
<style lang="less" scoped>
.aboutUsText {
  margin-left: 20px;
  img {
    display: block;
    width: 100%;
    margin-bottom: 26px;
  }
  .content {
    width: 100%;
    font-size: 16px;
    font-family: MiSans-Regular, MiSans;
    font-weight: 400;
    color: #333333;
    line-height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
  }
}
</style>
