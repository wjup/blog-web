<template>
  <div>
    <h2>关于WJUP</h2>
    <div class="block" style="text-align:left;padding-top:9px">
      <el-timeline>
        <el-timeline-item v-for="list in dataList" :key="list.id" :timestamp="list.time" placement="top">
          <el-card>
            <h4>{{list.content}}</h4>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>
  export default {
    name: "About",
    data() {
      return {
        dataList: [
          {time: '2020/09/02', content: '文章详情页编写', id: '1'},
          {time: '2020/09/01', content: '更新首页样式', id: '1'},
          {time: '2020/08/31', content: '项目成立，前端采用最新版的vue+elementui', id: '1'}
        ]
      }
    }
  };
</script>

<style scoped>
</style>
