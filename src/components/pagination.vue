
<template>
  <section class="pagination-container flex" v-if="pageToEdit">
    <div class="block">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="pageToEdit.total"
        :page-size="pageToEdit.size"
        @current-change="setPageIdx"
      >
      </el-pagination>
    </div>
  </section>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      pageToEdit: {},
    };
  },
  created() {
    const page = this.pageObj;
    this.pageToEdit = page;
  },
  updated() {},
  destroyed() {},
  methods: {
    setPageIdx(pageNum) {
      this.$emit("setPageIdx", pageNum);
    },
  },

  computed: {
    pageObj() {
      return this.$store.getters.getPage;
    },
  },
  watch: {},
  components: {},
};
</script>