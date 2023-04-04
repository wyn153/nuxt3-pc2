<template>
  <div class="footer">
    <img class="footer-img" src="https://observe.zyf.life/safety_association_nuxt/imgs/common/flag.png" alt="" />
    <div class="footer-b">
      <div>
        <p>主办单位：苏州市房屋安全协会</p>
        <p>技术支持：中亿丰数字科技集团有限公司</p>
        <p>ICP备案编号：</p>
      </div>
      <div>
        <p>电 话：0512-68657031</p>
        <p>地 址：江苏省苏州市姑苏区长吴路187号</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { envjudge } from '@/utils/common'
// // import svgicon from '@/icons/SvgIcon.vue'

// let wxMobile = envjudge()
// onMounted(() => {});
</script>

<style lang="less">
.footer {
  left: 0;
  width: 100%;
  min-width: 1200px;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: #2070ad;
  border-radius: 0px 0px 0px 0px;
  opacity: 1;
  .footer-img {
    width: 66px;
    height: 66px;
    margin-right: 30px;
  }
  .footer-b {
    width: 474px;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    height: 68px;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;
    font-size: 12px;
    font-family: MiSans-Normal, MiSans;
    color: #ffffff;
    p {
      font-weight: 400;
      height: 25px;
    }
  }
}
</style>
