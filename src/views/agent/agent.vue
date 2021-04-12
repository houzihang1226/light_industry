<template>
  <div class="agent">
    <!-- 按钮 -->
    <div class="header">
      <div class="input">
        <el-input v-model="input" placeholder="请输入标题"></el-input>
      </div>
      <div class="button">
        <el-button icon="el-icon-search" type="primary" @click="num_"
          >查询</el-button
        >
        <el-button icon="el-icon-plus">新建</el-button>
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
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        label="序号"
        align="center"
        prop="num"
        width="55"
      ></el-table-column>
      <el-table-column
        prop="agename"
        label="代理商名称"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        align="center"
        prop="level"
        label="级别"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="姓名"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="photo"
        label="电话"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="member"
        label="团队成员"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="people"
        label="累计推广人数"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="profit"
        label="累计收益"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="drawal"
        label="已提现收益"
      ></el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="edit(scope)">编辑</el-button>
          <el-button type="text">删除</el-button>
          <el-button type="text">重置密码</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      @current-change="currentChange"
      layout="prev, pager, next"
      :total="1000"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "agent",
  data() {
    return {
      loading: false,
      obj: {
        a: {
          num: 1,
        },
      },
      input: "",
      tableData: [
        {
          num: 1,
          agename: "北京XXXXXX贸易公司",
          level: "一级",
          name: "张三丰",
          photo: "13911111111",
          member: 3,
          people: "4",
          profit: "234234",
          drawal: "234234",
        },
      ],
    };
  },
  watch: {
    ["obj.a.num"]() {
      console.log("变化了");
    },
  },
  methods: {
    currentChange(e) {
      console.log("点击页", e);
    },
    edit(e) {
      console.log(e);
    },
    handleSelectionChange(e) {
      console.log(e);
    },
    num_() {
      this.obj.a.num += 1;
    },
  },
};
</script>
<style lang='less' scoped>
.agent {
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