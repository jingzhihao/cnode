<template>
 <div>
  <div class="button-border">
    <div class="button-1">
      <div class="under-one">RSS|源码地址</div>
    <div class="under-two">CNode社区为国内最专业的Node.js开源技术社区，致力于Node.js的技术研究。</div>
     <div class="under-three">
       服务器赞助商为<img src="../../assets/img/b1.png">，存储赞助商为<img src="../../assets/img/b2.png" width="150px" height="60px">
       ,由<img src="../../assets/img/b3.png" width="180px" height="80px">提供应用性服务。

     </div>
     <div class="under-four">新手搭建Node.js服务器，推荐使用无需备案  <span style="color:skyblue"> DigitalOcean(https://www.digitalocean.com/)</span> </div>
    </div>
  </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.button-border{
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  margin-top:20px;
  background: white;
}
.button-1{
  width: 1000px;
  height: 220px;
  margin-left: 50px;
}
.under-one{
  width: 100px;
  height: 30px;
  line-height: 30px;
}
.under-two{
  width: 800px;
  height: 30px;
  line-height: 30px;
}
.under-three{
  width: 1000px;
  height: 130px;
}
.under-four{
  width: 1000px;
  height: 30px;
  line-height: 30px;
}
</style>