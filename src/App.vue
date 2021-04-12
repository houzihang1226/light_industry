<template>
  <div id="app">
    <router-view v-loading="flag" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: true,
      timer: null,
      num: 2,
    };
  },
  created() {
    console.log(this);
    this.getTimer();
  },
  methods: {
    getTimer() {
      let that = this;
      that.timer = window.setInterval(() => {
        console.log("123");
        if (that.num != 0) {
          that.flag = true;
          that.num--;
        } else {
          window.clearInterval(that.timer);
          that.timer = null;
          that.flag = false;
        }
      }, 1000);
    },
  },
};
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "微软雅黑";
}
.el-table {
  margin-top: 30px;
}
.el-pagination {
  margin-top: 30px;
  float: right;
}
</style>
