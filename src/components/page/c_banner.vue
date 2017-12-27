<template>
  <div class="c_banner fl">
    <div class="fl c_banner_left">
      <div class="hover padding10 margin-bottom10">
        <div class="border-bottom"><h3>我是标题的使用了vue，感觉对vue知识的vue知识vue知识掌握也越来越熟的使用了vue，感觉对vue知识的掌握也越来越熟</h3></div>
        <div class="c_banner_content c_banner_clamp">公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这vue知识的掌握也越来越熟练vue知识的掌握也越来越熟练vue知识的掌握也越来越熟练</div>
     </div>
     <div class="hover padding10 margin-bottom10">
        <div class="border-bottom"><h3>我是标题的使用了vue，感觉对vue知识的vue知识vue知识掌握也越来越熟的使用了vue，感觉对vue知识的掌握也越来越熟</h3></div>
        <div class="c_banner_content c_banner_clamp">公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这vue知识的掌握也越来越熟练vue知识的掌握也越来越熟练vue知识的掌握也越来越熟练</div>
     </div>
     <div class="hover padding10 margin-bottom10">
        <div class="border-bottom"><h3>我是标题的使用了vue，感觉对vue知识的vue知识vue知识掌握也越来越熟的使用了vue，感觉对vue知识的掌握也越来越熟</h3></div>
        <div class="c_banner_content c_banner_clamp">公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这vue知识的掌握也越来越熟练vue知识的掌握也越来越熟练vue知识的掌握也越来越熟练</div>
     </div>
     <div class="hover padding10 margin-bottom10">
        <div class="border-bottom"><h3>我是标题的使用了vue，感觉对vue知识的vue知识vue知识掌握也越来越熟的使用了vue，感觉对vue知识的掌握也越来越熟</h3></div>
        <div class="c_banner_content c_banner_clamp">公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这vue知识的掌握也越来越熟练vue知识的掌握也越来越熟练vue知识的掌握也越来越熟练</div>
     </div>
     <div class="hover padding10 margin-bottom10">
        <div class="border-bottom"><h3>我是标题的使用了vue，感觉对vue知识的vue知识vue知识掌握也越来越熟的使用了vue，感觉对vue知识的掌握也越来越熟</h3></div>
        <div class="c_banner_content c_banner_clamp">公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这vue知识的掌握也越来越熟练vue知识的掌握也越来越熟练vue知识的掌握也越来越熟练</div>
     </div>
    </div>
    <div class="c_banner_right fr">
           <div class="padding10">
             <h3 class="border-bottom">About the Author</h3>
             <div class="c_banner_content">大量的使用了vue，感觉对vue知识的掌握也越来越熟大量的使用了vue，感觉对vue知识的掌握也越来越熟大量的使用了vue，感觉对vue知识的掌握也越来越熟大量的使用了vue，感觉对vue知识的掌握也越来越熟</div>
           </div>
           <div>

           </div>
           <div>

           </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'banner',
    data() {
      return {
        activeIndex: '1'
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c_banner{height: 99% !important;width: 100%;border: 1px solid rgba(240, 240, 240, 0.25);border-radius: 3px;}

.c_banner .c_banner_left{width: 65%;line-height: 30px;height: 100%;
    overflow-y: scroll !important;
    overflow-x: hidden;}
h3{color: rgba(255, 255, 255, 0.78);white-space: nowrap;width:60%;overflow: hidden;text-overflow: ellipsis;}
.c_banner_content{text-indent: 24px;color: rgba(255, 255, 255, 0.63);
    font-size: 12px;text-align: justify;}
.c_banner_clamp{display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;}

.c_banner .c_banner_left .hover:visited{background:#1b1212;color: blue;cursor: pointer;}
 .c_banner .c_banner_left .hover:hover{background:#1b1212;color: #fff;cursor: pointer;}
 .c_banner .c_banner_left .hover:active{background:#1b1212;color: yellow;cursor: pointer;}

.c_banner .c_banner_right{width: 35%;line-height: 30px;}
</style>
