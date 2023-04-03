<template>
  <div>
    <!-- <NuxtHeader /> -->
    <div class="introduction">
      <div class="in-aboutUs">
        <IntroductionComAboutUs></IntroductionComAboutUs>
      </div>
      <div class="in-title organization-title">
        <img src="/imgs/introduction/title2.png" alt="" />
        组织架构
      </div>
      <div class="in-organization">
        <IntroductionComOrganization></IntroductionComOrganization>
      </div>
      <div class="in-title serviceAim-title">
        <img src="/imgs/introduction/title3.png" alt="" />
        服务宗旨
      </div>
      <div><IntroductionComServiceAim></IntroductionComServiceAim></div>
      <div class="in-title committee-title">
        <img src="/imgs/introduction/title4.png" alt="" />
        常设委员会
      </div>
      <div class="in-committee">
        <IntroductionComCommittee></IntroductionComCommittee>
      </div>
      <div class="in-title standingBody-title">
        <img src="/imgs/introduction/title5.png" alt="" />
        常设机构
      </div>
      <div class="standingBody">
        <div>
          <img src="/imgs/introduction/standingBody.png" alt="" />
        </div>
        <div><IntroductionComMapModule></IntroductionComMapModule></div>
      </div>
    </div>
    <!-- <NuxtFooter /> -->
  </div>
</template>

<script setup>
onMounted(() => {});
</script>

<style lang="less" scoped>
.standingBody {
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin-bottom: 59px;
  img {
    width: 389px;
    height: 392px;
  }
}
.in-title {
  display: flex;
  align-items: center;
  font-size: 28px;
  font-family: Alimama ShuHeiTi-Bold, Alimama ShuHeiTi;
  font-weight: bold;
  color: #000000;
  line-height: 32px;
  margin-top: 44px;
  width: 1000px;
  // margin: 20px 0;
  img {
    margin-right: 10px;
    width: 68px;
    height: 68px;
  }
}
.organization-title {
  margin: 48px 0 20px 0;
}
.serviceAim-title {
  margin: 48px 0 67px 0;
}
.committee-title {
  margin: 120px 0 46px 0;
}
.standingBody-title {
  margin: 60px 0 60px 0;
}
.introduction {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.in-aboutUs {
  display: flex;
  justify-content: center;
}
.in-committee {
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f3f3f3;
}
.in-organization {
  width: 100%;
  height: 643px;
  background: #f3f3f3;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  display: flex;
  justify-content: center;
}
</style>
