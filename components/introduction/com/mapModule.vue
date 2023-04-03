<template>
  <div class="map">
    <div id="container"></div>
  </div>
</template>

<script setup>
const initMap = () => {
  const center = new qq.maps.LatLng(31.275091, 120.608716);
  var map = new qq.maps.Map(document.getElementById("container"), {
    // 地图的中心地理坐标。
    center: center,
    zoom: 13,
    disableDefaultUI: true, //禁止所有控件
  });
  var label = new qq.maps.Label({
    position: center,
    map: map,
    content: "江苏省苏州市姑苏区长吴路187号",
  });
  var marker = new qq.maps.Marker({
    position: center,
    map: map,
  });
};
onMounted(() => {
  initMap();
});
</script>

<style lang="less" scoped>
#container {
  /*地图(容器)显示大小*/
  width: 527px;
  height: 343px;
}
</style>
