<template>
  <div>
    <h1>创建按钮</h1>
    <el-button type="success" round size="mini" icon="el-icon-info" autofocus>默认按钮</el-button>

    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: "ButtonDetail"
}
</script>

<style scoped>

</style>
