<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body,#app,.banner,.el-container{height: 100%;overflow-y: hidden;}
body{
  margin: 0px;
  padding: 0px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #000;
  color:#fff;
}
.margin10{margin:10px;}
.margin-left10{margin-left:10px;}
.margin-right10{margin-right:10px;}
.margin-tot10{margin-top:10px;}
.margin-bottom10{margin-bottom:10px;}

</style>
