<template>
  <div class="drawal">
    <div class="header">
      <div class="input">
        <el-input v-model="input" placeholder="请输入标题"></el-input>
      </div>
      <div class="input">
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right"
        >
        </el-date-picker>
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
        label="转账单号"
        align="center"
        prop="number"
      ></el-table-column>
      <el-table-column
        prop="agename"
        label="代理商"
        align="center"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        align="center"
        prop="drawal"
        label="转账金额"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="date"
        label="转账时间"
      ></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "drawal",
  data() {
    return {
      loading: false,
      value1: "",
      input: "",
      tableData: [
        {
          num: 1,
          number: "SN23421341242314",
          agename: "北京XXXXXX贸易公司",
          drawal: "234234",
          date: "2021,04,21 10:33:33",
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
.drawal {
  .header {
    display: flex;
    div {
      flex: 3;
      margin-right: 30px;
      &.button {
        margin: 0;
        flex: 1;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>