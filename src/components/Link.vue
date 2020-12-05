<template>
<div>
  <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
  <el-link type="primary" :underline="aa">主要链接</el-link>
  <el-link type="success" disabled>成功链接</el-link>
  <el-link type="warning">警告链接</el-link>
  <el-link type="danger" icon="el-icon-platform-eleme">危险链接</el-link>
  <el-link type="info">信息链接</el-link>
</div>
</template>

<script>
export default {
  name: "Link",
  data(){
    return{
      aa:false,
    }
  }
}
</script>

<style scoped>

</style>
