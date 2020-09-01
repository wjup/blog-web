<template>
  <div class="content">
    <!--<Title class="f-bottom"></Title>-->
    <el-row :gutter="10">
      <el-col :xs="24" :sm="6" :md="6" :lg="4">
        <LeftSide></LeftSide>
      </el-col>
      <el-col :xs="24" :sm="11" :md="11" :lg="15">
        <el-card class="box-card">
          <br />
          <router-view></router-view>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="7" :md="7" :lg="5">
        <RightSide></RightSide>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Title from "@/components/common/Title";
import LeftSide from "@/components/common/LeftSide";
import RightSide from "@/components/common/RightSide";
import Article from "@/components/Article";

export default {
  name: "Index",
  components: { Title, LeftSide, RightSide,Article },
};
</script>

<style scoped>
.content {
  padding: 0 6%;
}

.f-bottom {
  padding-bottom: 18px;
}
</style>
