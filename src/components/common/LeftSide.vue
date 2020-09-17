<template>
  <div>
    <el-card class="box-card" style="background-color: black;">
      <div class="top-name-one">
        <router-link :to="{path:'/'}" style="color: white">WJUP</router-link>
      </div>
      <div class="top-name-two">乘风破浪，来日可期</div>
    </el-card>
    <el-card class="box-card" style="text-align:left">
      <div v-for="o in memList" :key="o.index" class="text item">
        <i :class="o.icon"></i>
        &nbsp;
        <router-link :to="o.indexPath" style="color:#555">{{o.name }}</router-link>
      </div>
    </el-card>
    <br/>
    <el-card class="box-card" style="text-align:center">
      <el-avatar :size="86" src="http://blog.wjup.top/images/avatar.jpg"></el-avatar>
      <div class="logo-one">wjup</div>
      <div class="logo-two">乘风破浪，来日可期</div>
    </el-card>
  </div>
</template>
<script>
  export default {
    name: "LeftSide",
    data() {
      return {
        memList: [
          {
            name: "首页",
            indexPath: "/",
            index: "1",
            icon: "el-icon-tickets",
          },
          {
            name: "标签分类",
            indexPath: "/tech",
            index: "2",
            icon: "el-icon-upload",
          },
          {
            name: "文章分类",
            indexPath: "/tech",
            index: "2",
            icon: "el-icon-upload",
          },
          {
            name: "我的产品",
            indexPath: "/product",
            index: "3",
            icon: "el-icon-success",
          },
          {
            name: "关于本站",
            indexPath: "/about",
            index: "4",
            icon: "el-icon-location",
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .top-name-one {
    font-size: larger;
    color: white;
    text-align: center;
    padding-bottom: 22px;
    padding-top: 6px;
    font-weight: bold;
  }

  .top-name-two {
    font-size: small;
    color: white;
    text-align: center;
    padding-bottom: 13px;
  }

  .text {
    font-size: smaller;
  }

  .item {
    padding: 9px 0;
  }

  .logo-one {
    padding: 6px 0;
    font-weight: bold;
  }

  .logo-two {
    font-size: small;
    color: #999;
  }

  .count {
    font-size: 12px;
    padding-top: 8px;
    font-weight: bold;
  }
</style>
