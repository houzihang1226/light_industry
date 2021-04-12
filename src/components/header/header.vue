<template>
  <div class="">
    <span class="el-icon-menu icon"></span>
    <!-- 文字 -->
    <el-breadcrumb
      separator="/"
      style="display: inline-block; margin-left: 30px"
      class="text"
    >
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-if="$route.path != '/'">{{
        routeName
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown class="dropdown" @command="handleClick">
      <span class="el-dropdown-link">
        <img class="headIcon" src="../../assets/photo.gif" alt />
        <!-- <span class="userName">{{ userInfo.name }}</span> -->
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-setting" command="setting"
          >个人设置</el-dropdown-item
        >
        <el-dropdown-item icon="el-icon-unlock" command="logout"
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "WHuiHead",
  data() {
    return {
      routeName: null,
    };
  },
  watch: {
    $route() {
      this.routeName = this.$route.meta.title;
    },
  },
  created() {
    console.log(this.$route);
    this.routeName = this.$route.meta.title;
  },
  methods: {
    setting() {
      console.log("点击了设置");
    },
    logout() {
      console.log("点击了退出");
    },
    handleClick(e) {
      console.log(e);
      this[e]();
    },
  },
};
</script>
<style lang='less' scoped>
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
    border-radius: 50%;
  }
  .userName {
    font-weight: bold;
    vertical-align: middle;
    margin-left: 5px;
  }
}
</style>