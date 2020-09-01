<template>
  <div style="padding-top: 1px">
    <el-carousel :interval="3000" type="card" height="137px">
      <el-carousel-item v-for="item in imgs" :key="item.index" :index="item.index">
        <img style="width:100%;height:100%" :src="item.path"/>
      </el-carousel-item>
    </el-carousel>
    <br/>
    <br/>

    <div v-for="article in articleList" :key="article.id" style="padding-bottom: 20px">
      <div class="content-line">
        <span class="type-tag" v-for="type in article.type">
          <span>{{type}}</span>
        </span>
        <span class="create-time">{{article.time}}</span>
      </div>
      <div class="content-line">
        <router-link :to="article.path" class="title">{{article.title}}</router-link>
      </div>
      <div>
        <span class="title-divider"></span>
      </div>
      <div class="content-line" style="text-align:left;">
        <span class="synopsis">{{article.synopsis}}</span>
      </div>
      <div class="content-line">
        <el-button v-on:click="articleDetail(article.title)">
          CONTINUE READING
        </el-button>
      </div>
      <el-divider><i class="el-icon-cold-drink"></i></el-divider>
    </div>

    <el-pagination
      background
      :pager-count=5
      layout="prev, pager, next"
      :total="100">
    </el-pagination>
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
        articleList: [
          {
            id: '1',
            type: ['JAVA', 'PYTHON'],
            time: '2020/08/31',
            path: "/detail",
            title: 'ANT DESIGN和COMPOSITIONEVENT',
            synopsis: '中文输入法（包括CJK输入法）都有的问题：如果上监听input事件，在Win/Mac上每次 …'
          },
          {
            id: '2',
            type: ['JAVA'],
            time: '2020/08/31',
            path: "/detail",
            title: '国内独立开发者实践要点',
            synopsis: '本文所指的独立开发者属于自由职业者，自由职业者是不与用人单位建立正式劳动关系，又区别于个体、私营企业主，提供服 …'
          },
          {
            id: '3',
            type: ['LINUX', 'PYTHON'],
            time: '2020/08/31',
            path: "/detail",
            title: 'DJANGO+MYSQL安装配置详解(LINUX)[更新为2.1.5版]',
            synopsis: 'Django是一个开源的Web应用框架，由Python写成，并于2005年7月在BSD许可证下发布。Django的主要目标是使得开发复杂的、数据库驱动的网站变得简单。Django采用MVC设计模式注重组件的重用性和“可插拔性”，敏捷开发和DRY法则（Don’t Repeat Yourself）。在Django中Python被普遍使用，包括设置和数据模型。本文介绍Django在Linux(Ubuntu 16.04.2)+MySQL(5.7.43)环境下安装、配置的过程，包括安装、运行、添加应用的流程，建立一个可以从MySQL读取文章并显示的Django应用。文章面向刚接触Python/Django的初学者，所以安装过程都以默认环境为主，Python版本3.5.2。'
          },
          {
            id: '4',
            type: ['QUARTZ'],
            time: '2020/08/31',
            path: "/detail",
            title: 'LARAVEL(REST API)+REACT入门范例',
            synopsis: '不知道什么时候开始的以讹传讹，React变成了“很难入门”的框架，但如果只讨论使用而不是源码，React其实是 …'
          },
          {
            id: '5',
            type: ['SPRINGBOOT'],
            time: '2020/08/31',
            path: "/detail",
            title: '主流REACT NATIVE组件库比较',
            synopsis: '本文比较React Native(以下简称RN)的三个组件库：NativeBase、Shoutem、React …'
          }
        ]
      }
    },
    methods: {
      articleDetail: function (title) {
        console.log('================')
        this.$router.push({path: '/detail', query: {title: title}});
      }
    },
    mounted() {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    }
  }
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

  .type-tag {
    padding: 6px;
    /*background-color: black;*/
    /*color: white;*/
    /*border-radius: 5px;*/
    font-size: x-small;
  }

  .create-time {
    color: #999;
    font-size: small;
  }

  .title {
    transition: .25s;
    color: black;
    font-size: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 400;
    line-height: 1.4em;
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
    line-height: 30px;
    text-align: left;
  }

  .content-line {
    padding: 12px;
  }

  .el-button:focus, .el-button:hover {
    color: #ffffff;
    border-color: #000000;
    background-color: #000000;
  }
</style>
