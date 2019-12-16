<template>
  <div>
    <div class="box">
      <div class="box-one">
        <div class="Innerbox">
          <div class="title">
            <span v-if="arr.top === true">
              <span class="zhiding">置顶</span>
            </span>
            <span v-else-if="arr.good === true">
              <span class="zhiding">精华</span>
            </span>
            <span v-else-if="arr.tab === 'share' ">
              <span class="fenxiang">分享</span>
            </span>
            <span v-else-if="arr.tab === 'ask' ">
              <span class="wenda">问答</span>
            </span>
            <span class="ziti">{{arr.title}}</span>
          </div>
          <div class="time">
            <div>发布于月前 ·作者{{arr.author.loginname}}·{{arr.visit_count}}次浏览·来自 分享</div>
          </div>
          <div class="content">
            <div v-html="arr.content"></div>
          </div>
        </div>
      </div>

      <div class="box-nine">
        <div class="box-ten">
          <div>
            <div class="Reply">{{arr.replies.length}}回复</div>
          </div>
          <div class="Replycontent" v-for="(item,index) in arr.replies" :key="index">
            <div class="Headportrait">
              <img :src="item.author.avatar_url" width="50px" height="50px" />
            </div>
            <div class="right">
              <div class="author">
                {{item.author.loginname}}
                <span
                  class="yangshi"
                >{{index+1}}楼 · {{gettime(arr.last_reply_at)}}</span>
              </div>
              <div class="comment" v-html="item.content"></div>
            </div>
            <div class="Landlord">
              <div class="img">
                <img src="../assets/img/点赞.png" width="30px" height="30px" /> 6
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleid: {},
      arr: {}
    };
  },
  components: {},
  methods: {
    getData() {
      this.$axios
        .req(`/topic/${this.titleid}`)
        .then(res => {
          this.arr = res.data;
          console.log(this.arr);
        })
        .catch(err => {
          console.log(err);
        });
    },
    gettime(time) {
      let timestamp = new Date().valueOf();
      let T = new Date(time); // 将指定日期转换为标准日期格式。Fri Dec 08 2017 20:05:30 GMT+0800 (中国标准时间)
      // console.log(T.getTime())  // 将转换后的标准日期转换为时间戳。
      let times = (timestamp - T) / 1000 / 60;
      if (Math.ceil(times) < 60) {
        return Math.ceil(times) + "分钟前";
      } else if (Math.ceil(times / 60) < 24) {
        return Math.ceil(times / 60) + "小时前";
      } else if (Math.ceil(times / 60 / 24) < 30) {
        return Math.ceil(times / 60 / 24) + "天前";
      } else if (Math.ceil(times / 60 / 24 / 30) < 12) {
        return Math.ceil(times / 60 / 24 / 30) + "月前";
      } else {
        return "很久以前";
      }
    }
  },
  mounted() {
    this.titleid = this.$route.query.id;
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box {
  margin-top: 30px;
  background: #e1e1e1;
}
.box-one {
  width: 1050px;
  margin-left: 50px;
  background: white;
}
.Innerbox {
  width: 1000px;
  margin: 0 auto;
}
.title {
  width: 1000px;
  height: 50px;
  line-height: 50px;
}
.zhiding {
  background: chartreuse;
}
.fenxiang {
  background: #666;
}
.wenda {
  background: #666;
}
.ziti {
  font-size: 25px;
  font-weight: bold;
}
.time {
  width: 1000px;
  height: 30px;
  line-height: 30px;
}
.content {
  width: 1000px;
  line-height: 35px;
}
.box-nine {
  width: 1050px;
  margin-top: 10px;
  margin-left: 50px;
  background: white;
}
.box-ten {
  width: 1000px;
  margin: 0 auto;
}
.Reply {
  width: 1000px;
  height: 30px;
  line-height: 30px;
}
.Replycontent {
  width: 1000px;
  height: 100px;
  display: flex;
}
.Headportrait {
  width: 50px;
  height: 50px;
}
.right {
  width: 900px;
  height: 100px;
}
.author {
  width: 900px;
  height: 30px;
  line-height: 30px;
}
.yangshi {
  color: #0088cc;
}
.comment {
  width: 900px;
  height: 70px;
}
.Landlord {
  width: 50px;
  height: 100px;
}
</style>