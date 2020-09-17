<template>
  <div style="padding-top: 1px">
    <div class="right-top">PROFILE</div>
    <!--简介-->
    <el-card class="box-card" style="text-align:left">
      &emsp;&emsp;欢迎访问WJUP的博客，请通过邮箱或即时聊天工具联系我。
      <br/>
      <br/>wjuppro@gmail.com
    </el-card>
    <br/>
    <div class="right-top">SEARCH</div>
    <el-card class="box-card">
      <el-input placeholder="请输入内容" v-model="searchValue" prefix-icon="el-icon-search" clearable></el-input>
    </el-card>
    <br/>
    <!--最近文章-->
    <div class="right-top">RECENT POSTS</div>
    <el-card class="box-card" style="text-align:left;font-size:smaller;">
      <div v-for="top in topArticle" :key="top.id">
        <span>{{top.name}}</span>
        <el-divider></el-divider>
      </div>
    </el-card>
    <br/>
    <!--归档-->
    <div class="right-top">ARCHIVES</div>
    <el-card class="box-card" style="text-align:left;font-size:smaller;">

      <div v-for="year in countList" :key="year.year" style="padding-bottom: 6px">
        <span style="font-weight: bolder">{{year.year}}</span>
        <div class="archive-content">
          <el-row :gutter="2">
            <el-col :xs="4" :sm="6" :md="6" :lg="6" v-for="mon in year.data" :key="mon.month">
              <div class="archive-item">
                <a href="#">
                  <span class="time">{{mon.month}}月</span>
                  <span class="count">{{mon.count}}篇</span>
                </a>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

    </el-card>
  </div>
</template>
<script>
  export default {
    name: "RightSide",
    data() {
      return {
        searchValue: "",
        topArticle: [],
        countList: [
          {
            year: '2020',
            data: [
              {month: 1, count: 12},
              {month: 2, count: 6},
              {month: 4, count: 3},
              {month: 5, count: 8},
              {month: 6, count: 7}]
          },
          {
            year: '2019',
            data: [
              {month: 1, count: 12},
              {month: 2, count: 6},
              {month: 4, count: 3},
              {month: 5, count: 8}]
          },
          {
            year: '2018',
            data: [
              {month: 1, count: 12},
              {month: 2, count: 6},
              {month: 4, count: 3},
              {month: 5, count: 8}]
          },
        ]
      }
    },
    mounted: function () {
      this.loadTopArticle()
    },
    methods: {
      loadTopArticle() {
        var _this = this;
        this.$axios.get('/topArticle').then(resp => {
          if (resp && resp.status === 200) {
            console.log(resp.data);
            _this.topArticle = resp.data.data
          }
        })
      }
    }

  }
</script>

<style scoped>
  .right-top {
    background-color: black;
    color: white;
    height: 15px;
    padding: 15px;
    font-size: small;
    font-weight: bolder;
  }

  .el-divider--horizontal {
    margin: 8px 0;
    background: 0 0;
    border-top: 1px dashed #e8eaec;
  }

  .archive-item {
    width: 56px;
    padding: 9px;
  }

  .archive-item span.time {
    height: 22px;
    background-color: #edf0f3;
    border-radius: 6px 6px 0 0;
    opacity: .8;
    color: #999aaa;
    line-height: 22px;
    margin-bottom: 1px;
    text-align: center;
    padding: 0;
    font-weight: normal;
  }

  .archive-item span.count {
    height: 22px;
    background-color: #f6f8fa;
    border-radius: 0 0 6px 6px;
    color: #555666;
    line-height: 20px;
    font-weight: 500;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .archive-item span {
    display: block;
  }

  .archive-content {
    display: -webkit-box;
  }
</style>
