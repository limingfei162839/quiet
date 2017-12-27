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
body,h1,h2,h3,h5{
  margin: 0px;
  padding: 0px;
  
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #000;
  color:#fff;
  font-size:14px;
  background-image: url(./assets/bg_01.gif);
    /* background-size: 100% 100%; */
}
.margin10{margin:10px;}
.margin-left10{margin-left:10px;}
.margin-right10{margin-right:10px;}
.margin-tot10{margin-top:10px;}
.margin-bottom10{margin-bottom:10px;}
.padding10{padding: 10px;}
.padding-left10{padding-left: 10px;}
.padding-right10{padding-right: 10px;}
.padding-top10{padding-top: 10px;}
.padding-bottom10{padding-bottom: 10px;}
.fl{float: left;}
.fr{float: right;}
.border-bottom{border-bottom: 1px solid rgba(240, 240, 240, 0.25);}

/*滚动条样式*/
::-webkit-scrollbar{width:5px;height: 20px;}
::-webkit-scrollbar-track{background-color:#ddd;}
::-webkit-scrollbar-thumb{background-color:#999;}
::-webkit-scrollbar-thumb:hover {background-color:#fff}
::-webkit-scrollbar-thumb:active {background-color:#edc}
</style>
