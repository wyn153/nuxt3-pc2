<template>
  <div>
    <!-- <NuxtHeader /> -->
    <div class="integrityConstruction">
      <IntegrityComCompanyList></IntegrityComCompanyList>
    </div>
    <!-- <NuxtFooter /> -->
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.integrityConstruction {
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: calc(var(--app-height) - 410px);
  // height: -webkit-fill-available;
}
</style>
