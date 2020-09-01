<template>
  <div>
    <div class="content-line">
        <span class="type-tag">
          <span>JAVA</span>
        </span>
      <span class="create-time">2020/09/01</span>
    </div>
    <div class="content-line">
      <span class="title">{{title}}</span>
    </div>
    <div>
      <span class="title-divider"></span>
    </div>
    <div class="content-line" style="text-align:left;">
      <span class="synopsis">
        这三个库卖相最好的是Shoutem，准确说是shoutem-ui。属于Shoutem平台的一部分，其他开源的还有主题库和动画库。和NativeBase相反，组件有很多props。比如列表，Shoutem是把数据作为prop传到它的。目前来看Shoutem公司对这个开源项目不算太上心，文档不够详细，更新得也不勤，得做好自己看源码修bug的准备。提供的`Html`组件对HTML做了完善的处理（见上右图），效果超过其它两个库太多。
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Article",
    data(){
      return{
        title:this.$route.query.title
      }
    }
  }
</script>

<style scoped>
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
</style>
