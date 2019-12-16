<template>
  <div class="box">
    <div class="box-one">
      <div class="navigation">
        <div class="navigation-one">
          <span>全部</span>
        </div>
        <div class="navigation-one">
          <span>精华</span>
        </div>
        <div class="navigation-one">
          <span>分享</span>
        </div>
        <div class="navigation-one">
          <span>问答</span>
        </div>
        <div class="navigation-one">
          <span>招聘</span>
        </div>
        <div class="navigation-one">
          <span>客服端测试</span>
        </div>
      </div>
      <div v-for="(item) in list(arr)" :key="item.id">
        <div class="content-title" style="display:flex">
          <div style="flex:9" class="sky">
            <span>
              <img :src="item.author.avatar_url" />
            </span>
            <!-- <span class="colo">{{item.author.loginname}}</span> -->
            <span class="col">{{item.reply_count}}</span>/
            <span class="colo">{{item.visit_count}}</span>
            <span v-if="item.top === true">
              <span class="zhiding">置顶</span>
            </span>
            <span v-else-if="item.good === true">
              <span class="zhiding">精华</span>
            </span>
            <span v-else-if="item.tab === 'share' ">
              <span class="tab">分享</span>
            </span>
            <span v-else-if="item.tab === 'ask' ">
              <span class="tab">问答</span>
            </span>
            <span @click="clickiten(item.id)" class="boxnice">{{item.title}}</span>
          </div>
          <div class="tupian" style="flex:0.3">
            <img :src="item.author.avatar_url" />
          </div>
          <div style="flex:0.7" class="getting">{{gettime(item.last_reply_at)}}</div>
        </div>
      </div>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="arr.length"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {

    return {
      arr: [],
      currentPage: 1,
      pagesize: 10
    };
  },
  components: {},
  methods: {
    getData() {
      this.$axios
        .req("/topics")
        .then(res => {
          this.arr = res.data;
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });    //发送请求，获取数据
    },

    handleSizeChange(val) {
      this.pagesize = val;
    }, //
    handleCurrentChange(val) {
      this.currentPage = val;
    },//
    list(arr) {
      return arr.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      );
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
    },

    clickiten(val) {
      this.$router.push({ name: "detail", query: { id: val } });
    }
  },
  mounted() {
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
.navigation {
  height: 40px;
  display: flex;
}
.navigation-one {
  width: 80px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #05b841;
}
.navigation-one span {
  cursor: pointer;
}
.content-title {
  height: 50px;
  line-height: 50px;
  border-radius: 20px;
}
.colo {
  font-size: 12px;
  color: #666;
}
.content-title img {
  width: 30px;
  height: 30px;
}
.col {
  font-size: 15px;
  color: #9e78c3;
}
.tupian {
  width: 18px;
  height: 18px;
}
.sky {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.zhiding {
  background: rgba(105, 209, 0, 0.733);
  padding: 2px;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.863);
}
.tab {
  background: rgb(160, 160, 160);
  padding: 2px;
  border-radius: 5px;
}

.boxnice:hover {
  cursor: pointer;
}
.getting{
  font-size:12px;
}
</style>