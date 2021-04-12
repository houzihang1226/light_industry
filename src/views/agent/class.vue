<template>
  <div class="class">
    <!-- 按钮 -->
    <div class="header">
      <div class="input">
        <el-input v-model="input" placeholder="请输入标题"></el-input>
      </div>
      <div class="button">
        <el-button icon="el-icon-search" type="primary">查询</el-button>
        <el-button icon="el-icon-plus">新建</el-button>
      </div>
    </div>
    <el-table
      border
      height="500px"
      :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      v-loading="loading"
      align="center"
      ref="multipleTable"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        label="序号"
        align="center"
        prop="num"
        width="55"
      ></el-table-column>
      <el-table-column
        prop="classname"
        label="课程名称"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        prop="number"
        label="价格"
        align="center"
      ></el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="edit(scope)">编辑</el-button>
          <el-button type="text">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "class",
  data() {
    return {
      loading: false,
      input: "",
      tableData: [
        {
          num: 1,
          classname: "北京XXXXXX贸易公司",
          number: "3000",
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
.class {
  .header {
    display: flex;

    div {
      flex: 1;
      &.button {
        display: flex;
        .el-button {
          margin-left: 30px;
        }
      }
    }
  }
}
</style>