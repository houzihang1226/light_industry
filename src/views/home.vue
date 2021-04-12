<template>
  <div class="contention">
    <h1>欢迎进入后台管理</h1>
    <img src="../assets/welcome.jpg" alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang='less'>
.contention {
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>