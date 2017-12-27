<template>
  <div class="banner">
    <el-container>
      <el-header>
        <div>一直很安静</div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#000"
          text-color="#fff" active-text-color="#ffd04b">
          <router-link to="/CBanner">
          <el-menu-item index="1">首页Banner</el-menu-item>
          </router-link>
          <el-submenu index="2">
            <template slot="title">技术扎谈</template>
            <el-menu-item index="2-1">JavaScript</el-menu-item>
            <el-menu-item index="2-2">Jquery</el-menu-item>
            <el-menu-item index="2-3">Vue</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">gggg</el-menu-item>
        </el-menu>
      </el-header>
      <el-main><router-view/></el-main>
      <el-footer>
        <div class="margin-right10"> © 2017 Auther:lmf v1.0 </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
  export default {
    name: 'banner',
    data() {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-header,
  .el-main,
  .el-footer {
    padding: 0px;
  }

  .el-header{
    height: 15% !important;
    line-height: 30px;
  }
 .el-menu--horizontal {
     border-right: none; 
    border-bottom: 0px !important; 
 }
  .el-main {
    height: 80% !important;
    overflow-y: hidden;
        padding: 0px 60px;
    /* background-image: url(../../assets/bg_04.gif);
    background-size: 100% 100%; */
  }

  .el-footer {
    text-align: right;
    height: 5% !important;
    line-height: 30px !important;
  }

</style>
