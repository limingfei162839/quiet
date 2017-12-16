<template>
  <div class="banner">
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer><div class="margin-right10">  © 2017 Auther:lmf v1.0 </div></el-footer>
    </el-container>
  </div>
</template>
<script>
  export default {
    name: 'banner',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-header,.el-main,.el-footer{padding: 0px;}
  .el-header,
  .el-footer {
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background:red;
    line-height: 160px;
  }

.el-footer {
    text-align: right;
    height: 5% !important;
    line-height: 30px !important;
  }
</style>
