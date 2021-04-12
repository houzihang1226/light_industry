<template>
  <el-container class="container">
    <el-aside width="200px">
      <w-hui />
    </el-aside>
    <el-container>
      <el-header>
        <w-hui-head></w-hui-head>
      </el-header>
      <el-main style="background: #f6f6f6">
        <el-card>
          <router-view></router-view>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import WHui from "../../components/aside/Hui-aside.vue";
import WHuiHead from "../../components/header/header";
export default {
  name: "home",
  components: {
    WHui: WHui,
    WHuiHead,
  },
  data() {
    return {
      isOpen: true,
      userInfo: {},
    };
  },
  methods: {},
};
</script>

<style  lang='less'>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .el-aside {
    background: #002033;
    .logo {
      width: 100%;
      height: 60px;
      color: #fff;
      line-height: 60px;
      text-align: center;
    }
  }
  .el-header {
    line-height: 60px;
    border-bottom: 1px solid #ddd;
    .icon {
      font-size: 30px;
      vertical-align: middle;
    }
    .text {
      margin-left: 10px;
      vertical-align: middle;
    }
    .dropdown {
      float: right;
      .headIcon {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .userName {
        font-weight: bold;
        vertical-align: middle;
        margin-left: 5px;
      }
    }
  }
}
.el-card {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
}
</style>
