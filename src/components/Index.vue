<template>
  <div class="content">
    <Title class="f-bottom"></Title>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="8" :md="6" :lg="4">
        <LeftSide></LeftSide>
      </el-col>
      <el-col :xs="24" :sm="8" :md="10" :lg="14">
        <el-card class="box-card">
          <!-- </el-card>
        <br>
          <el-card class="box-card">-->
          <br />
          <router-view></router-view>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8" :lg="6">
        <RightSide></RightSide>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Title from "@/components/common/Title";
import LeftSide from "@/components/common/LeftSide";
import RightSide from "@/components/common/RightSide";

export default {
  name: "Index",
  components: { Title, LeftSide, RightSide },
};
</script>

<style scoped>
.content {
  padding: 0 12%;
}

.f-bottom {
  padding-bottom: 18px;
}

a {
  text-decoration: none;
}
</style>