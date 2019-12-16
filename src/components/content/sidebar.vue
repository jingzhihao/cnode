<template>
 <div>
   <el-card class="box-card">
     <div class="box-one" v-if='name.trim()===""'>
        <div class="shequ">CNode:Node.js专业中文社区</div>
        <div class="zhuce">您可以登录或注册，也可以</div>
        <div class="anniu"><el-button type="primary" @click="clickdenglu">通过GitHub登录</el-button></div>
     </div>
      <div class="box-one" v-if='name  !== ""' >
        <div class="shequ">作者：{{name}} <img src="../../assets/img/QQ图片20191218160447.gif" width="30px" height="30px" class="asdfg"> </div>
        <div class="zhuce">积分：xxx</div>
        <div class="anniu"><el-button class="qwer" type="primary" @click="clickItem">注销</el-button></div>
     </div>
     <div class="box-two">
      <div class="img-one"><img src="../../assets/img/a1.jpg" width="280px" height="60px"> </div>
      <div class="img-one"><img src="../../assets/img/a2.jpg" width="280px" height="60px"></div>
      <div class="img-one"><img src="//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-" width="280px" height="60px"></div>
     </div>
     <div class="box-three">
        <div class="conversation">无人回复的话题</div>
         <div class="conversation-content">nestjs 微服务教程有没有</div>
         <div class="conversation-content">mongodb在事务中更新了文档后如何在事务中就就能查询出来</div>
         <div class="conversation-content">Node+MongoDB+TypeScript 开发后端服务的一些实践</div>
         <div class="conversation-content">eggjs 疑似在`sofa-rpc-node`模块中对dubbo协议支持的一个小问题</div>
         <div class="conversation-content">node v8.1.3 pm2问题</div>
     </div>
     <div class="box-four">
        <div class="league">积分榜   TOP 100 >>  </div>
        <div class="paiming">21815 i5ting</div>
         <div class="paiming">15695 alsotang</div>
         <div class="paiming">9350 leapon</div>
         <div class="paiming">9310 atian25</div>
         <div class="paiming">8780 jiyinyiyong</div>
         <div class="paiming">7465 yakczh</div>
         <div class="paiming">6840 im-here</div>
         <div class="paiming">6115 DevinXian</div>
         <div class="paiming">5815 chapgaga</div>
         <div class="paiming">5355 magicdawn</div>
     </div>
     <div class="box-five">
        <div class="friendship">友情社区</div>
        <div class="img-two"><img src="../../assets/img/h1.png" width="150px" height="50px"></div>
        <div class="img-two"><img src="../../assets/img/h2.png" width="150px" height="50px"></div>
        <div class="img-two"><img src="../../assets/img/h3.png" width="150px" height="50px"></div>
        <div class="img-two"><img src="../../assets/img/h4.png" width="150px" height="50px"></div>
     </div>
     <div class="erweima">
        <div class="erwei">客服端二维码</div>
        <div class="img-three"> <img src="../../assets/img/erweima.png"> </div>
     </div>
</el-card>
 </div>
</template>

<script>
 export default {
   data () {
     return {
      name: ''
     }
   },
   components: {

   },
   methods: {
    clickdenglu(){
       this.$router.push({name:'sign'})
    },
    clickItem(){
          localStorage.name = this.name = ''
          
    }
   },
   mounted() {
    if(localStorage.name){
      this.name = localStorage.getItem('name')
    }
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
  .box-card {
   margin-top: 30px;
   background: #E1E1E1;
  }
  .box-one{
    width: 300px;
    height: 150px;
    background: white;
  }
  .shequ{
    width: 270px;
    height:70px;
    line-height: 70px;
    margin:0 auto;
  }
  .zhuce{
    width: 270px;
    height: 30px;
    line-height: 30px;
    margin:0 auto;
  }
  .anniu{
    width: 270px;
    height: 40px;
    margin:0 auto;
  }
  .box-two{
    width: 300px;
    height: 220px;
    margin-top: 10px;
    background:white;
  }
  .img-one{
    width: 280px;
    height: 60px;
    margin:10px auto;
  }
  .box-three{
    width: 300px;
    height: 200px;
    margin-top: 10px;
    background: white;  
  }
  .conversation{
    width: 270px;
    height: 30px;
    margin: 5px auto;
    line-height: 30px;
    margin:0 auto;
  }
  .conversation-content{
    width: 270px;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color:#666;
    margin:0 auto;
  }
  .box-four{
    width: 300px;
    height: 350px;
    margin-top:10px;
    background: white;
  }
  .league{
    width: 270px;
    height: 50px; 
    line-height: 30px;
    margin:0 auto;
  }
  .paiming{
    width: 270px;
    height: 30px;
    line-height: 30px;
    color:#666;
    margin:0 auto;
  }
  .box-five{
    width: 300px;
    height: 300px;
    margin-top:10px;
    background: white;
  }
  .friendship{
    width: 270px;
    height: 50px;
    line-height: 30px;
    margin:0 auto;
  }
  .img-two{
   width: 270px;
   height: 50px;
   margin:0 auto;
  }
  .erweima{
    width: 300px;
    height: 350px;
    margin-top:10px;
    background: white;
  }
  .erwei{
    width: 270px;
    height: 30px;
    line-height: 30px;
    margin:0 auto;
  }
  .img-three{
    width: 280px;
    height: 280px;
    margin:0 auto;
  }
  .asdfg{
    margin-top:5px;
  }
  .qwer{
    line-height: 3px;
    height: 20px;
    margin-left:130px;
  }
</style>