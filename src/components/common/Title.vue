<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#ffd04b"
    >
      <el-menu-item v-for="nav in navItems" :index="nav.index" :key="nav.indexPath">
        <router-link :to="nav.indexPath">{{nav.name}}</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Title",
  data() {
    return {
      navItems: [
        { name: "HOME", indexPath: "/home", index: "1" },
        { name: "TECH", indexPath: "/tech", index: "2" },
        { name: "PRODUCT", indexPath: "/product", index: "3" },
        { name: "ABOUT", indexPath: "/about", index: "4" },
      ]
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>