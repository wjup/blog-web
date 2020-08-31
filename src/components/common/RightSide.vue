<template>
  <div>
    <div class="right-top">PROFILE</div>
    <el-card class="box-card" style="text-align:left">
      &emsp;&emsp;欢迎访问WJUP的博客，请通过邮箱或即时聊天工具联系我。
      <br />
      <br />wjuppro@gmail.com
    </el-card>
    <br />
    <div class="right-top">SEARCH</div>
    <el-card class="box-card">
      <el-input placeholder="请输入内容" v-model="searchValue" prefix-icon="el-icon-search" clearable></el-input>
    </el-card>
    <br />
    <div class="right-top">RECENT POSTS</div>
    <el-card class="box-card" style="text-align:left;font-size:smaller;">
      <span>国内独立开发者实践要点</span>
      <el-divider></el-divider>
      <span>ANT DESIGN和COMPOSITIONEVENT</span>
      <el-divider></el-divider>
      <span>LARAVEL(REST API)+REACT入门范例</span>
      <el-divider></el-divider>
      <span>主流REACT NATIVE组件库比较</span>
      <el-divider></el-divider>
      <span>中国艺术品的SVG</span>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "RightSide",
  data() {
    return {
      searchValue: "",
    };
  },
};
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
</style>