<template>
  <div class="syslog">
    <div class="title">
      <el-input style="width: 300px"></el-input>
      <el-button type="primary">搜索</el-button>
    </div>
    <el-table
      border
      height="500px"
      :data="tableData"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      v-loading="loading"
    >
      <el-table-column prop="type" align="center" label="日志类型" width="180">
      </el-table-column>
      <el-table-column prop="name" align="center" label="请求路径" width="180">
      </el-table-column>
      <el-table-column prop="user" align="center" label="负责人">
      </el-table-column>
      <el-table-column prop="userType" align="center" label="操作类型">
      </el-table-column>
      <el-table-column prop="Ip" align="center" label="访问IP">
      </el-table-column>
      <el-table-column prop="date" align="center" label="创建时间">
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "syslog",
  data() {
    return {
      loading: false,
      tableData: [
        {
          type: "信息",
          date: "2016-05-02",
          name: "/admin/channel/tree",
          user: "张三",
          userType: "查询",
          Ip: "183.193.139.15",
        },
      ],
    };
  },
};
</script>
<style lang='less' scoped>
.syslog {
  .title {
    display: flex;
    .el-button {
      margin-left: 20px;
    }
  }
}
</style>