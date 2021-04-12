<template>
  <div>
    <div class="logo">管理平台</div>
    <el-menu
      :default-active="$route.path"
      background-color="#002033"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="false"
      :collapse-transition="false"
      style="border-right: none"
      router
    >
      <el-submenu index="1">
        <template slot="title">代理商管理</template>
        <el-menu-item-group>
          <el-menu-item index="/agent">代理商</el-menu-item>
          <el-menu-item index="/class">推广课程</el-menu-item>
          <el-menu-item index="/record">推广记录</el-menu-item>
          <el-menu-item index="/drawal">提现管理</el-menu-item>
          <el-menu-item index="/sign">报名管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">系统管理</template>
        <el-menu-item-group>
          <el-menu-item index="/organ">组织管理</el-menu-item>
          <el-menu-item index="/role">角色管理</el-menu-item>
          <el-menu-item index="/user">用户管理</el-menu-item>
          <el-menu-item index="/setsys">系统设置</el-menu-item>
          <el-menu-item index="/syslog">系统日志</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "hui-aside",
  data() {
    return {};
  },
};
</script>
<style lang='less' scoped>
.logo {
  width: 100%;
  height: 60px;
  color: #fff;
  line-height: 60px;
  text-align: center;
}
</style>