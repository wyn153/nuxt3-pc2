<template>
  <div>
    <!-- <NuxtHeader /> -->
    <div class="InMembershipEnquiry">
      <MembershipEnquiryComTable />
    </div>
    <!-- <NuxtFooter /> -->
  </div>
</template>

<script setup>
onMounted(() => {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", appHeight);
  appHeight();
  // console.log('执行了', src.value);
});
</script>

<style lang="less" scoped>
.InMembershipEnquiry {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(var(--app-height) - 410px);
  // height: -webkit-fill-available;
}
</style>
