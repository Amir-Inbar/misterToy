

<template>
  <div id="app" class="main-layout">
    <nav-bar />
    <router-link to="/"></router-link>
    <router-view />
  </div>
</template>



<script>
import navBar from "./components/navbar.vue";

export default {
  props: {},
  data() {
    return {};
  },
  created() {},
  updated() {},
  destroyed() {},
  methods: {},

  computed: {},
  watch: {},
  components: {
    navBar,
  },
};
</script>