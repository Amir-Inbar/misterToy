
<template>
  <nav>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo navbar-container"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link to="/">Store</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/admin">Admin</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/dashboard">Dashboard</router-link>
      </el-menu-item>
      <el-menu-item index="4">Grapth</el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  created() {},
  updated() {},
  destroyed() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },

  computed: {},
  watch: {},
  components: {},
};
</script>