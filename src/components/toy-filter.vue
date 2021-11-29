
<template>
  <section class="filter-container flex">
    <div class="search-filter flex">
      <div class="filter-btns flex">
        <el-radio-group
          v-model="filterBy.stock"
          size="medium"
          @change="filterToys"
        >
          <el-radio-button :label="true">Stock</el-radio-button>
          <el-radio-button :label="false">Out Of Stock</el-radio-button>
          <el-radio-button label="">All</el-radio-button>
        </el-radio-group>
      </div>

      <div class="filter-search-bar flex">
        <el-input
          placeholder="Toy Search.."
          v-model="filterBy.name"
          @input="filterToys"
        ></el-input>
        <el-select
          class="filter-labels"
          v-model="filterBy.labels"
          multiple
          collapse-tags
          style="margin-left: 20px"
          placeholder="Select"
          @visible-change="filterToys"
        >
          <el-option
            v-for="label in labels"
            :key="label"
            :label="label"
            :value="label"
          >
          </el-option>
        </el-select>
        <el-button
          style="margin-left: 20px"
          type="primary"
          @click="setSortBy('name')"
          >Text</el-button
        >
        <el-button type="primary" @click="setSortBy('price')">Price</el-button>
        <el-button type="primary" @click="setSortBy('created')"
          >Created</el-button
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      filterBy: {
        name: "",
        stock: "",
        labels: [],
        sortBy: {
          type: "name",
          descending: false,
        },
        pageIdx: 0,
      },
      labels: [
        "On wheels",
        "Box game",
        "Art",
        "Baby",
        "Doll",
        "Puzzle",
        "Outdoor",
      ],
    };
  },
  created() {},
  updated() {},
  destroyed() {},
  methods: {
    filterToys() {
      const filter = JSON.parse(JSON.stringify(this.filterBy));
      this.$emit("filterToys", filter);
    },
    setSortBy(sortBy) {
      this.filterBy.sortBy.type = sortBy;
      this.filterBy.descending = !this.filterBy.descending;
      const filter = JSON.parse(JSON.stringify(this.filterBy));
      this.$emit("filterToys", filter);
    },
  },
  computed: {},
  watch: {},
  components: {},
};
</script>