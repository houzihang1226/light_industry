<template>
  <div class="setsys">
    <el-form
      ref="form"
      :model="form"
      label-position="right"
      label-width="180px"
    >
      <h1>敏感词配置</h1>
      <el-form-item label="是否允许输入敏感词：">
        <el-radio-group v-model="form.resource">
          <el-radio label="是"></el-radio>
          <el-radio label="否"></el-radio>
        </el-radio-group>
      </el-form-item>
      <h1>敏感词配置</h1>
      <el-form-item label="部署路径：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="端口号：">
        <el-input v-model="form.region"></el-input>
      </el-form-item>
      <el-form-item label="数据备份文件存储服务器：">
        <el-input v-model="form.dataservice"></el-input>
      </el-form-item>
      <el-form-item label="模板文件存储服务器">
        <el-input v-model="form.service"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button>取消</el-button>
        <el-button type="primary">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "setsys",
  data() {
    return {
      loading: false,
      form: {
        resource: "",
        name: "",
        region: "",
        dataservice: "",
        service: "",
      },
    };
  },
};
</script>
<style lang='less' scoped>
h1 {
  margin: 0 0 30px 120px;
}
.el-form {
  .el-input {
    width: 600px;
  }
}
</style>