<template>
  <div>
    <div class="store-container">
      <toy-filter @filterToys="filterToys" />
      <router-link to="/edit" style="width: 12%">
        <el-button type="success">Add New Todo</el-button>
      </router-link>
      <toy-list :toys="toysToShow" @removeToy="removeToy" />
      <pagination @setPageIdx="setPageIdx" />
    </div>
  </div>
</template>

<script>
import toyList from "../components/toy-list.vue";
import toyFilter from "../components/toy-filter.vue";
import pagination from "../components/pagination.vue";

export default {
  props: [],
  data() {
    return {};
  },
  created() {
    this.$store.dispatch({ type: "loadToys" });
  },
  updated() {},
  destroyed() {},
  methods: {
    removeToy(toyId) {
      this.$store.dispatch({ type: "removeToy", toyId });
    },
    filterToys(filterBy) {
      this.$store.commit({ type: "setFilterBy", filterBy });
      this.$store.dispatch({ type: "loadToys" });
    },
    setPageIdx(pageIdx) {
      this.$store.commit({ type: "setPageIdx", pageIdx });
      this.$store.dispatch({ type: "loadToys" });
    },
  },
  computed: {
    toysToShow() {
      console.log(this.$store.getters.toysToShow);
      return this.$store.getters.toysToShow;
    },
  },
  watch: {},
  components: {
    toyList,
    toyFilter,
    pagination,
  },
};
</script>
