<template>
  <div>
    <el-carousel :interval="3000" type="card" height="137px">
      <el-carousel-item v-for="item in imgs" :key="item.index" :index="item.index">
        <img style="width:100%;height:100%" :src="item.path" />
      </el-carousel-item>
    </el-carousel>
    <br />
    <br />
    <div style="text-align:center;">
      <div class="content-line">
        
        <span class="tag">JAVA</span>&nbsp;
        <span class="create-time">2020-08-31</span>
      </div>
      <div class="content-line">
        <span class="title">ANT DESIGN和COMPOSITIONEVENT</span>
      </div>
      <div>
        <span class="title-divider"></span>
      </div>
      <div class="content-line">
        <span class="synopsis">中文输入法（包括CJK输入法）都有的问题：如果上监听input事件，在Win/Mac上每次 …</span>
      </div>
      <div class="content-line">
        <el-button>MORE</el-button>
      </div>
      <el-divider><i class="el-icon-cold-drink"></i></el-divider>
    </div>

    <div style="text-align:center;">
      <div class="content-line">
        <span class="tag">PYTHON</span>&nbsp;
        <span class="tag">PYTHON</span>&nbsp;
        <span class="create-time">2020-08-31</span>
      </div>
      <div class="content-line">
        <span class="title">ANT DESIGN和COMPOSITIONEVENT</span>
      </div>
      <div>
        <span class="title-divider"></span>
      </div>
      <div class="content-line">
        <span class="synopsis">中文输入法（包括CJK输入法）都有的问题：如果上监听input事件，在Win/Mac上每次 …</span>
      </div>
      <div class="content-line">
        <el-button>MORE</el-button>
      </div>
      <el-divider><i class="el-icon-cold-drink"></i></el-divider>
    </div>

    <div style="text-align:center;">
      <div class="content-line">
        <span class="tag">PYTHON</span>&nbsp;
        <span class="tag">PYTHON</span>&nbsp;
        <span class="create-time">2020-08-31</span>
      </div>
      <div class="content-line">
        <span class="title">ANT DESIGN和COMPOSITIONEVENT</span>
      </div>
      <div>
        <span class="title-divider"></span>
      </div>
      <div class="content-line">
        <span class="synopsis">中文输入法（包括CJK输入法）都有的问题：如果上监听input事件，在Win/Mac上每次 …</span>
      </div>
      <div class="content-line">
        <el-button>MORE</el-button>
      </div>
      <el-divider><i class="el-icon-cold-drink"></i></el-divider>
    </div>

    
  </div>
</template>
<script>
export default {
  name: "Top",
  data() {
    return {
      imgs: [
        {
          path: "https://gitee.com/wjup/img/raw/master/img/banner006.jpg",
          index: "1",
        },
        {
          path: "https://gitee.com/wjup/img/raw/master/img/banner002.jpg",
          index: "2",
        },
        {
          path: "https://gitee.com/wjup/img/raw/master/img/banner003.jpg",
          index: "3",
        },
        {
          path: "https://gitee.com/wjup/img/raw/master/img/banner004.jpg",
          index: "4",
        },
        {
          path: "https://gitee.com/wjup/img/raw/master/img/banner005.jpg",
          index: "5",
        },
        {
          path: "https://gitee.com/wjup/img/raw/master/img/banner001.jpg",
          index: "6",
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.tag {
  padding: 3px;
  background-color: black;
  color: white;
  border-radius: 5px;
  font-size: x-small;
}

.create-time {
  color: #999;
  font-size: small;
}

.title {
  font-size: x-large;
}

.title-divider {
  border-top: 2px solid;
  display: block;
  max-width: 55px;
  margin: 0 auto 12px;
  color: #000;
}

.synopsis {
  font-size: small;
}

.content-line {
  padding: 12px;
}
</style>