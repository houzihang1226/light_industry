<template>
  <div class="sign">
    <div class="header">
      <div class="input">
        <el-input v-model="input" placeholder="请输入学员"></el-input>
      </div>
      <div class="input">
        <el-input v-model="input" placeholder="请输入学员"></el-input>
      </div>
      <div class="button">
        <el-button icon="el-icon-search" type="primary">查询</el-button>
      </div>
    </div>
    <div style="margin-top: 30px">
      <el-button>开通账号</el-button>
      <el-button>删除</el-button>
      <el-button>导出</el-button>
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
        prop="number"
        label="订单编号"
        align="center"
        show-overflow-tooltip
      ></el-table-column>

      <el-table-column
        align="center"
        prop="name"
        label="学员姓名"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="photo"
        label="联系电话"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="member"
        label="成交时间"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="agename"
        label="代理商"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="推广人"
      ></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "sign",
  data() {
    return {
      loading: false,
      input: "",
      tableData: [
        {
          num: 1,
          agename: "北京XXXXXX贸易公司",
          name: "张三丰",
          photo: "13911111111",
          member: "2020-03-12",
          number: "SN23421341242314",
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
.sign {
  .header {
    display: flex;

    div {
      flex: 1;
      margin-right: 30px;
      &.button {
        flex: 2;
        display: flex;
        justify-content: flex-end;
        margin: 0;
      }
    }
  }
}
</style>