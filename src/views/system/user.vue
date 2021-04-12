<template>
  <div class="user">
    <div class="header">
      <div>
        <el-button>新建</el-button>
        <el-button>删除</el-button>
      </div>
      <div style="flex: 1; margin-left: 30px">
        <el-input placeholder="请输入组织名称"></el-input>
      </div>
      <div style="flex: 1; margin-left: 30px">
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <el-table
      border
      height="500px"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      v-loading="loading"
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" align="center"></el-table-column>
      <el-table-column
        label="用户名"
        align="center"
        prop="user"
      ></el-table-column>
      <el-table-column
        label="所属组织"
        align="center"
        prop="name"
      ></el-table-column>
      <el-table-column
        label="负责人"
        align="center"
        prop="user"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="创建时间"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="edit(scope)">启用</el-button>
          <el-button type="text" @click="edit(scope)">重置密码</el-button>
          <el-button type="text" @click="edit(scope)">权限管理</el-button>
          <el-button type="text" @click="edit(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
      loading: false,
      value1: "",
      input: "",
      tableData: [
        {
          name: "运维部",
          user: "张三",
          date: "2020-10-02",
        },
      ],
    };
  },
  methods: {
    edit(e) {
      console.log(e);
    },
    handleSelectionChange(e) {
      console.log(e);
    },
  },
};
</script>
<style lang='less' scoped>
.header {
  display: flex;
}
</style>