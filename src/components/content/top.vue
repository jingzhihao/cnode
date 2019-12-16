<template>
  <div>
    <div class="top">
      <div class="top-img">
        <img
          src="//static2.cnodejs.org/public/images/cnodejs_light.svg"
          class="la"
          @click="clickde"
        />
      </div>
      <div class="search">
        <div class="piger"></div>
        <input type="text" class="textbox" />
      </div>
      <div class="top-title">
        <div class="title">
         <span @click="clickde" class="sadas">首页</span>
        </div>
        <div class="title">
          <a href="https://cnodejs.org/getstart">新手入门</a>
        </div>
        <div class="title">
          <a href="https://cnodejs.org/api">API</a>
        </div>
        <div class="title">
          <a href="https://cnodejs.org/about">关于</a>
        </div>
        <div class="title">
          <a href="https://github.com/account/unverified-email">注册</a>
        </div>
        <div class="title">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    clickde(){
      this.$router.push({name:"home"})
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
a {
  text-decoration: none;
  color: white;
}

.top {
  width: 100%;
  height: 60px;
  display: flex;
  background: black;
  justify-content: space-between;
  align-items: center;
}
.top-img {
  width: 120px;
  height: 50px;
  margin-left: 100px;
}
.la {
  width: 120px;
  height: 40px;
}
.la:hover{
  cursor: pointer;
}
.search {
  width: 300px;
  height: 30px;
  background: #666;
  margin-left: -350px;
  border-radius: 30px;
  display: flex;
}
.search:hover {
  background: white;
}
.search:hover .textbox {
  background: white;
}
.piger {
  width: 25px;
  height: 25px;
  background: url("../../assets/img/1.png") no-repeat;
  background-size: cover;
  margin-left: 5px;
}
.textbox {
  width: 250px;
  height: 18px;
  margin-top: 5px;
  border: none;
  background: #666;
  outline: medium;
}
.top-title {
  width: 600px;
  height: 60px;
  display: flex;
  align-items: center;
}

.title {
  width: 80px;
  height: 50px;
  color: white;
  text-align: center;
  line-height: 50px;
}
.sadas:hover{
  cursor: pointer;
}
</style>