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
      <el-input placeholder="请输入内容" :model="searchValue" prefix-icon="el-icon-search" clearable></el-input>
    </el-card>
     <br />
    <div class="right-top">RECENT POSTS</div>
    <el-card class="box-card">
      <el-input placeholder="请输入内容" :model="searchValue" prefix-icon="el-icon-search" clearable></el-input>
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
  height: 18px;
  padding: 15px;
  font-size: small;
  font-weight: bolder;
}
</style>