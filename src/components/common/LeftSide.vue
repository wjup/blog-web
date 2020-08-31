<template>
  <div>
    <el-card class="box-card" style="background-color: black;">
      <div class="top-name-one">WJUP</div>
      <div class="top-name-two">乘风破浪，来日可期</div>
    </el-card>
    <el-card class="box-card" style="text-align:left">
      <div v-for="o in memList" :key="o.index" class="text item">
        <i :class="o.icon"></i>&nbsp;
        {{o.name }}
      </div>
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
          name: "文章分类",
          indexPath: "/home",
          index: "1",
          icon: "el-icon-tickets",
        },
        {
          name: "文章列表",
          indexPath: "/tech",
          index: "2",
          icon: "el-icon-upload",
        },
        {
          name: "友情链接",
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
</style>